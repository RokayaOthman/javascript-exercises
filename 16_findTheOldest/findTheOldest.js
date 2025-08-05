const findTheOldest = function(people) {
    let maxx = 0;
    let theperson = "";
    for(let i = 0; i < people.length; i++)
    {
    
        let person = people[i];
        let age = person.yearOfDeath - person.yearOfBirth;
        
        if (age > maxx)
        {
            maxx = age;
           theperson = person
        }
    }
    return theperson;
};

// Do not edit below this line
module.exports = findTheOldest;
