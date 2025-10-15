// 11. Calculate Total Price (10 Marks)
// You have an array of product objects, each with a price and quantity. Write a function calculateTotalPrice(products) that uses the .reduce() method to calculate the total price (price * quantity) of all products.
// Example:
// Input: calculateTotalPrice([{price: 10, quantity: 2}, {price: 5, quantity: 5}])
// Output: 45 (because (10 * 2) + (5 * 5) = 20 + 25 = 45)

const calculateTotalPrice = products => 
  products.reduce((total, product) => total + product.price * product.quantity, 0);

console.log(calculateTotalPrice([
  {price: 10, quantity: 2},
  {price: 5, quantity: 5}
])); 
