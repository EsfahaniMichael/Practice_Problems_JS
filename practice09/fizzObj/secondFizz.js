class fizzBuzz{
    constructor(){
      this.params = [];
    }
    
    add(number,response){
      this.params.push({number,response})
      
    }
    check(testingNumber){
      console.log(this.params)
      for (var i = 0; i < this.params.length; i++){
        if(testingNumber%this.params[i].number === 0){
          console.log(this.params[i].response)
        }
         else{
           console.log("WTF")
         } 
      }
      
    }
    
    
  }
  
  let fizzy = new fizzBuzz();
  
  fizzy.add(5, 'five WORKED');
  fizzy.add(8, "eight worked")
  fizzy.check(10);
  fizzy.check(16);