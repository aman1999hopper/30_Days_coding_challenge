const A = [0, 1, 2, 6, 4, 5];
const B = [5, 4, 3, 2, 9, 0];

// Function to find missing numbers in A compared to B
function findMissingNumbers(arr1, arr2) {
  return arr1.filter((element) => !arr2.includes(element));
}

const missingNumbers = findMissingNumbers(A, B);

console.log('Missing numbers:', missingNumbers);
