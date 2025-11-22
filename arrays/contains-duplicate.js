// Contains Duplicate - Using Hash Set
// Time Complexity: O(n)
// Space Complexity: O(n)

function containsDuplicate(nums) {
    const seen = new Set();

    for (let num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }

    return false;
}

// Example usage:
console.log(containsDuplicate([1,2,3,1])); // true
console.log(containsDuplicate([1,2,3,4])); // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // true
