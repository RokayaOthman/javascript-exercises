const palindromes = function (theword) {
    let left = 0;
    for(let right = theword.length - 1; right > 0; right-- )
    {
        if(theword[right] !== word[left])
        {
            return false;
        }
        left++;
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;
