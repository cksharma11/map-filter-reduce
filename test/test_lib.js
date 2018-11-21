const {equal, deepEqual} = require("assert");
const { 
  map,
  filter,
  reduce 
} = require("../src/lib.js");

describe('map', function(){
  const square = function(number){
    return number * number;
  }

  const increment = function(number){
    return number + 1;
  }

  it('should return empty array when mapped with empty array', function(){
    deepEqual(map(square, []),[]);
  });

  it('should return one element when mapped with array of one element', function(){
    deepEqual(map(increment, [1]),[2]);
  });

  it('should map more then one element', function(){
    deepEqual(map(square,[1,2,3]), [1,4,9]);
    deepEqual(map(increment,[1,2,3,4]), [2,3,4,5]);
  });
});

describe('filter', function(){
  const isEven = function(evenCandidate){
    return evenCandidate % 2 == 0;
  }

  const isOdd = function(oddCandidate){
    return oddCandidate % 2 != 0;
  }

  it('should return empty array when has empty array as an input', function(){
    deepEqual(filter(isEven, []),[]);
  });

  it('should return all alements when function returns true for all inputes', function(){
    deepEqual(filter(isOdd, [1,3,5]),[1,3,5]);
  });

  it('should return empty array when function return false for all inputes', function(){
    deepEqual(filter(isEven, [1,3,5]),[]);
  });
});

describe('reduce', function(){
  const sum = function(number1, number2){
    return number1 + number2;
  }

  const multiply = function(number1, number2){
    return number1 * number2;
  }

  it('should return undefined when input is empty array without initial value', function(){
    deepEqual(reduce(sum, []),undefined);
  });

  it('should return initial value when input is empty array with initial value ', function(){
    deepEqual(reduce(multiply, [], 5),5);
  });

  it('should return result when initial value and array with many elements', function(){
    deepEqual(reduce(sum, [1,2,3],4),10);
  });
});
