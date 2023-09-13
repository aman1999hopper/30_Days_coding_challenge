function findDuplicate(arr) {
    const seen = new Set();
    for (let num of arr) {
      if (seen.has(num)) {
        return num; // Found a duplicate
      }
      seen.add(num);
    }
    return null; // No duplicates found
  }
  
  const A = [0, 1, 2, 3, 4, 5];
  const B = [5, 4, 3, 2, 1, 0];
  
  const duplicateA = findDuplicate(A);
  const duplicateB = findDuplicate(B);
  
  console.log("Duplicate number in A:", duplicateA); 
  console.log("Duplicate number in B:", duplicateB); 
  