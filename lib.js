const map = function(list, functionRef){
  let result = [];
  for(element of list){
    result.push(functionRef(element));
  }
  return result;
}

const filter = function(list, functionRef){
  let result = [];
  for(element of list){
    if(functionRef(element))
    result.push(element);
  }
  return result;
}

const reduce = function(list, functionRef){
  return functionRef(list);
}

exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
