function charCode(string){
    var results = "";
   for (var i = 0; i < string.length; i++){
     results += string.charCodeAt(i)
   }
   return results;
 }
 
 console.log(charCode('the cat in the hat'))