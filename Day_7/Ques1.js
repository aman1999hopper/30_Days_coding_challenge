// To find the sum of two array 
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Example usage:
const A = [0, 1, 2, 3, 4, 5];
const B = [5, 4, 3, 2, 1, 0];

const sumA = sumArray(A); // Sum of elements in array A
const sumB = sumArray(B); // Sum of elements in array B

console.log("Sum of array A:", sumA);
console.log("Sum of array B:", sumB);
