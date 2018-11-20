const map = function(callbackFunction, list){
  let result = [];
  for(element of list){
    result.push(callbackFunction(element));
  }
  return result;
}

const filter = function(callbackFunction, list){
  let result = [];
  for(element of list){
    if(callbackFunction(element))
    result.push(element);
  }
  return result;
}

const reduce = function(callbackFunction, list, initialValue){
  let startingIndex = 0;
  if(!initialValue){
    initialValue = list[0];
    startingIndex = 1;
  }
  let accumulator = initialValue;
  for(let index = startingIndex; index < list.length; index++){
    accumulator = callbackFunction(accumulator, list[index]);
  }
  return accumulator;
}

exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
