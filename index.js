
function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  function namedFunction() {
    console.log("_This is a named function_!");
  }
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log("_anonymous function_!");
  };
}