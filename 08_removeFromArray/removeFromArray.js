const removeFromArray = function(arr, ...nums) {
    // let newarr = arr;
    // for (let i = 0; i < nums.length; i++) {
    //     if (newarr.includes(nums[i])) {
    //         newarr = newarr.filter(item => item !== nums[i]);
    //     }
    // }
    // return newarr;
     return arr.filter(item => !nums.includes(item))
};

//console.log(removeFromArray([1,2,3,4], 1,2,3));



// filter() is a method that iterates through an array item per item and creates
// a new array where the values inside it are copied from the original array based on a 
// callback function

// Do not edit below this line
module.exports = removeFromArray;

// learning :
// Rest parameters : (...rest) allows a function to work with a 
// variable number of arguments
// Rest parameters must always be last in the parameter list:
// You can only have one rest parameter.

//  You already have an array and want to pass its values as 
// as separate arguments (because the function needs single elements only) → Use spread syntax
