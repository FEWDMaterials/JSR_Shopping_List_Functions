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

	const newShoppingListItem = (item, price) => {
		if (typeof item === 'string' && item.length < 10 && typeof price === 'number' && price < 100) {
			const shoppingListItem = { // creates object with item and price properties
				item, // short way of creating new property when key/value pair is same as param name
				price, // long way of creating property key/value would be "price: price,"
			}
			return shoppingListItem; // returns the object when function is invoked if conditions are met
		}
		else {
			throw new Error ('Invalid input'); // returns error if conditions for creating obj are not met
		}
	}

	// console.log('newShoppingListItem: returns Object?', typeof newShoppingListItem('test', 1) === 'object');

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

	const addToShoppingList = (item, list=[]) => {
		if (typeof item === 'object') { // if statement checks if item being passed is an object
			return list.concat(item); 
			// if condition is met, adds item object to an empty array if list is empty
			// if list isn't empty, adds item to the end of the array
		}
		else {
			throw new Error ('Invalid item input'); // if item isn't an object, throws new error
		}
	}

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

	const removeFromShoppingList = (list=[]) => {
		if (list.length < 1) { // if array contains fewer than one item, returns the array
			return list;
		}
		else {
			return list.slice(0,list.length-1);; // if list arr contains items, returns a shallow copy of list
			// and leaves out the last element of the original list
		}
	}

	// console.log('removes last item of array?', removeFromShoppingList(['test', 'test']));

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

	const removeFirstItem = (list=[]) => {
		if (list.length < 1) {
			return list;
		}
		else {
			return list.slice(1,list.length); // creates a copy of given list array being passed in
			// but does not include the first index, as a result removes the first item of the list
		}
	}

	// console.log('removes first item from array?', removeFirstItem(['item1', 'item2', 'item3']));

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

		if (i > list.length || i < 0 || typeof i !== 'number') {
			throw new Error('Not a valid item input, please try again')
		}
		else {
			return list.slice(0,i).concat(list.slice(i+1, list.length+1)); // splits list at i index
			// then concats what is before i and what is after i
		}
	}

	// console.log('TEST: returns error when adding string to i', removeNthItem('error?', [1,2,3]));
	// console.log('TEST: removes second item', removeNthItem(2, [1,2,3]));

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

		if (i < 0 || typeof i !== 'number' || typeof num !== 'number' || i+num > list.length || num > list.length) {
			throw new Error('Not a valid item number, please try again');
			// throws error if conditions are not true
		}
		else { // if all conditions are true then runs following code
			// list.splice(i, i+num); works but fixed with proper answer below 

			const list1 = list.slice(0,i); // creates array from 0 index to i, not including i
			const list2 = list.slice(i+num+1); // creates second array after i+num
			// we add +1 to i+num because first value is included when using .slice
			// and we do NOT want to include i+num

			return list1.concat(list2); // returns new array with both sliced lists added together with concat
			// thus removing all items from i to i+num
		}
	}

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

	const smartRemoveItems = (i, list) => {

		if (i < 0) {
			i = i * -1;
			return list.slice(0, list.length-i); // returns new array with given slice range of values
			// in this case , i is the number of items we want removed from the end of the array
		}
		else if (i > list.length) {
			return list; // if i is greater than the number of list items, then simply return the list
			// since user may not want to delete all items in the list
		}
		else if (i > 0) {
			return list.slice(0+i); // returns new array with given slice range of values
			// 0 is our start index, so we add i so that we can create new array and remove i number
			// of items from the beginning of the array
		}
			// removed else statement at the end as it is not necessary or requested
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
			- if i > length of list, just append
			- if i < 0, just prepend
	*/

	// implement function here

	const spliceItem = (item, i, list) => {
		// uses .slice but also included comments using .push, .unshift, .splice methods 
		if (typeof item.item !== 'string' || typeof item.price !== 'number' || typeof item !== 'object') { 
			throw new Error ('Input Error: try again');
		}
		else if (i > list.length) {
			// list.push(item);  // pushing item to end of the list
			return list.slice(0).concat(item);
		}
		else if (i < 0) {
			// list.unshift(item); // adds item to beginning of list
			const list2 = list.slice(0);
			list2.unshift(item);
			return list2;
		}
		else {
			// list.splice(i, 0, item); // inputting item at the i(nth) index of list
			const list2 = list.slice(0);
			list2.splice(i,0,item);
			return list2;
		}
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
		@param items {list}
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

	const spliceItems = (items, i, list) => {
		// 1. First, we loop through an array of objects to verify each item in array is an object
		for (let x=0; x < items.length; x++) {
			if (typeof items[x] !== 'object') {
				throw new Error ('Input Error: try again'); // if it's not an object, throw error
				// if all items are objects, then code will continue to run
			} 
		}
		// 2. We then use if statements and for loops to check the given number (i)
		//	  and we use for loops to add each of the objects in the items array to the list
		//	  depending on the conditionals: we will either append, prepend or insert the items
		 if (i > list.length) {
			const list2 = list.slice(0); // we create a shallow copy of original list that we can push to
			 for (let x = 0; x < items.length; x++) {
				list2.push(items[x]); // pushing items to the end of the list
			 }
			 return list2; // we return the shallow copy that has been mutated by the push method
		}
		else if (i < 0) {
			const list2 = list.slice(0);
			for (let x = 0; x < items.length; x++) {
				list2.unshift(items[x]); // adding items to the beginning of the list
			}
			return list2;
		}
		else if (items.length === 0) { 	
		// to check if items arr is empty we see if it's length is equal to zero
			return list;  // returns list if items array is empty 
		}
		else {
			// uses .concat method to insert the objects in items array to our list
			return list.slice(0,i).concat(items).concat(list.slice(i));
		}
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
		// for Loop to check if each object in items1 array is an object, if not throw error
		for (let x=0; x < items1.length; x++) {
			if (typeof items1[x] !== 'object') {
				throw new Error ('Input Error: try again');
			}
		}
		// for Loop to check if each obj in items2 array is an object, if not throw error
		for (let x=0; x < items2.length; x++) {
			if (typeof items2[x] !== 'object') {
				throw new Error ('Input Error: try again');
			}
		}
		// if both for loops pass, then concat items1 to items2
		return items1.concat(items2);
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
		if (i < 0) {
			const list1 = list.slice(0, list.length);
			const list2 = [];
			return [list1, list2];
		}
		else if (i > list.length) {
			const list1 = [];
			const list2 = list.slice(0, list.length);
			return [list1, list2];
		}
		else {
            const list1 = list.slice(0, i+1);
			// splitting list into two where i+1 = all items <= i
			// since slice includes beginning value but excludes last value given
            const list2 = list.slice(i+1, list.length);
			// splitting list into two where i+1 = index after i through to end of list
			// so we can skip i and start the second list with index after i
			return [list1, list2];
		}
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

	const canExpressCheckout = list => list.length < 10 ? true : false;
		// alternative method using if statement shown below
		// if (list.length < 10) {
		// 	return true;
		// }
		// else {
		// 	return false;
		// }

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
		let sumOfPrice = 0; // creates variable that will store item prices
		for (let i = 0; i < list.length; i++) {
			sumOfPrice += list[i].price; // loops through price property of each item object in arr
			// then adds the property values together and stores final total in the sum variable
		}
		return sumOfPrice;
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

	const computeSumWithTax = (list, taxRate) => {
		let sumOfPrice = 0;
		for (let i = 0; i < list.length; i++) {
			sumOfPrice += list[i].price;
		}
		const taxOfSum = (taxRate/100) * sumOfPrice;
		// turns tax percentage to decimal then gets tax of the total sum
		const finalCost = taxOfSum + sumOfPrice;
		// adds total sum to the tax amount of that sum to return final cost
		return finalCost;
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

	const computeSumInRange = (i, j, list) => {
		if (i > j || list.length < j || list.length < i) {
			throw new Error ('Invalid range input');
		}
		else {
			let sumOfPrice = 0;
			for (let x = i; x <= j; x++) { // we add +1 to j or use <= because we want to include j index
			// we let x = i so that we start computing prices only at the given i index NOT at zero index
				sumOfPrice += list[x].price;
				// sumOfPrice will now calculate sum from list[i].price through to list[j].price
			}
			return sumOfPrice;
		}
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
