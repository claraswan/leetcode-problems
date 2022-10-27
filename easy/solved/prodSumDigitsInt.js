/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {

    let product = 1;
    let sum = 0;

    for (n of n.toString().split("")) {
        product *= Number(n);
        sum += Number(n);
    }

    return product - sum;
    
};

console.log(subtractProductAndSum(4421));