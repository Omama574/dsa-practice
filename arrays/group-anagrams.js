// Group Anagrams - Using Hash Map
// Time Complexity: O(n * k log k) where k is average word length
// Space Complexity: O(n)

function groupAnagrams(strs) {
    const map = new Map();

    for (let word of strs) {
        const sorted = word.split('').sort().join('');

        if (!map.has(sorted)) {
            map.set(sorted, []);
        }

        map.get(sorted).push(word);
    }

    return Array.from(map.values());
}

// Example usage:
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]
