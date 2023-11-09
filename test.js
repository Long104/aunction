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

