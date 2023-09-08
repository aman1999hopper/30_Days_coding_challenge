function findFirstOccurrenceIndex(arr, key) {
    const index = arr.indexOf(key);
    return index;
}

const A = [0, 1, 2, 3, 4, 5];
const B = [5, 4, 3, 2, 1, 0];

const key = 1;

const firstOccurrenceIndexInA = findFirstOccurrenceIndex(A, key);
const firstOccurrenceIndexInB = findFirstOccurrenceIndex(B, key);

console.log(`First occurrence index of ${key} in A: ${firstOccurrenceIndexInA}`);
console.log(`First occurrence index of ${key} in B: ${firstOccurrenceIndexInB}`);
