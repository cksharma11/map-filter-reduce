const map = function(list, functionRef){
  let result = [];
  for(index in list){
    result.push(functionRef(list[index]));
  }
  return result;
}

const filter = function(list, functionRef){
  let result = [];
  for(index in list){
    if(functionRef(list[index]))
    result.push(list[index]);
  }
  return result;
}

const reduce = function(list, functionRef){
  return functionRef(list);
}

exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
