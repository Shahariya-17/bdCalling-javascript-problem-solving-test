// Write a function countOccurrences(cars) that takes an array of car objects. Each object has a make property (e.g., 'Toyota', 'Ford'). The function should return an object that counts how many times each make appears.
// Example:
// Input: countOccurrences([{make: 'Toyota'}, {make: 'Ford'}, {make: 'Toyota'}])
// Output: { Toyota: 2, Ford: 1 }

function countOccurrences(cars) {
  return cars.reduce(function(counts, car) {
    if (counts[car.make]) {
      counts[car.make] += 1;
    } else {
      counts[car.make] = 1;
    }
    return counts;
  }, {});
}

console.log(countOccurrences([
  {make: 'Toyota'}, 
  {make: 'Ford'}, 
  {make: 'Toyota'}
]));
