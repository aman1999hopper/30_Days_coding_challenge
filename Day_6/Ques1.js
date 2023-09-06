const A = [0, 1, 2, 3, 4, 5];
const B = [5, 4, 3, 2, 1, 0];

// Use filter and includes to find common elements
const commonElements = A.filter((element) => B.includes(element));

console.log('Common elements:', commonElements);
