// Merge Two Sorted Arrays (LeetCode #88)
// Time Complexity: O(m + n)
// Space Complexity: O(1) - done in-place

function merge(nums1, m, nums2, n) {
    let i = m - 1; // pointer for nums1
    let j = n - 1; // pointer for nums2
    let k = m + n - 1; // pointer for last index

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    return nums1;
}

// Example usage:
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3)); // [1,2,2,3,5,6]
console.log(merge([0], 0, [1], 1));               // [1]
