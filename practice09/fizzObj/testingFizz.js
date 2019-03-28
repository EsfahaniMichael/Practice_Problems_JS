class fizzBuzz{
    constructor(){
      this.params = [];
      this.flag = false;
    }
    
    add(number,response){
      this.params.push({number,response})
      
    }
    check(testingNumber){
      
      for (var i = 0; i < this.params.length; i++){
        if(testingNumber%this.params[i].number === 0){
          
        }
         else{
           console.log("WTF")
         } 
      }
             
    }
    printAll(){
        for(var b = 1; b <= 100; b++ ){
          for(var c = 0; c < this.params.length; c++){
            if(b%this.params[c].number === 0){
              console.log(this.params[c].response)
              this.flag = true;
                if (c === this.params.length -1 ){
                    break;
                }
            }
            if (c === this.params.length -1 && !this.flag){
                console.log(b)
            } 
            
          }
          this.flag = false;
        }
      }
    
    
    
  }
  
  let fizzy = new fizzBuzz();
  
  fizzy.add(3, 'BALLS');
  fizzy.add(5, "BLACKBALLS")
  fizzy.printAll();
  
  