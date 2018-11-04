function sumOfOthers(array) {
  var result = [];
  for(var i = 0; i < array.length; i++) {
    var sum = 0;
    for(var j = 0; j < array.length; j++) {
       if(j != i) {
         sum += array[j];
       }
    }
    result.push(sum);
  }
  return result;
 }

 sumOfOthers([2, 3, 4, 1]);