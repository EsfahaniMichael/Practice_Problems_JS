var stringOne = "seven";

var stringTwo = "dish";

function middleFinder(string){
  if (string.length%2 === 0){
    console.log('even')
    var halfLength = (string.length-1) /2;  
   var firstHalf = string[Math.floor(halfLength)];
    var secondHalf = string[Math.ceil(halfLength)];
    var halfLen = firstHalf + secondHalf;
    return halfLen
           
  }
  else if (string.length%2 === 1){
    console.log('odd')
    var halfLen = string[(string.length-1) / 2];
    return halfLen;
  }   
}