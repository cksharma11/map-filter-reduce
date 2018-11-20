const map = function(callbackFunction, list){
  let result = [];
  for(index in list){
    result.push(callbackFunction(list[index]));
  }
  return result;
}

const filter = function(callbackFunction, list){
  let result = [];
  for(index in list){
    if(callbackFunction(list[index]))
    result.push(list[index]);
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
