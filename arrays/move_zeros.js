// Move Zeroes - Two Pointer Approach
// Time Complexity: O(n)
// Space Complexity: O(1)

function moveZeroes(nums) {
    let insertPos = 0;

    // Move all non-zero values to the front
    for (let num of nums) {
        if (num !== 0) {
            nums[insertPos] = num;
            insertPos++;
        }
    }

    // Fill the remaining positions with zeroes
    while (insertPos < nums.length) {
        nums[insertPos] = 0;
        insertPos++;
    }

    return nums;
}

// Example usage:
console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
console.log(moveZeroes([0]));             // [0]
