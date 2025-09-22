function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction() {
  function named() {
    return "I am a named function";
  }
  return named;
}


function returnsAnAnonymousFunction() {
  return function() {
    return "I am an anonymous function";
  };
}


module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction
};