const {equal, deepEqual} = require("assert");
const { 
  map,
  filter,
  reduce,
  mapPrime,
  filterPrime
} = require("../src/lib.js");

const square = (number) => number * number; 

const increment = (number) => number + 1;

const isEven = (evenCandidate) => evenCandidate%2 == 0;

const isOdd = (oddCandidate) => !isEven(oddCandidate);

const sum = (num1, num2) => num1 + num2;

const multiply = (num1, num2) => num1 * num2;

describe('map', function(){
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
  it('should return empty array when has empty array as an input', function(){
    deepEqual(filter(isEven, []),[]);
  });

  it('should return all alements when function returns true for all inputes', function(){
    deepEqual(filter(isOdd, [1,3,5]),[1,3,5]);
  });

  it('should return empty array when function return false for all inputes', function(){
    deepEqual(filter(isEven, [1,3,5]),[]);
  });

  it('should return array with elements that predicate true', function(){
    deepEqual(filter(isEven, [1,2,3,4]), [2,4]);
  });
});

describe('reduce', function(){
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

describe('mapPrime', function(){
  it('should return empty array when mapped with empty array', function(){
    deepEqual(mapPrime(square, []),[]);
  });

  it('should return one element when mapped with array of one element', function(){
    deepEqual(mapPrime(increment, [1]),[2]);
  });

  it('should map more then one element', function(){
    deepEqual(mapPrime(square,[1,2,3]), [1,4,9]);
    deepEqual(mapPrime(increment,[1,2,3,4]), [2,3,4,5]);
  });
});

describe('filterPrime', function(){
  it('should return empty array when has empty array as an input', function(){
    deepEqual(filterPrime(isEven, []),[]);
  });

  it('should return all alements when function returns true for all inputes', function(){
    deepEqual(filterPrime(isOdd, [1,3,5]),[1,3,5]);
  });

  it('should return empty array when function return false for all inputes', function(){
    deepEqual(filterPrime(isEven, [1,3,5]),[]);
  });
});
