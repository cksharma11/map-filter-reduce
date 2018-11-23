const map = function(mapper, list, result = []){
  if(list.length == 0){
    return result;
  }
  result.push(mapper(list[0]));
  list = list.slice(1);
  return map(mapper, list, result);
}

const filter = function(predicate, list, result =[]){
  if(predicate(list[0]) && list.length){
    result.push(list[0]);
    list = list.slice(1);
    filter(predicate, list, result);
  }

  return result;
}

const reduce = function(reducer, list, initialValue){
  let startingIndex = 0;
  if(initialValue == undefined){
    initialValue = list[0];
    startingIndex = 1;
  }
  let accumulator = initialValue;
  for(let index = startingIndex; index < list.length; index++){
    accumulator = reducer(accumulator, list[index]);
  }
  return accumulator;
}

const reducerGenerator = function(mapper){
  return function(accumulator, currentElement){
    accumulator.push(mapper(currentElement));
    return accumulator;
  }
}

const reducerGeneratorForFilter = function(predicate){
  return function(accumulator, currentElement){
    if(predicate(currentElement))
    accumulator.push(currentElement);
    return accumulator;
  }
}

const mapPrime = function(mapper , list){
  let reducer = reducerGenerator(mapper);
  return reduce(reducer, list, []);
}

const filterPrime = function(predicate, list){
  let reducer = reducerGeneratorForFilter(predicate);
  return reduce(reducer, list, []);
}

exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
exports.mapPrime = mapPrime;
exports.filterPrime = filterPrime;
