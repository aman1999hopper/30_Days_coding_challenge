// Define two arrays
const A = [0, 1, 2, 3, 4, 5];
const B = [5, 4, 3, 2, 1, 0];

// Calculate the sum of the two arrays element-wise
const sumArray = A.map((value, index) => value + B[index]);

// Output the merged and summed array
console.log(sumArray);
