// Group Anagrams - Hash Map + Sorting
// Time Complexity: O(n * k log k)
// Space Complexity: O(n)
// where n = number of strings, k = max length of a string

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
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
