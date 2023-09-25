// Find all possible sub array for the given array  [1,2,3] 


function generateAllSubArrays(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        // we have index i and j of the subarray, let's print it
        let ans = [];
        for (let k = i; k <= j; k++) {
          ans.push(arr[k]);
        } 
        console.log(ans);
      }
    }
  }
  
  console.log('all subarrays for [1,2,3]');
  generateAllSubArrays([1,2,3]);
  
  console.log('all subarrays for [1,2]');
  generateAllSubArrays([1,2]);