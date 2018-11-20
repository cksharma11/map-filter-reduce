const {equal, deepEqual} = require("assert");
const { 
  map,
  filter,
  reduce 
} = require("../src/lib.js");

const testMap = function(){
  const square = function(number){
    return number * number;
  }
  const increment = function(number){
    return number + 1;
  }
  deepEqual(map(square, [1,2,3]),[1,4,9]);
  deepEqual(map(square, [1]),[1]);
  deepEqual(map(square, [1,7,3]),[1,49,9]);
  deepEqual(map(square, [-1,-2,-3]),[1,4,9]);

  deepEqual(map(increment, [1,2,3]),[2,3,4]);
  deepEqual(map(increment, [1]),[2]);
  deepEqual(map(increment, [1,7,3]),[2,8,4]);
  deepEqual(map(increment, [-1,-2,-3]),[0,-1,-2]);
  console.log("testMap Passed!");
}

const testFilter = function(){
  const isEven = function(evenCandidate){
    return evenCandidate % 2 == 0;
  }
  
  const isOdd = function(oddCandidate){
    return oddCandidate % 2 != 0;
  }

  deepEqual(filter(isEven, [1,2,3]),[2]);
  deepEqual(filter(isEven, [1]),[]);
  deepEqual(filter(isEven, [1,7,3]),[]);
  deepEqual(filter(isEven, [-1,-2,-3]),[-2]);

  deepEqual(filter(isOdd, [1,2,3]),[1,3]);
  deepEqual(filter(isOdd, [1]),[1]);
  deepEqual(filter(isOdd, [1,7,3]),[1,7,3]);
  deepEqual(filter(isOdd, [-1,-2,-3]),[-1,-3]);
  console.log("testFilter Passed!");
}

const testReduce = function(){
  const sum = function(number1, number2){
    return number1 + number2;
  }

  const multiply = function(number1, number2){
    return number1 * number2;
  }

  deepEqual(reduce(sum, [1,2,3]),6);
  deepEqual(reduce(sum, [1]),1);
  deepEqual(reduce(sum, [1,7,3]),11);
  deepEqual(reduce(sum, [-1,-2,-3]),-6);
  deepEqual(reduce(sum, [5,20], 10),35);

  deepEqual(reduce(multiply, [1,2,3]),6);
  deepEqual(reduce(multiply, [1]),1);
  deepEqual(reduce(multiply, [1,7,3]),21);
  deepEqual(reduce(multiply, [-1,-2,-3]),-6);
  deepEqual(reduce(multiply, [1,2], 2),4);
  console.log("testReduce Passed!");
}

testMap();
testFilter();
testReduce();
