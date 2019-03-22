
function sortArray(array){
    var result = {};
    
    var evenArray = [];
    var oddArray = [];
    
    for (var i = 0; i < array.length; i++){
      if (isNaN(array[i])){
        return;
      }
      else if (array[i]%2 === 0){
        evenArray.push(array[i])
      }
      else {
        oddArray.push(array[i])
      }
    }
    result.odd = oddArray;
    result.even= evenArray;
    
    
    return result;
  }
  
  
  console.log(sortArray([2,3,1,4]));