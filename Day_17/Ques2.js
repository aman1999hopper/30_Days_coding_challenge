// The for and for/in looping constructs give you access to the index in the array, not the actual element. For example, suppose you want to print out the values stored in the below array: 

const arr = ['a', 'b', 'c'];

// With for and for/in, you need to print out arr[i]: 

for (let i = 0; i < arr.length; ++i) {
    console.log(arr[i]);
  }
  
  for (let i in arr) {
    console.log(arr[i]);
  }

//   With the other two constructs, forEach() and for/of, you get access to the array element itself. With forEach() you can access the array index i, with for/of you cannot.

arr.forEach((v, i) => console.log(v));

for (const v of arr) {
  console.log(v);
}   