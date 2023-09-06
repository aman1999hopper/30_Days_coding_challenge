// Function to find the element that appears once in a sorted array
function findSingleElement(arr) {
    let currentElement = arr[0];
    let currentCount = 1;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === currentElement) {
        currentCount++;
      } else {
        if (currentCount === 1) {
          return currentElement;
        }
        currentElement = arr[i];
        currentCount = 1;
      }
    }
  
    if (currentCount === 1) {
      return currentElement;
    }
  
    return null; // No element appears only once
  }
  
  // Test cases
  const arr1 = [1, 1, 3, 3, 3, 0];
  const arr2 = [1, 2, 2, 2, 2, 2, 2];
  
  const singleElement1 = findSingleElement(arr1);
  const singleElement2 = findSingleElement(arr2);
  
  console.log('Single element in arr1:', singleElement1);
  console.log('Single element in arr2:', singleElement2);
  