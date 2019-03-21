function stringToArray(string){
    string = string.split("");   
    var asciiArray = [];
    var secondArray = []; 
    var newInt = null;
    
    
    for (var f = 0; f < string.length; f++){
      var s = string[f];
      asciiArray.push(s.charCodeAt(0));
    }
       
    for (var e = 0; e < asciiArray.length; e++){
      if (asciiArray[e] === 48){
         secondArray.push(0)
       }
      if (asciiArray[e] === 49){
         secondArray.push(1)
       }
      if (asciiArray[e] === 50){
         secondArray.push(2)
       }
      if (asciiArray[e] === 51){
         secondArray.push(3)
       }
      if (asciiArray[e] === 52){
         secondArray.push(4)
       }
      if (asciiArray[e] === 53){
         secondArray.push(5)
       }
      if (asciiArray[e] === 54){
         secondArray.push(6)
       }
      if (asciiArray[e] === 55){
         secondArray.push(7)
       }
      if (asciiArray[e] === 56){
         secondArray.push(8)
       }
      if (asciiArray[e] === 57){
         secondArray.push(9)
       }
     }
    
    
    return secondArray;
  }
  
  console.log(stringToArray('123'));