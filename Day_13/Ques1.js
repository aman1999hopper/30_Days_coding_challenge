// Finding common element in 2 array 
function findCommonElements(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
  
    return [...set1].filter(element => set2.has(element));
  }
  
  const A = [0, 1, 2, 3, 4, 5];
  const B = [5, 4, 3, 2, 1, 0];
  
  const commonElements = findCommonElements(A, B);
  
  console.log("Common elements:", commonElements);
  