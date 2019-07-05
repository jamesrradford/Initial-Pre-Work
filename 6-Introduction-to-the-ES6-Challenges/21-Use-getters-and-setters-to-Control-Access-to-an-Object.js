// Difference between get, value of an objects private variable without accessing, and set, modify the private variable of an object.

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat{
    constructor (temperature){
      this.temperature = temperature;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
