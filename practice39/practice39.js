var trueNums = [1,1,3,5,7];
var falseNums = [1,3,1,5,7];

function numCheck(array){
  for (var i = 0; i < array.length; i++){
    var trueOrNot = null;
    if(i !== 0){
      if(array[i] >= array[i-1]){
        trueOrNot = true;        
      }
      else{        
        trueOrNot = false;
        return trueOrNot;
      }
    }
  }
  return trueOrNot;
}

console.log(numCheck(falseNums));

//// EASY ONE ABOVE