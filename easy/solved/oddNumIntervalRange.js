/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var countOdds = function(low, high) {
    
    if (high % 2 === 1) {
        high = high + 1;
    }

    if (low % 2 === 1) {
        low = low - 1;
    }

    return (high - low) / 2;

};

console.log(countOdds(2, 8));