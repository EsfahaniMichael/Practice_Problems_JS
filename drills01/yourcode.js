
function sumArray(allNums){
    var total = null;
    for (var i = 0; i < allNums.length; i++){
      total += allNums[i];
    }
    return total;
}

function fitWithinVal(array,num){
  var total = null;
  var numbers = [];
  var i = 0;  
      while(total < num){        
        total += array[i];
        if (total < num){
          numbers.push(array[i])
        }
        i++;
      }      
  return numbers;
      
}

function getAllNamesShorterThan(){

}

function makeLabel(){

}
