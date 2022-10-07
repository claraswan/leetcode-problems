/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    
    let result = true;
    
    for (let i in s) {

        if (s[i] === '(' && s[(Number(i)+1)] !== ')') {
            console.log(1);
            result = false;

        } else if (s[i] === '{' && s[(Number(i)+1)] !== '}') {
            console.log(2);
            result = false;

        } else if (s[i] === '[' && s[(Number(i)+1)] !== ']') {
            console.log(3);
            console.log(s[i]);
            console.log(s[(Number(i)+1)]);
            result = false;

        }
            
    };

    console.log(result);
    return result;
    
};

isValid("()");