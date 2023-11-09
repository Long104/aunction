let items = {
    // name , reserve , user, user bid, less than reserve, no bid, tax
    
    item1:['antique chair',500,'',0,0,'',''],
    item2:['painting',100,'',0,0,'',''],
    item3:['collectble toy',800,'',0,0,'',''],
    item4:['vintage watch',750,'',0,0,'',''],
    item5:['jewelry',300,'',0,0,'',''],
    item6:['rare coin',150,'',0,0,'',''],
    item7:['antique book',300,'',0,0,'',''],
    item8:['vintage camera',250,'',0,0,'',''],
    item9:['art sculpture',1000,'',0,0,'',''],
    item10:['classic car',1500,'',0,0,'','']

}












let bid = 0;
let buyer = '';

function allItem(num,index) {
   return  items[`item${num}`][index]
}

function seeAllItems() {

    

   console.log('|item  | item name      | item price | user    | bidding start'  ) 
   console.log(`|item1 | ${items.item1[0]}  | $${items.item1[1]}        | ${allItem(1,2)}        | $${allItem(1,3)}`) 
   console.log(`|item2 | ${items.item2[0]}       | $${items.item2[1]}        | ${allItem(2,2)}        | $${allItem(2,3)}`) 
   console.log(`|item3 | ${items.item3[0]} | $${items.item3[1]}        | ${allItem(3,2)}        | $${allItem(3,3)}`)
   console.log(`|item4 | ${items.item4[0]}  | $${items.item4[1]}        | ${allItem(4,2)}        | $${allItem(4,3)}`)
   console.log(`|item5 | ${items.item5[0]}        | $${items.item5[1]}        | ${allItem(5,2)}        | $${allItem(5,3)}`)
   console.log(`|item6 | ${items.item6[0]}      | $${items.item6[1]}        | ${allItem(6,2)}        | $${allItem(6,3)}`)
   console.log(`|item7 | ${items.item7[0]}   | $${items.item7[1]}        | ${allItem(7,2)}        | $${allItem(7,3)}`)
   console.log(`|item8 | ${items.item8[0]} | $${items.item8[1]}        | ${allItem(8,2)}        | $${allItem(8,3)}`)
   console.log(`|item9 | ${items.item9[0]}  | $${items.item9[1]}        | ${allItem(9,2)}        | $${allItem(9,3)}`)
   console.log(`|item10| ${items.item10[0]}    | $${items.item10[1]}        | ${allItem(10,2)}        | $${allItem(10,3)}`)



}



seeAllItems()


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function task1() {

    

  
    rl.question("\nenter number of items to buy: ", selectitem => {

        // console.log(selectitem = (selectitem < 10) ? "minimum is 10 "  : (selectitem < 10) ? task1() : "correct");  
        // rl.close()


        if (selectitem < 10 || isNaN(selectitem)) {
            console.log("minimum is 10");
            task1();
        } else {
            bid1()
            
        }
        

    })

} 

function bid1() {



    rl.question("\nyour buyer number: ", n => {

        if (n === "") {
            console.log("enter your number")
            bid1();}
        

        
    
        rl.question("\nenter item number: ", i => {

            // if (isNaN(i)) {
            //     console.log("select item with number")
            //     bid1();
            // } 

            let ite = i;

            let item = items[`item${i}`]

           

            if (i) {
                
                i = item[0]

            }


            
           

            rl.question(`\nyour bid for items: ${i}: `, b => {

                let itemReservePrice = items[`item${ite}`];
                

                

                if (b < itemReservePrice[3] || isNaN(b)) {
                    console.log(`previous bid is $${itemReservePrice[3]} and name were ${itemReservePrice[2]} your bid must be higher `) 
                    
                    
                    bid1();
                } else {

                    console.log(`\nbuyer number: ${n}, bid items: ${i}, bid for items: $${b}`)

                    
                    
                    items[`item${ite}`][2] = n; 
                    items[`item${ite}`][3] = b;
                    

                   
                    if (itemReservePrice[1] > b) {

                        items[`item${ite}`][4] = b;
                    }
                    

                   
                      


                    if (itemReservePrice[1] < itemReservePrice[3] ) {
                        items[`item${ite}`][6] = items[`item${ite}`][3] * 0.1;
                        
                       
                       

                       }

                   
                    
                    



                   

                       

                    



                    seeAllItems()

                    console.log(' ')

                     rl.question('keydown s to stop and see result if not press any word: ', (press) => {

                        if (press == "s") {

                            console.log(`\n${seeAllItems()}`)

                            console.log(" \n")

                            showAllBidItem()
                            
                            
                            function showAllBidItem() {
                                
                                console.log(`Bidder|itemName        |get Item |Less than reserve |No bid  |tax`)
                                console.log(`${allItem(1,2)}      | ${allItem(1,0)} |${allItem(1,3)}        |${allItem(1,4)}                 | ${allItem(1,5)}      |${allItem(1,6)}  `)
                                console.log(`${allItem(2,2)}      | ${allItem(2,0)}      |${allItem(2,3)}        |${allItem(2,4)}                 | ${allItem(2,5)}      |${allItem(2,6)}  `)   
                                console.log(`${allItem(3,2)}      | ${allItem(3,0)}|${allItem(3,3)}        |${allItem(3,4)}                 | ${allItem(3,5)}      |${allItem(3,6)}  `)
                                console.log(`${allItem(4,2)}      | ${allItem(4,0)} |${allItem(4,3)}        |${allItem(4,4)}                 | ${allItem(4,5)}      |${allItem(4,6)}  `)
                                console.log(`${allItem(5,2)}      | ${allItem(5,0)}       |${allItem(5,3)}        |${allItem(5,4)}                 | ${allItem(5,5)}      |${allItem(5,6)}  `)
                                console.log(`${allItem(6,2)}      | ${allItem(6,0)}     |${allItem(6,3)}        |${allItem(6,4)}                 | ${allItem(6,5)}      |${allItem(6,6)}  `)
                                console.log(`${allItem(7,2)}      | ${allItem(7,0)}  |${allItem(7,3)}        |${allItem(7,4)}                 | ${allItem(7,5)}      |${allItem(7,6)}  `)
                                console.log(`${allItem(8,2)}      | ${allItem(8,0)}|${allItem(8,3)}        |${allItem(8,4)}                 | ${allItem(8,5)}      |${allItem(8,6)}  `)
                                console.log(`${allItem(9,2)}      | ${allItem(9,0)} |${allItem(9,3)}        |${allItem(9,4)}                 | ${allItem(9,5)}      |${allItem(9,6)}  `)
                                console.log(`${allItem(10,2)}      |${allItem(10,0)}    |${allItem(10,3)}        |${allItem(10,4)}                 | ${allItem(10,5)}      |${allItem(10,6)} `)
                                
                            
                            }

                            

                            rl.close();
                        } else {

                            bid1()
                            
                        }

                    })

                    



                   

                    
                    
                    
                    

                   
                }

            

            
                
            }) 

            

        })
        
       

    })

}



task1()






















