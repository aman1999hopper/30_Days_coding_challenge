function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findPrimes(arr) {
    return arr.filter(num => isPrime(num));
}

// Test cases
const arr1 = [1, 2, 5, 4, 0];
const arr2 = [1, 2, 3, 4, 5];

const primes1 = findPrimes(arr1);
const primes2 = findPrimes(arr2);

console.log("Prime numbers in Test Case 1:", primes1);
console.log("Prime numbers in Test Case 2:", primes2);
