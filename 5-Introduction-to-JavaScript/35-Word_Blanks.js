// Use the + to attach a variable inside a string, example: "+myVar+"

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    // Your code below this line
    result+= "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";

    // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
