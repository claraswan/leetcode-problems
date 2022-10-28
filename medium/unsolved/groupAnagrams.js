// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    let output = [];

    if (strs.length <= 1) {
        output.push(strs);
    }

    return output;
};

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));

/* 
loop through the array of strings
loop through each string
add each character in the string to an array and .sort() the array
now compare those arrays of characters to one another
if two character arrays are the same then add that word to an array
at the end, take all of those created array and push them to output
*/