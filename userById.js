// 10. Find a User by ID (5 Marks)
// Write a function findUserById(users, id) that takes an array of user objects and an id. Use the .find() method to return the user object that matches the given id.
// Example:
// Input: findUserById([{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}], 2)
// Output: {id: 2, name: 'Bob'}

function findUserById(users, id) {
  return users.find(function(user) {
    return user.id === id;
  });
}

console.log(findUserById(
  [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}],
  2
)); 
