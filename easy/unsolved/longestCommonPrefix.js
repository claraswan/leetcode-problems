/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let prefix = "";

    for (let i=0; i < (strs.length -1); i++) {
        console.log('og:', i, strs[i]);
        console.log('next:', (Number(i)+1), strs[((Number(i)+1) ? (Number(i)+1) : strs[0])]);

        if (strs[i][0] === strs[(Number(i)+1)][0]) {
            prefix += strs[i][0];
        }
    }

    return prefix;

};

console.log(longestCommonPrefix(["flower","flow","flight"]));