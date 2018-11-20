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

  deepEqual(map(square, [1,2,3]),[1,4,9]);
  deepEqual(map(square, [1]),[1]);
  deepEqual(map(square, [1,7,3]),[1,49,9]);
  deepEqual(map(square, [-1,-2,-3]),[1,4,9]);
  console.log("testMap Passed!");
}

const testFilter = function(){
  const isEven = function(evenCandidate){
    return evenCandidate % 2 == 0;
  }

  deepEqual(filter(isEven, [1,2,3]),[2]);
  deepEqual(filter(isEven, [1]),[]);
  deepEqual(filter(isEven, [1,7,3]),[]);
  deepEqual(filter(isEven, [-1,-2,-3]),[-2]);
  console.log("testFilter Passed!");
}

const testReduce = function(){
  const sum = function(numberList){
    let result = 0;
    for(let index = 0; index < numberList.length; index++){
      result = result + numberList[index];
    }
    return result;
  }

  deepEqual(sum, reduce([1,2,3]),6);
  deepEqual(sum, reduce([1]),1);
  deepEqual(sum, reduce([1,7,3]),11);
  deepEqual(sum, reduce([-1,-2,-3]),-6);
  console.log("testReduce Passed!");
}

testMap();
testFilter();
testReduce();
