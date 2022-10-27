// A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

// Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var canMakeArithmeticProgression = function(arr) {
    arr.sort(function(a, b){return a - b}); // this is called a 'compare function' and fixes the sort method. Without that, the sort would sort incorrectly with the neg nums
    let possible = true;

    for (let i=0; i<arr.length-1; i++) {
        if (Math.abs(arr[i+1] - arr[i]) !== Math.abs(arr[arr.length - 1] - arr[arr.length - 2])){
            possible = false;
            console.log(arr);
            console.log('Math.abs(arr[i+1] - arr[i]):', Math.abs(arr[i+1] - arr[i]));
            console.log('Math.abs(arr[arr.length - 1] - arr[arr.length - 2]):', Math.abs(arr[arr.length - 1] - arr[arr.length - 2]));
            console.log('arr[arr.length - 2]:', arr[arr.length - 2]);
        };

    }

    return possible;

};

console.log(canMakeArithmeticProgression([-68,-96,-12,-40,16]));