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

const reduce = function(callbackFunction, list){
  return callbackFunction(list);
}

exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
