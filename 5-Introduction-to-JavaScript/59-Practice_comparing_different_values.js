// Practicing using equality vs strict equality. In the example the boolean would return false since there is a string.

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(20, "20");
