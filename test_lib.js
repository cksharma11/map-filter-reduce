const {equal, deepEqual} = require("assert");
const lib = require("./lib.js");

const testMap = function(){
  const { map } = lib;
  const square = function(number){
    return number * number;
  }

  deepEqual(map([1,2,3],square),[1,4,9]);
  deepEqual(map([1],square),[1]);
  deepEqual(map([1,7,3],square),[1,49,9]);
  deepEqual(map([-1,-2,-3],square),[1,4,9]);
  console.log("testMap Passed!");
}

const testFilter = function(){
  const { filter } = lib;
  const isEven = function(number){
    return number % 2 == 0;
  }

  deepEqual(filter([1,2,3],isEven),[2]);
  deepEqual(filter([1],isEven),[]);
  deepEqual(filter([1,7,3],isEven),[]);
  deepEqual(filter([-1,-2,-3],isEven),[-2]);
  console.log("testFilter Passed!");
}


testMap();
testFilter();
