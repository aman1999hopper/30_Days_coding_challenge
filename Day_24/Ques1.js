
// Javascript program to count smaller or equal
// elements in sorted array.
// Simple linear traversal for counting
function countOfElements(arr, n, x)
{
    // here the index is used as count
  
    // declared a variable to count
    let i = 0;
  
    for (i = 0; i < n; i++) {
  
        // break when find
        // greater element
        if (arr[i] > x)
            break;
    }
  
    // return the count
    return i;
}
     
    // Driver Code
    let arr = [ 1, 2, 4, 5, 8, 10 ];
    let key = 11;
    let n = arr.length;
    console.log(countOfElements(arr, n, key));