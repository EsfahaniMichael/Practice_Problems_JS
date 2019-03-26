class fizzBuzz{
    constructor(firstNum, firstWord){
      this.num = firstNum;
      this.word = firstWord;
    }
    printAllNums(){
      
      for (var i = 1; i <= 100; i++ ){
        if (i%this.num === 0){
          console.log(this.word)
        }
        else if(i%3 === 0){
          console.log('FIZZY')
        }
        else{
         console.log(i)
        }
      }
      
    }
    
    
  };
  
  let fizzy = new fizzBuzz(5, 'YO!!!');
  
  console.log(fizzy.printAllNums());