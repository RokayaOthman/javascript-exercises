
 const Firstname= "Carlos";
 const Lastname= "Stevenson";
 const Thisyear= 1965;
 const Birthyear= 1947;

//The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."

// Add your code right below, good luck!
const output = "Hello! My name is " + Firstname + " " + Lastname + " and I am " + (Thisyear - Birthyear) + " years old."

console.log(output);



// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
