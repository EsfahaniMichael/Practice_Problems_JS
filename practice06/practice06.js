function fiboNac(num){
    var newFib = [];
    var newStringFib = "";
    for (var i = 0; i < num; i++){
      if (i === 0){
        newFib.push(i);
      }
      else if (i === 1){
        newFib.push(i)
      }
      else{
        var newNum = newFib[i-1] + newFib[i-2];
        newFib.push(newNum);
      }
      
    }
           
     for (var indexString = 0; indexString < newFib.length; indexString++){
       newStringFib += newFib[indexString] + " ";
     }
    return newStringFib;  
  }
  
  console.log(fiboNac(12))