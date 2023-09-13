function findAllDuplicates(arr) {
    const seen = new Map(); // Use a map to keep track of counts
    const duplicates = [];
  
    for (let num of arr) {
      if (seen.has(num)) {
        seen.set(num, seen.get(num) + 1);
      } else {
        seen.set(num, 1);
      }
    }
  
    seen.forEach((count, num) => {
      if (count > 1) {
        duplicates.push(num);
      }
    });
  
    return duplicates;
  }
  
  const testcase1 = [1, 2, 5, 4, 0];
  const testcase2 = [1, 2, 3, 4, 5];
  
  const duplicates1 = findAllDuplicates(testcase1);
  const duplicates2 = findAllDuplicates(testcase2);
  
  console.log("Duplicates in testcase 1:", duplicates1); 
  console.log("Duplicates in testcase 2:", duplicates2); 
  