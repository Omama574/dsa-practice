function findMax(arr) {
    if (arr.length === 0) return null;

    let max = arr[0];

    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }

    return max;
}

// Example usage:
console.log(findMax([1, 5, 3, 9, 2])); 

console.log(findMax([-10, -3, -50]));  