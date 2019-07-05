// rewrite functions with returned objects using syntax - const func = (x, y) => ({ x, y });

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  const createPerson = (name, age, gender) =>  ({name, age, gender});

  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
