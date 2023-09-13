// Find the middle element of array after merging two array 

function findMiddleElementAfterMerge(arr1, arr2) {
    // Merge the two arrays
    const mergedArray = [...arr1, ...arr2];
  
    // Sort the merged array (if not already sorted)
    mergedArray.sort((a, b) => a - b);
  
    // Find the middle element
    const middleIndex = Math.floor(mergedArray.length / 2);
    const middleElement = mergedArray[middleIndex];
  
    return middleElement;
  }
  
  const A = [1, 2, 5, 4, 0];
  const B = [1, 2, 3, 4, 5];
  
  const result = findMiddleElementAfterMerge(A, B);
  
  console.log("Middle Element:", result); 
  