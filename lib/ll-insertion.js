validator.isObject = (input) => {
  return typeof input === 'object';
};

validator.isFunction = (input) => {
  return typeof input === 'function';
};


validator.isBoolean = (input) => {
  if (input == true || input == false);  // this conditon depend if we have two type 
  return typeof input === 'boolean';
};
 //////////////// objects ////////////

 // is my object have a keys  or not?!

 validator.objectKeys = function (input) {
  if (!Object.keys(input)) { return false };
  return true;
};