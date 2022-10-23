/** 
Write a function that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
*/

function solution(A) {
    let result = 0;
    
    for (let i=0; i<A.length; i++) {
        console.log('i is', i);

        for (let j=1; j<A.length; j++) {

            console.log('j is', j);

            if (j !== A[i]) {
                result += j;
                return result;
            }

        }

    }
}

console.log(solution([1, 3, 6, 4, 1, 2]));