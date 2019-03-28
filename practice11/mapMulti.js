function mappingMultiplication(){
    let results = [5,3,2]
    
    let newResults = results.map(x => {
      return x * 2 + 5;
    })
    
    
    return newResults;
  }
  
  
  console.log(mappingMultiplication());
  