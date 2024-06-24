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
  let out = [], categories = [], temp = [], t1 = {};  
  for (let i = 0; i < transactions.length ; i++){
    let transaction = transactions[i];
    let category = transaction.category;
    let price = transaction.price;
    if (categories.indexOf(transactions[i].category) == -1){
      temp.push(price);
      categories.push(category);
    } else{
      let index = categories.indexOf(category);
      temp[index] += price;
    }
  }

  for(let i = 0; i < categories.length; i++){
    t1 = {};
    cat = categories[i];
    tot = temp[i];
    t1.category = cat;
    t1.totalSpent = tot
    out.push(t1);
  }


  return out;
} 


module.exports = calculateTotalSpentByCategory;
