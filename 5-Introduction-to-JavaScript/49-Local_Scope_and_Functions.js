// Local variables cannot be seen outside of functions.

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = 0
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
