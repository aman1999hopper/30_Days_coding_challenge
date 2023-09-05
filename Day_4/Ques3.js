function findEvenAndOddNumbers(arr) {
    const evenNumbers = arr.filter(num => num % 2 === 0);
    const oddNumbers = arr.filter(num => num % 2 !== 0);
    return {
        even: evenNumbers,
        odd: oddNumbers
    };
}

const A = [1, 2, 5, 4, 0];
const B = [1, 2, 5, 4, 0];

const resultA = findEvenAndOddNumbers(A);
const resultB = findEvenAndOddNumbers(B);

console.log("Even and Odd numbers in A:", resultA);
console.log("Even and Odd numbers in B:", resultB);
