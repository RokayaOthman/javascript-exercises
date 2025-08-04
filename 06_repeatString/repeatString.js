const repeatString = function(word, num) {
    let newword = "";
    for (let i = 0; i < num; i++)
    {
        newword += word;
    }
    return newword;
};

console.log(repeatString("rorka",3));
// Do not edit below this line
module.exports = repeatString;
