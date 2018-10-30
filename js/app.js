(function() { // protect the lemmings!

	/* 1
		@function newShoppingListItem
		@param item {string}
		@param price {number}
		@returns {object}
		@description
			given an item and a price, return
			an object that looks like this:
			{
				'item': 'eggs',
				'price': 1.59
			}
			OPTIONAL:
				- validate that item is string
					and price is number
					if invalid, throw error
			OPTIONAL:
				- validate that item has fewer than 10 characters
				- validate that price is less than 100 and has only
					two decimal places
	*/

	// implement function here
	const newShoppingListItem = (item, price) => { return {item : item, price : price }; }
		
		// if(typeof item != 'string' && typeof price != 'number'){
		// 	return 'throw error'
		// } 
		// if(item.length > 10){
		// 	return 'item needs less than 10 characters'
		// }
		// else if(price > 100 ){
		// 	return 'number must be less than 100, and can only have two decimal places'
		// }


	

	// console.log(newShoppingListItem('apples',5.99)) //item: apples, price: 5.99
	// console.log(newShoppingListItem('applestewn1',5.99)) //item needs less than 10 characters
	// console.log(newShoppingListItem('applesssswww',500.99)) //item needs less than 10 characters
	// console.log(newShoppingListItem('apples',500.99)) //number must be less than 100, 
	// console.log(newShoppingListItem('apples',5,888)) // number needs only two decimal places


	// TEST
	describe('1. newShoppingListItem', () => {
		it('should return an object with item and price attributes', () => {
			const shoppingListItem = newShoppingListItem('test', 1)
			chai.assert.equal(shoppingListItem.item, 'test');
			chai.assert.equal(shoppingListItem.price, 1);
		});
	});


	/* 2
		@function addToShoppingList
		@param item {object}
		@param list {array, []}
		@returns list
		@description
			add shoppinglist item object (ie:
				{
					'item': 'eggs',
					'price': 1.59
				}
			) to a list
			list is to DEFAULT to []
			OPTIONAL:
				- validate that the item is indeed a shoppingList item
				- if shoppingList item is not passed in, throw error
	*/

	// implement function here
	const addToShoppingList = (item = {}, list = []) => {
		// if(typeof item != 'object' ){
		// 	return "Not a shoppingList item"
		// }
		
		//Which is more preferable?
		return list.concat(item); //lol why is this working
		// return list.push(item);
	}

	// console.log(addToShoppingList(newShoppingListItem('eggs',1.59)))

	// TEST
	describe('2. addToShoppingList', () => {

		it('should return a list', () => {
			const newList = addToShoppingList({
				'item': 'test',
				'price': 1
			});
			chai.assert.equal(newList.length, 1)
		});

		it('should have one item that is a shopping list object', () => {
			const newList = addToShoppingList({
				'item': 'test',
				'price': 1
			});
			chai.assert.equal(newList[0].item, 'test');
			chai.assert.equal(newList[0].price, 1);
		})
	});

	/* 3
		@function removeFromShoppingList
		@param list {array, []}
		@returns list
		@description
			if array is empty, return it immediately
			if array has items, remove the LAST item
				and then return the array
	*/

	// implement function here
	const removeFromShoppingList = (list) => {
		if (list.length === 0 ){
			return list} 
			
			else if (list.length > 0){
				list.pop()
				return list;

				//How to write it so it returns a new array, not mutated one
				//Is map or reduce better?
				//Should I write it this way or is the list.pop() , return list; more effcient?

				// return list.map(currentElement => {
				// 	list.pop()
				// 	return list;
				// })
				
			}

	}
	// console.log(removeFromShoppingList([])) 
	// console.log(removeFromShoppingList(['apple','orange','banana','mango'])) 

	// TEST
	describe('3. removeFromShoppingList', () => {
		it('should remove from the end of the list', () => {
			let list = addToShoppingList({
				'item': 'test',
				'price': 1
			});
			list = addToShoppingList({
				'item': 'test2',
				'price': 2
			}, list);

			// actually test function now
			list = removeFromShoppingList(list);

			chai.assert.equal(list.length, 1)
			// asert only item in list is 'test' with price 1
			chai.assert.equal(list[0].item, 'test')
			chai.assert.equal(list[0].price, 1)
		})
	});

	/* 4
		@function removeFirstItem
		@param list {array, []}
		@returns list
		@description
			if array is empty, return it immediately
			if array has items, remove the FIRST item
				and then return the array
	*/

	// implement function here
	const removeFirstItem = list => {
		if(list.length === 0){
			return list
		}

		list.shift()
		return list;
	}

	// console.log(removeFirstItem([]))
	// console.log(removeFirstItem(['peach','strawberry','lychee']))

 	// TEST
	describe('4. removeFirstItem', () => {
		it('should remove from the end of the list', () => {
			let list = addToShoppingList({
				'item': 'test',
				'price': 1
			});
			list = addToShoppingList({
				'item': 'test2',
				'price': 2
			}, list);
			list = removeFirstItem(list);

			chai.assert.equal(list.length, 1)
			// asert only item in list is 'test2' with price 2
			chai.assert.equal(list[0].item, 'test2')
			chai.assert.equal(list[0].price, 2)
		})
	});

	/* 5
		@function removeNthItem
		@param i {number}
		@param list {array, []}
		@returns list
		@description
			given `i`, an index < length of list
			remove that item from list and return the
			resulting list
			if...
				- what if `i` > length of list
				- `i` is < 0
				- `i` is not number
			^^ return error
	*/

	// implement function here
	const removeNthItem = (i, list) => {
		// if(isNaN(i) || i > list.length || i < 0 ){
		// 	return 'Error';}

			if(isNaN(i) || i > list.length || i < 0 ){
				throw new Error ("Invalid input")
			}

			//Why isnt this working? throw new Error(['Invalid input'])
		
		return list.slice(0, i).concat(list.slice(i + 1));
		//What if I'm removing the 0 index or the last index?
	}
	// console.log(removeNthItem(3,[45, 56, 33, 43, 76])) //returns [45, 56, 33, 76]
	// console.log(removeNthItem(2,[45, 56, 33, 43, 76])) //returns [45, 56, 43, 76]
	// console.log(removeNthItem(8,[45, 56, 33, 43, 76])) //returns error
	// console.log(removeNthItem(-1,[45, 56, 33, 43, 76])) //returns error
	// console.log(removeNthItem('lol',[45, 56, 33, 43, 76])) //returns error

	// TEST 
	describe('5. removeNthItem', () => {
		it('should remove i-th item from list', () => {
			let list = addToShoppingList({
				'item': 'test',
				'price': 1
			});
			list = addToShoppingList({
				'item': 'test2',
				'price': 2
			}, list);
			list = addToShoppingList({
				'item': 'test3',
				'price': 3
			}, list);


			list = removeNthItem(1, list);

			chai.assert.equal(list.length, 2)

			chai.assert.equal(list[0].item, 'test')
			chai.assert.equal(list[0].price, 1)

			chai.assert.equal(list[1].item, 'test3')
			chai.assert.equal(list[1].price, 3)
		});

		it('should throw error if i < 0', () => {
			// if i < 0
			chai.assert.throws(() => {
				removeNthItem(-1, [])
			}, Error);
		});

		it('should throw error if i > length of list', () => {
			// if i > length of array
			chai.assert.throws(() => {
				removeNthItem(1, [])
			}, Error);
		});

		it('should throw error if i is not a number', () => {

			// if i is not a number
			chai.assert.throws(() => {
				removeNthItem('adfas', [])
			}, Error);
		})
	});

	/* 6
		@function removeNItems
		@param i {number}
		@param num {number}
		@param list {array, []}
		@returns list
		@description
			same as above but now we wish to remove ALL
			items from i to i+num and return the resulting list
			if...
				- `i` < 0
				- `i` or `num` is not a number
				- `i+num` > length of list
				- `num` > length of list
			^^ return error
	*/

	// implement function here
	const removeNItems = (i, num, list) => {
		
		if(isNaN(i) || isNaN(num) ||i + num > list.length || num > list.length || i > list.length || i < 0 ){
			throw new Error ("Invalid input")
		}

		//Why isnt this working? throw new Error(['Invalid input'])
	
	return list.slice(0, i).concat(list.slice( num + i + 1));

	}
	// console.log(removeNItems(1,3,[5,6,7,8,9,10,11,12])) 
	

	// TEST
	describe('6. removeNItems', () => {
		it('should remove i-th item from list', () => {
			let list = addToShoppingList({
				'item': 'test',
				'price': 1
			});
			list = addToShoppingList({
				'item': 'test2',
				'price': 2
			}, list);
			list = addToShoppingList({
				'item': 'test3',
				'price': 3
			}, list);


			list = removeNItems(1, 1, list);

			chai.assert.equal(list.length, 1)

			chai.assert.equal(list[0].item, 'test')
			chai.assert.equal(list[0].price, 1)
		});

		it('should throw error if i + num < 0', () => {
			// if i < 0
			chai.assert.throws(() => {
				removeNItems(-1, 0, [])
			}, Error);
		});

		it('should throw error if i + num > length of list', () => {
			// if i > length of array
			chai.assert.throws(() => {
				removeNItems(1, 2, ['a', 'b'])
			}, Error);
		});

		it('should throw error if i is not a number', () => {

			// if i is not a number
			chai.assert.throws(() => {
				removeNItems('adfas', 1, [])
			}, Error);
		})

		it('should throw error if num is not a number', () => {

			// if i is not a number
			chai.assert.throws(() => {
				removeNItems(1, 'asasdfa', [])
			}, Error);
		})

		it('should throw error if num > length of list', () => {

			// if i is not a number
			chai.assert.throws(() => {
				removeNItems(1, 8, [])
			}, Error);
		})
	});

	/* 7
		@function smartRemoveItems
		@param i {number}
		@param list {array, []}
		@returns list
		@description
			- if `i` is < 0, remove i number of items
				from END of list
			- if `i` > length of list, return list immediately
			- if `i` > 0 remove i number of items
				from START of list
	*/

	// implement function here
	let smartRemoveItems = (i, list) => {
			if(i < 0){
                console.log(i)
                return list.slice(0 , i);
            }
         else if (i > list.length){
            return list;
        } else if(i > 0){
            return list.slice(i)

        }
	}


	// TEST
	describe('7. smartRemoveItems', () => {
		it('should return list if i > length of list', () => {
			let list = [];
			list = smartRemoveItems(1, list);

			// [] is initial state of list
			// we expect `list` to also be length 0
			// ...or, empty essentially
			chai.assert.equal(list.length, 0);
		});

		it('should remove i number from end of list if i < 0', () => {
			let list = addToShoppingList({
				'item': 'test',
				'price': 1
			});
			list = addToShoppingList({
				'item': 'test2',
				'price': 2
			}, list);
			list = addToShoppingList({
				'item': 'test3',
				'price': 3
			}, list);

			list = smartRemoveItems(-1, list);

			chai.assert.equal(list.length, 2)
			chai.assert.equal(list[0].item, 'test')
			chai.assert.equal(list[0].price, 1)
			chai.assert.equal(list[1].item, 'test2')
			chai.assert.equal(list[1].price, 2)
		});

		it('should remove i number from START if list if i > 0', () => {
			let list = addToShoppingList({
				'item': 'test',
				'price': 1
			});
			list = addToShoppingList({
				'item': 'test2',
				'price': 2
			}, list);
			list = addToShoppingList({
				'item': 'test3',
				'price': 3
			}, list);

			list = smartRemoveItems(1, list);

			chai.assert.equal(list.length, 2)
			chai.assert.equal(list[0].item, 'test2')
			chai.assert.equal(list[0].price, 2)
			chai.assert.equal(list[1].item, 'test3')
			chai.assert.equal(list[1].price, 3)
		});
	});

	/* 8
		@function spliceItem
		@para item {object}
		@param i {number}
		@param list {array, []}
		@returns list
		@description
			- item must be an object that looks like this:
			{
				'item': 'eggs',
				'price': 1.59
			} (else throw error)
			- insert item into the ith index of the list
			- if i > length of list, just append //adding item to the end of list
			- if i < 0, just prepend //adds item to beginning of list 
	*/

// 	// implement function here
	const spliceItem = (item , i, list) => {

			if (typeof item !== 'object'){
				throw new Error ('Invalid Input')
			}
			
			if(item['item'] == null) {
				throw new Error ('Invalid Input')
			} else if(item['price'] == null) {
				throw new Error ('Invalid Input')
			}

			if(i > list.length){
				// return list.concat(item)

				//Greater than array,
				list.splice(i,0, item)
				return list;
				
				
			} 
			else if(i < 0){
				// let emptyArray = []
				// let insertItem = emptyArray.concat(item)
				// return insertItem.concat(list)

				list.splice(0,0,item)
				return list;
				// return list.unshift(item)
	
			}

			//What's a shorter way to write this
			// let insertAtIthIndex = list.slice(0,i)
			// let newArray= insertAtIthIndex.concat(item)
      		// let secondHalfArray = list.slice(i, list.length)  
			// return newArray.concat(secondHalfArray);

			
			list.splice(i,0,item)
			return list;
			

		}



	// TEST
	describe('8. spliceItem', () => {
		it('should throw an error if item is not valid', () => {
			chai.assert.throws(() => {
				spliceItem('invalidItem', 0, [])
			}, Error);
		});

		it('should insert item to the ith index of the list', () => {
			const list = spliceItem({
				'item': 'test',
				'price': 1,
			}, 0, [])

			

			chai.assert.equal(list[0].item, 'test')
			chai.assert.equal(list[0].price, 1)
		});

		it('should append to the end if i > length of list', () => {
			const list = spliceItem({
				'item': 'test',
				'price': 1,
			}, 9, [{
				'item': 'test0',
				'price': 0,
			}])

			chai.assert.equal(list[1].item, 'test')
			chai.assert.equal(list[1].price, 1)
		});

		it('should prepend if i < 0', () => {
			const list = spliceItem({
				'item': 'test',
				'price': 1,
			}, -1, [{
				'item': 'test0',
				'price': 0,
			}])

			chai.assert.equal(list[0].item, 'test')
			chai.assert.equal(list[0].price, 1)
		});

	});

	/* 9
		@function spliceItems
		@param items [{list}]
		@param i {number}
		@param list {array, []}
		@returns list
		@description
			- *EACH* item in `items` must be an object
			that looks like this:
			{
				'item': 'eggs',
				'price': 1.59
			} (else throw error)
			- insert items into the ith index of the list
			- if i > length of list, just append
			- if i < 0, just prepend
			- if `items` is empty, return list
	*/

	// implement function here
		let spliceItems = (items, i, list) => {
			if (typeof items !== 'object'){
				throw new Error ('Invalid Input')
			}

			items.forEach((currentElement) => {
				if(typeof currentElement !== 'object'){
					throw new Error ('Invalid Input')
				}

			})

			
			if(items.length === 0){
				return list;
			}

			if(i >= list.length){
				//  list.splice(i,0, items)
				//	return list;
		

				let newList = list.concat(items) //returns new array
				return newList;
				
			} 
			else if(i < 0){
				// list.splice(0,0,items)

				let newList2 = items.concat(list);
				return newList2;
			}

			// list.splice(i,0,items)
			  return list.slice(0,i).concat(items).concat(list.slice(i))

		}


	// TEST
	describe('9. spliceItems', () => {
		it('should throw an error if item is not valid', () => {
			chai.assert.throws(() => {
				spliceItems([{
					'item': 'test',
					'price': 1,
				},'invalidItem'], 0, [])
			}, Error);
		});

		it('should insert items to the ith index of the list', () => {
			const list = spliceItems([{
				'item': 'test',
				'price': 1,
			}, {
				'item': 'test2',
				'price': 2,
			}], 0, [{
				'item': 'test3',
				'price': 3,
			}])

			chai.assert.equal(list[0].item, 'test')
			chai.assert.equal(list[0].price, 1)
			chai.assert.equal(list[1].item, 'test2')
			chai.assert.equal(list[1].price, 2)
		});

		it('should append to the end if i > length of list', () => {
			const list = spliceItems([{
				'item': 'test',
				'price': 1,
			}], 9, [{
				'item': 'test0',
				'price': 0,
			}])

			chai.assert.equal(list[1].item, 'test')
			chai.assert.equal(list[1].price, 1)
		});

		it('should prepend if i < 0', () => {
			const list = spliceItems([{
				'item': 'test',
				'price': 1,
			}], -1, [{
				'item': 'test0',
				'price': 0,
			}])

			chai.assert.equal(list[0].item, 'test')
			chai.assert.equal(list[0].price, 1)
		});

		it('should return list if items is empty', () => {
			const list = spliceItems([], 0, []);
			chai.assert.equal(list.length, 0)
		})
	});

	/* 10
		@function combineLists
		@param items1 {list}
		@param items2 {list}
		@returns list
		@description
			given two lists of items
			- *EACH* item in `items` must be an object
			that looks like this:
			{
				'item': 'eggs',
				'price': 1.59
			} (else throw error)
			- return ONE list that contains items in
			items1 THEN items in items2 as a single array
	*/

	// implement function here
	const combineLists = (items1, items2) => {
		if (typeof items1 !== 'object' || typeof items2 !== 'object'){
			throw new Error ('Invalid Input')
		}

		items1.forEach((currentElement) => {
			if(typeof currentElement !== 'object'){
				throw new Error ('Invalid Input')
			}
		})
		items2.forEach((currentElement) => {
			if(typeof currentElement !== 'object'){
				throw new Error ('Invalid Input')
			}
		})
		
		return items1.concat(items2)

	}

	// TEST
	describe('10. combineLists', () => {
		it('should throw an error if item is not valid', () => {
			chai.assert.throws(() => {
				combineLists([{
					'item': 'test',
					'price': 1,
				},'invalidItem'], [{
					'item': 'test2',
					'price': 2,
				}])
			}, Error);
		});

		it('should return single list with items of both lists', () => {
			const list = combineLists([{
					'item': 'test',
					'price': 1,
				}], [{
					'item': 'test2',
					'price': 2,
				}]);

			chai.assert.equal(list[0].item, 'test')
			chai.assert.equal(list[0].price, 1)
			chai.assert.equal(list[1].item, 'test2')
			chai.assert.equal(list[1].price, 2)
		});
	});

	/* 11
		@function splitListAt
		@param i {number}
		@param list {array, []}
		@returns list
		@description
			given a number i that is within bounds of
			`list`, break it into two lists where
			`list1` has all items less than or equal to i
			and `list2` has all items > i
			- if `i` < 0, `list1` has all items and `list2`
				is empty list
			- if `i` > length of list, list1 is empty and `list2`
				has all items

			- always return a list that looks like this:
				[list1, list2]

	*/

	// implement function here
	const splitListAt = (i, list) => {
		if(i < 0){
			let emptyArr = []
			let list1 = list
			let list2 = []
			emptyArr.push(list1)
			emptyArr.push(list2)
	
			return emptyArr;
		}else if(i > list.length){
			let emptyArr = []
			let list1 = []
			let list2 = list
			emptyArr.push(list1)
			emptyArr.push(list2)
			return emptyArr;
		}

		let emptyArr = []
		let list1 = list.slice(0,i+1)
		let list2 = list.slice(i + 1)
	
		emptyArr.push(list1)
		emptyArr.push(list2)

		return emptyArr;
	
	}

	// TEST
	describe('11. splitListAt', () => {
		it('should break list into two at index', () => {
			const [list1, list2] = splitListAt(1, [{
					'item': 'test',
					'price': 1,
				}, {
					'item': 'test2',
					'price': 2,
				}]);

			chai.assert.equal(list1[0].item, 'test')
			chai.assert.equal(list1[0].price, 1)
			chai.assert.equal(list1[1].item, 'test2')
			chai.assert.equal(list1[1].price, 2)
			chai.assert.equal(list2.length, 0)

		});

		it('should put all items into list1 if i < 0', () => {
			const [list1, list2] = splitListAt(-1, [{
					'item': 'test',
					'price': 1,
				}, {
					'item': 'test2',
					'price': 2,
				}]);

			chai.assert.equal(list1[0].item, 'test')
			chai.assert.equal(list1[0].price, 1)
			chai.assert.equal(list1[1].item, 'test2')
			chai.assert.equal(list1[1].price, 2)
			chai.assert.equal(list2.length, 0)

		});

		it('should put all items into list2 if i > length of list', () => {
			const [list1, list2] = splitListAt(100, [{
					'item': 'test',
					'price': 1,
				}, {
					'item': 'test2',
					'price': 2,
				}]);

			chai.assert.equal(list1.length, 0)
			chai.assert.equal(list2[0].item, 'test')
			chai.assert.equal(list2[0].price, 1)
			chai.assert.equal(list2[1].item, 'test2')
			chai.assert.equal(list2[1].price, 2)


		});

		it('should return two lists', () => {
			const [list1, list2] = splitListAt(1, [{
					'item': 'test',
					'price': 1,
				}, {
					'item': 'test2',
					'price': 2,
				}]);

			chai.assert.isArray(list1)
			chai.assert.isArray(list2)
		})

	});

	/* 12
		@function canExpressCheckout
		@param list {array, []}
		@returns {boolean}
		@description
			if there are fewer than 10 items
			in list, return true
	*/

	// implement function here
	const canExpressCheckout = (list) => list.length < 10 ? true : false;
		// if(list.length < 10){
		// 	return true
		// }
		// return false
		
	

	// TEST
	describe('12. canExpressCheckout', () => {
		it('should return true if num items < 10', () => {
			chai.assert.equal(canExpressCheckout([{
					'item': 'test',
					'price': 1,
				}, {
					'item': 'test2',
					'price': 2,
				}]), true);
		})
	});

	/* 13
		@function computeSum
		@param list {array, []}
		@returns {number}
		@description
			given a list of objects that look like this:
			{
				'item': 'eggs',
				'price': 1.59
			}
			- sum all the price items and return value
	*/

	// implement function here
	const computeSum = (list) => {
		return  list.reduce((acc, currentElement) => {
			acc += currentElement.price;
			return acc;
		},0)

		//How do you add the sum if you didn't know the name of they key.
	}

	// TEST
	describe('13. computeSum', () => {
		it('should return sum of all item prices in array', () => {
			const sum = computeSum([{
					'item': 'test',
					'price': 1,
				}, {
					'item': 'test2',
					'price': 2,
				}]);

			chai.assert.equal(sum, 3);
		});
	});

	/* 14
		@function computeSumWithTax
		@param list {array, []}
		@param taxRate {number, 8.125}
		@returns {number}
		@description
			given a list of objects that look like this:
			{
				'item': 'eggs',
				'price': 1.59
			}
			- sum all the price items and return value AND
				apply tax value
			- note that tax is passed in as percent not decimal

	*/

	// implement function here
	const computeSumWithTax = (array, taxRate = 8.125) => {


		let taxxRate =  taxRate / 100;
		
		let sum = array.reduce((acc, currentElement) => {
			acc += currentElement.price;
			return acc;
		},0)

		let taxSum = sum * taxxRate;

		return sum + taxSum;
	}

	// TEST
	describe('14. computeSumWithTax', () => {
		it('should return sum of all item prices in array + taxes', () => {
			const sum = computeSumWithTax([{
					'item': 'test',
					'price': 1,
				}, {
					'item': 'test2',
					'price': 2,
				}], 10);

			// stupid hack to prevent the 3.3000000000000003 error...
			chai.assert.equal(Math.floor(100*sum)/100, 3.3);
		});
	});

	/* 15
		@function computeSumInRange
		@param i {number}
		@param j {number}
		@param list {array, []}
		@returns {number}
		@description
			given a list of objects that look like this:
			{
				'item': 'eggs',
				'price': 1.59
			}
			- sum all the price items FROM start index `i` and
				end index `j` and return value
			- if i > j, throw error
			- if i or j not in range, throw error
	*/

	// implement function here
	const computeSumInRange = (i,j,list) => {
		if(i > j || i < 0 || i > list.length || j < 0 || j > list.length){
			throw new Error('Invalid af')
		}

		
		let sum = 0;
		for (i; i <= j; i++) {
			sum += list[i]['price'];
		}

		return sum;
	
	}

	// TEST
	describe('15. computeSumInRange', () => {
		it('should throw error if i > j', () => {
			chai.assert.throws(() => {
				computeSumInRange(100, 1, [])
			}, Error)
		})

		it('should throw error if i < 0', () => {
			chai.assert.throws(() => {
				computeSumInRange(-1, 1, [])
			}, Error)
		})

		it('should throw error if i > length of list', () => {
			chai.assert.throws(() => {
				computeSumInRange(100, 101, [])
			}, Error)
		})

		it('should throw error if j < 0', () => {
			chai.assert.throws(() => {
				computeSumInRange(0, -1, [])
			}, Error)
		})

		it('should throw error if j > length of list', () => {
			chai.assert.throws(() => {
				computeSumInRange(0, 100, [])
			}, Error)
		})

		it('should sum all the price items FROM start index `i` and end index `j` and return value', () => {
			const sum =  computeSumInRange(1, 3, [
				newShoppingListItem('test', 1),
				newShoppingListItem('test2', 2),
				newShoppingListItem('test3', 3),
				newShoppingListItem('test4', 4)
			]);

			chai.assert.equal(sum, 9)
		})
	});

})();
