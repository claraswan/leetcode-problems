// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

// Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

/**
 * @param {number[]} salary
 * @return {number}
 */
 var average = function(salary) {

    const min = Math.min(...salary);
    const max = Math.max(...salary);

    const indexMin = salary.indexOf(min);

    if (indexMin > -1) {
        salary.splice(indexMin, 1);
    }

    const indexMax = salary.indexOf(max);

    if (indexMax > -1) {
        salary.splice(indexMax, 1);
    }

    let total = 0;

    for (let i=0; i<salary.length; i++) {
        total += salary[i];
    }

    const avgSalExclMinAndMax = total / salary.length;

    return avgSalExclMinAndMax;
    
};

console.log(average([1000,2000,3000]));