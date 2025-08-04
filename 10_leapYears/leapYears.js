const leapYears = function(year) {
 if (year % 4 !== 0) {
    return false;
 }
 else { // this might be a leap
    if (year % 100 == 0 && year % 400 == 1)
    {
        return false;
    }
    return true;
 }
};
if(leapYears(1985)) 
{
    
    console.log("yeas");
    
}
else 
{
    console.log("No");
}
// Do not edit below this line
module.exports = leapYears;
