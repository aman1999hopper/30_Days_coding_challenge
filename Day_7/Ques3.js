// To find the even and odd number in array 
function findEvenAndOdd(arr) {
    let evenNumbers = [];
    let oddNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        } else {
            oddNumbers.push(arr[i]);
        }
    }

    return { even: evenNumbers, odd: oddNumbers };
}

// Test Case 1
const A = [1, 2, 5, 4, 0];
const result1 = findEvenAndOdd(A);
console.log("Test Case 1:");
console.log("Even Numbers:", result1.even);
console.log("Odd Numbers:", result1.odd);

// Test Case 2
const B = [1, 2, 3, 4, 5];
const result2 = findEvenAndOdd(B);
console.log("Test Case 2:");
console.log("Even Numbers:", result2.even);
console.log("Odd Numbers:", result2.odd);
