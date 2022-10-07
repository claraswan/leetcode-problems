/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {

    let result = 0;

    const romanKey = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    for (const i in s) {

        let char = s[i];

        // instances where subtraction is used
        if ((char === 'V' || char === 'X') && s[Number(i)-1] === 'I') {

            let pairValue = (romanKey[char] - 1);
            result += (pairValue - 1);

        } else if ((char === 'L' || char === 'C') && s[Number(i)-1] === 'X') {

            let pairValue = (romanKey[char] - 10);
            result += (pairValue - 10);

        } else if ((char === 'D' || char === 'M') && s[Number(i)-1] === 'C') {

            let pairValue = (romanKey[char] - 100);
            result += (pairValue - 100);

        } else {

            // regular calculation
            let value = romanKey[char];
            result += value;

        }


    }

    console.log('Result: ', result);
    
};

romanToInt("MCMXCIV");