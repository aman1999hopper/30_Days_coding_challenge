// Define two arrays
const A = [0, 1, 2, 3, 4, 5];
const B = [5, 4, 3, 2, 1, 0];

// Calculate the product of the two arrays element-wise
const productArray = A.map((value, index) => value * B[index]);

// Calculate the overall product of the merged array
const overallProduct = productArray.reduce((acc, curr) => acc * curr, 1);

// Output the merged array and the overall product
console.log("Merged Array:", productArray);
console.log("Overall Product:", overallProduct);
