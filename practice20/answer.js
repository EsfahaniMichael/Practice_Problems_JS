answer.js

var arrayPractice = [5,3,2,5,1]


function randomOrder(array){
  var newArray = [];  
  for(var i = array.length; i > 0; i-- ){
    var randomPosition = Math.floor(Math.random() * array.length);
    newArray.push(array[randomPosition]);
    array.splice(randomPosition, 1);      
  }
  return newArray; 
}

console.log(randomOrder(arrayPractice));