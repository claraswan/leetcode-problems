// Given an integer x, return true if x is palindrome integer.

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    
    let stringToArray = String(x).split('');
    let arrayReversed = stringToArray.reverse();
    let reversedX = parseInt(arrayReversed.join(''));
    
    if (x === reversedX) {
        return true
    }
    return false;
};

isPalindrome(10);