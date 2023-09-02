function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    return arr1.every((element, index) => element === arr2[index]);
}

const A = [1, 2, 5, 4, 0];
const B = [1, 2, 5, 4, 0];

if (areArraysEqual(A, B)) {
    console.log("Output: 1");
} else {
    console.log("Output: 0");
}