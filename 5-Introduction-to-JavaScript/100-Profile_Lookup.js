/* Use a for loop and if statements to create a profile lookup. We first start with a for loop to loop the contacts, then we use if to find the first name which
is the name entered. If this returns true the program checks the property then returns that property, false the program returns "No such property". If the first
if statement is false, it will return "No such contact" */ 

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line

for (var i = 0; i < contacts.length; i++){
    if (contacts[i].firstName === name) {
        if (contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        } else {
            return "No such property";
        }
    }
}

return "No such contact";

// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
