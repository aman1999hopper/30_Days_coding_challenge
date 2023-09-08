// to sort an array it will show in ascending order.
const A = [0, 1, 2, 3, 4, 5];
const B = [5, 4, 3, 2, 1, 0];

A.sort((a, b) => a - b);
B.sort((a, b) => a - b);

console.log("Sorted A:", A);
console.log("Sorted B:", B);
