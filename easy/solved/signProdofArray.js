/* There is a function signFunc(x) that returns:

    1 if x is positive.
    -1 if x is negative.
    0 if x is equal to 0.

You are given an integer array nums. Let product be the product of all values in the array nums.

Return signFunc(product). */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var arraySign = function(nums) {
    let pos = true; 
    
    for (let i=0; i<nums.length; i++) {
        if (nums[i] === 0) return 0;
        if (nums[i] < 1) pos = !pos;
    }

    return pos ? 1 : -1 ;
};

console.log(arraySign([-1,1,-1,1,-1]));