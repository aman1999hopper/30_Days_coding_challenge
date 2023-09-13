function findMissingNumber(arr) {
    // Calculate the sum of the first 100 natural numbers
    const sumOfFirst100 = (100 * 101) / 2;
  
    // Calculate the sum of the elements in the array
    const sumOfArray = arr.reduce((acc, num) => acc + num, 0);
  
    // Find the missing number by subtracting the sum of the array from the sum of the first 100 natural numbers
    const missingNumber = sumOfFirst100 - sumOfArray;
  
    return missingNumber;
  }
  
  const A = [0, 1, 2, 3, 4, 5];
  const B = [5, 4, 3, 2, 1, 0];
  
  const missingNumberA = findMissingNumber(A);
  const missingNumberB = findMissingNumber(B);
  
  console.log("Missing number in A:", missingNumberA); 
  console.log("Missing number in B:", missingNumberB);
  