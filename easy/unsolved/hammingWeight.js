// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

/**
* @param {number} n - a positive integer
* @return {number}
*/
function hammingWeight(n) {

    let count = 0;
    let mask = 1;

    for (let i=0; i<32; i++) {

        if ((n & mask) !== 0) {
            count ++;
        }

        mask <<= 1;

    }

    return count;
};

console.log('solution:', hammingWeight(41));