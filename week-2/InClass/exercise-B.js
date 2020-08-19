/*In a node REPL, what is the typeof a true or false?
Pair up and correct the following function so that the output returns "You've given me a bool, thanks!" */

function boolChecker(bool) {
  if (bool === true) {
    return "You've given me a bool, thanks!";
  }
  else
  return "No bool, not cool.";
}

console.log(boolChecker(true));
