function findKeyInArray(key, arr) {
    return arr.includes(key);
}

const A = [1, 2, 5, 4, 0];
const k1 = 4;

const B = [11, 22, 33, 44];
const k2 = 33;

// find array if it is present in it 

const result1 = findKeyInArray(k1, A);
const result2 = findKeyInArray(k2, B);

console.log("Key 4 in A:", result1);
console.log("Key 33 in B:", result2);
