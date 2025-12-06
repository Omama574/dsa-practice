// Container With Most Water - Two Pointer Technique
// Time Complexity: O(n)
// Space Complexity: O(1)

function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        const width = right - left;
        const water = Math.min(height[left], height[right]) * width;
        maxWater = Math.max(maxWater, water);

        // Move the pointer with the smaller height
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}

// Example usage:
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1])); // 1
