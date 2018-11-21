const map = function(mapper, list){
  let result = [];
  for(element of list){
    result.push(mapper(element));
  }
  return result;
}

const filter = function(predicate, list){
  let result = [];
  for(element of list){
    if(predicate(element))
    result.push(element);
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

exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
