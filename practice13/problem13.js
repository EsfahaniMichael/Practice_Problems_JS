function doMath(x,y){
    let results = [];
    
     results.push(x + "+" + y + "=" + (x + y));
     results.push(x + "-" + y + "=" + (x-y));
     results.push(x + "*" + y + "=" + (x*y));
     results.push(x + "/" + y + "=" + (x/y));
    
    
    return results;
    
  }
  
  console.log(doMath(2,5))
  