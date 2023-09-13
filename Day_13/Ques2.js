// Find sum of two array is equal or not and return the array with bigger sum 
function findArrayWithBiggerSum(arr1, arr2) {
    const sum1 = arr1.reduce((acc, current) => acc + current, 0);
    const sum2 = arr2.reduce((acc, current) => acc + current, 0);
  
    if (sum1 === sum2) {
      return "Both arrays have equal sums.";
    } else if (sum1 > sum2) {
      return arr1;
    } else {
      return arr2;
    }
  }
  
  const A = [0, 1, 2, 3, 4, 5];
  const B = [5, 4, 3, 2, 1, 0];
  
  const result = findArrayWithBiggerSum(A, B);
  
  console.log("Result:", result); 
  