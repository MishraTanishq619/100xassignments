/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
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
