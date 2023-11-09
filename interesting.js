const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define the items object
const items = {
  item1: ['Antique Chair', 500],
  item2: ['Painting', 100],
  item3: ['Collectible Toy', 800],
  item4: ['Vintage Watch', 750],
  item5: ['Jewelry', 300],
  item6: ['Rare Coin', 150],
  item7: ['Antique Book', 300],
  item8: ['Vintage Camera', 250],
  item9: ['Art Sculpture', 1000],
  item10: ['Classic Car', 15000],
};

let bid = 0;
let buyer = '';

SeeAllItems();

function SeeAllItems() {
  console.log('| item  | item name        | item price |');
  for (let i = 1; i <= 10; i++) {
    const itemInfo = items[`item${i}`];
    console.log(`| item${i} | ${itemInfo[0]} | ${itemInfo[1]} |`);
  }

}

function task1() {
  rl.question('\nEnter the item number you want to bid on: ', (selectItem) => {
    const itemNumber = parseInt(selectItem, 10);

    if (itemNumber >= 1 && itemNumber <= 10) {
      bid1(itemNumber);
    } else {
      console.log('Invalid item number. Choose a number between 1 and 10.');
      task1();
    }
  });
}

function bid1(itemNumber) {
  rl.question('\nEnter your buyer number: ', (n) => {
    buyer = n;

    
    const itemName = itemInfo[0];
    const itemPrice = itemInfo[1];

    rl.question('\nEnter your bid for the item: ', (b) => {
      const bidAmount = parseFloat(b);

      if (bidAmount < itemPrice) {
        console.log(`Your bid for ${itemName} is too low. The minimum bid is $${itemPrice}.`);
        bid1(itemNumber);
      } else {
        console.log(`\nBuyer number: ${buyer}, Bid for item: ${itemName}, Bid amount: $${bidAmount}`);
        rl.close();
      }
    });
  });
}

task1(); // Start the input process





function new() {const itemInfo = items[`item${itemNumber}`];}