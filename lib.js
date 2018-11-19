const map = function(list, functionRef){
  let result = [];
  for(element of list){
    result.push(functionRef(element));
  }
  return result;
}

exports.map = map;
