const palindromes = function (word) {
    let left = 0;
    for(let right = word.length - 1; right > 0; right-- )
    {
        if(word[right] !== word[left])
        {
            return false;
        }
        left++;
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;
