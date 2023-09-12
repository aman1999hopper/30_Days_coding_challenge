Map 
// The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.

// Example 
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); [2, 4, 6, 8] 

Filter
// The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array. 

// Example 
const num = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]

Reduce
// The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.

// Example 
const numb = [1, 2, 3, 4];
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); // 10