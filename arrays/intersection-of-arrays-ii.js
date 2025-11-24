// Intersection of Two Arrays II
// Time Complexity: O(n + m)
// Space Complexity: O(n) for hashmap

function intersect(nums1, nums2) {
    const map = {};
    const result = [];

    // Count elements from nums1
    for (let num of nums1) {
        map[num] = (map[num] || 0) + 1;
    }

    // Match elements with nums2
    for (let num of nums2) {
        if (map[num] > 0) {
            result.push(num);
            map[num]--;
        }
    }

    return result;
}

// Example usage:
console.log(intersect([1,2,2,1], [2,2])); // [2,2]
console.log(intersect([4,9,5], [9,4,9,8,4])); // [9,4] or [4,9]
