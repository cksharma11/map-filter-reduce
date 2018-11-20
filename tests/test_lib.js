const {equal, deepEqual} = require("assert");
const { 
  map,
  filter,
  reduce 
} = require("./lib.js");

const testMap = function(){
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
  const isEven = function(evenCandidate){
    return evenCandidate % 2 == 0;
  }

  deepEqual(filter([1,2,3],isEven),[2]);
  deepEqual(filter([1],isEven),[]);
  deepEqual(filter([1,7,3],isEven),[]);
  deepEqual(filter([-1,-2,-3],isEven),[-2]);
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

  deepEqual(reduce([1,2,3],sum),6);
  deepEqual(reduce([1],sum),1);
  deepEqual(reduce([1,7,3],sum),11);
  deepEqual(reduce([-1,-2,-3],sum),-6);
  console.log("testReduce Passed!");
}

testMap();
testFilter();
testReduce();
