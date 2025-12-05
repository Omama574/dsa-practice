// Two Sum II - Input Array Is Sorted
// Two Pointer Approach
// Time Complexity: O(n)
// Space Complexity: O(1)

function twoSumSorted(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            // Problem expects 1-based indexing, so add +1
            return [left + 1, right + 1];
        }

        if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return []; // No solution
}

// Example usage:
console.log(twoSumSorted([2, 7, 11, 15], 9)); // [1, 2]
console.log(twoSumSorted([1, 2, 3, 4], 6));   // [2, 4]
