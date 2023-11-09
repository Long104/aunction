const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let items = [];
let currentBuyerNumber = '';
let currentHighestBid = 0;
let auctionResults = {
  sold: [],
  unsold: [],
  noBids: [],
};

function displayItemInformation() {
  console.log('Auction Item Setup:');
  console.log('| Item Number | Description       | Reserve Price |');
  items.forEach(item => {
    console.log(`| ${item.itemNumber}         | ${item.description}     | $${item.reservePrice}          |`);
  });
}

function validateItemsCount() {
  rl.question('Number of items: ', (count) => {
    count = parseInt(count);
    if (isNaN(count) || count < 10) {
      console.log('There must be at least 10 items in the auction.');
      validateItemsCount();
    } else {
      collectItemInformation(count);
    }
  });
}

function collectItemInformation(count) {
  let currentItem = 1;

  function collectInfo() {
    rl.question(`Item ${currentItem} - Enter Description: `, (description) => {
      rl.question(`Item ${currentItem} - Enter Reserve Price: $`, (reservePrice) => {
        items.push({
          itemNumber: currentItem,
          description,
          reservePrice: parseFloat(reservePrice),
          currentBid: 0,
          currentBuyerNumber: '',
        });
        currentItem++;
        if (currentItem <= count) {
          collectInfo();
        } else {
          console.log('Item information collected successfully.');
          displayItemInformation();
          startBidding();
        }
      });
    });
  }

  collectInfo();
}

function startBidding() {
  displayItemInformation();
  rl.question('Buyer Number: ', (buyerNumber) => {
    currentBuyerNumber = buyerNumber;
    placeBid();
  });
}

function placeBid() {
  rl.question('Item Number to Bid On: ', (itemNumber) => {
    const item = items.find(i => i.itemNumber == itemNumber);

    if (!item) {
      console.log('Invalid item number.');
      placeBid();
      return;
    }

    rl.question('Bid Amount: $', (bidAmount) => {
      bidAmount = parseFloat(bidAmount);

      if (isNaN(bidAmount) || bidAmount <= currentHighestBid) {
        console.log('Bid must be higher than the current highest bid.');
        placeBid();
        return;
      }

      item.currentBid = bidAmount;
      item.currentBuyerNumber = currentBuyerNumber;
      currentHighestBid = bidAmount;

      console.log(`Bid accepted for item ${itemNumber} - ${item.description}.`);
      rl.question('Place another bid (y/n)? ', (answer) => {
        if (answer.toLowerCase() === 'y') {
          placeBid();
        } else {
          rl.question('Do you want to end the auction (y/n)? ', (endAuction) => {
            if (endAuction.toLowerCase() === 'y') {
              endAuctionProcess();
            } else {
              startBidding();
            }
          });
        }
      });
    });
  });
}

function endAuctionProcess() {
  console.log('Auction Results:');
  items.forEach(item => {
    if (item.currentBid >= item.reservePrice) {
      const fee = item.currentBid * 0.1;
      auctionResults.sold.push({
        itemNumber: item.itemNumber,
        description: item.description,
        finalPrice: item.currentBid + fee,
        fee: fee,
      });
    } else if (item.currentBid > 0) {
      auctionResults.unsold.push({
        itemNumber: item.itemNumber,
        description: item.description,
        finalBid: item.currentBid,
      });
    } else {
      auctionResults.noBids.push({
        itemNumber: item.itemNumber,
        description: item.description,
      });
    }
  });

  console.log('Items that met reserve prices:');
  auctionResults.sold.forEach(item => {
    console.log(`Item ${item.itemNumber} - ${item.description} - Final Price: $${item.finalPrice}`);
  });

  console.log('Items that did not meet reserve prices:');
  auctionResults.unsold.forEach(item => {
    console.log(`Item ${item.itemNumber} - ${item.description} - Final Bid: $${item.finalBid}`);
  });

  console.log('Items with no bids:');
  auctionResults.noBids.forEach(item => {
    console.log(`Item ${item.itemNumber} - ${item.description}`);
  });

  console.log(`Number of Items Sold: ${auctionResults.sold.length}`);
  console.log(`Number of Items Unsold: ${auctionResults.unsold.length}`);
  console.log(`Number of Items with No Bids: ${auctionResults.noBids.length}`);

  rl.close();
}

validateItemsCount();
