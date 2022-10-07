/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {

    let numStr = digits.join("");

    const newNumStr = ((BigInt(numStr)) + (BigInt(1))).toString();

    const result = newNumStr.split("").map(digit => Number(digit));
    
    return result;
    
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));