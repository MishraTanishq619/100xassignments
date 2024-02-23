/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
	List = [];
	for (const i of transactions) {
		var f = 0;
		for (const j of List) {
			if (j.category == i.category) {
				j.totalSpent += i.price;
				f = 1;
				break;
			}
		}
		if (f == 0) {
			List.push({ category: i.category, totalSpent: i.price });
		}
	}
	return List;
}

module.exports = calculateTotalSpentByCategory;
