// Using multiple conditions in to form a result.

function checkSign(num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero"; // Also learned to use the last as just an else statement, no argument. *Don't use (num === 0).
}

checkSign(0);
