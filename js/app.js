const newShoppingListItem = (item, price) => {
    if (testItem(item) && testPrice(price)) {        
        return {
            item:  item,
            price: price
        };
    }
}

const testItem = (val) => {
    if (typeof val != "string") {
        throw "argument 'item' != string";
    } else if (val.length >= 10) {
        throw "item.length must be < 10";      
    } else {
        return true
    }
} 

const testPrice = (val) => {
    if (typeof val != "number") {
        throw "argument 'price' != number";      
    } else if (val >= 100) {
        throw "price must be < 100";      
    } else if (Math.round(val * 100) / 100 != val) {
        throw "price may not exceed hundredths";      
    } else {
        return true
    }
} 

const testListItem = (val) => {
    const lstKeys = Object.keys(val);
    if (lstKeys[0] != "item" || lstKeys[1] != "price" || lstKeys.length != 2) {
        throw "list item is not valid";   
    } if (testItem(val.item) && testPrice(val.price)) {
        return true
    }
} 

const addToShoppingList = (item, list = []) => {
    if (testListItem(item)) {
        list.push(item); 
        return list;
    }
}

let myList = addToShoppingList(newShoppingListItem("eggs", 1.59));
addToShoppingList(newShoppingListItem("bread", 1.29), myList);
addToShoppingList(newShoppingListItem("meat", 2.88), myList);
addToShoppingList({item: "butter", price: 3.69}, myList);
console.log(myList);

const removeFromShoppingList = (list) => {
    if (list.length != 0) {
        list.pop();
    }
    return list;
}

//console.log(removeFromShoppingList(myList))

const removeFirstItem = (list) => {
    if (list.length != 0) {
        list.shift();
    }
    return list;
}

//console.log(removeFirstItem(myList))

const testNumber = (val, min, max) => {
    if (typeof val != "number") {
        throw "argument 'val' != number";      
    } else if (val < min) {
        throw "val must be >= " + min;      
    } else if (val > max) {
        throw "val must be <= " + max;      
    } else if (Math.round(val) != val) {
        throw "val must be whole number";      
    } else {
        return true
    }
}

const removeNthItem = (i, list) => {
    if(list.length != 0 && testNumber(i,0,list.length)) {
        list.splice(i,1);
    }
    return list

}

//console.log(removeNthItem(2, myList));

const removeNItems = (i, num, list) => {
    if(list.length != 0 && testNumber(i,0,list.length)) {
        list.splice(i,num);
    }
    return list

}

console.log(removeNItems(1, 2, myList));