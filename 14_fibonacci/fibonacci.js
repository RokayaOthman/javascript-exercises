
const fibonacci = function(numArg) {
    let num;
    if (typeof num !== 'number')
    {
        num = parseInt(numArg);
    }
    else
    {
        num = numArg;
    }

    if (num === 0) return 0;
    if (num === 1) return 1;
    
    let last = 0;
    let current = 1;
    let next = 0;

    for (let i = 2; i <= num; i++) {
        next = last + current;
        last = current;
        current = next;
    }
    return current;
};
//console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
