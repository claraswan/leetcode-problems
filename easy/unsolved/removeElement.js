/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    let k = nums.length;

    for (let i=0; i< nums.length; i++) {
        console.log('nums:', nums);
        if (nums[i] === val) {
            let values = (nums.splice(i, 1));
            values.forEach((value) => nums.push(value));
            k -= 1;
        }
        
    };

    console.log('k:', k);
    console.log('nums:', nums);
    return k;
    
};

console.log(removeElement([3,3], 3));