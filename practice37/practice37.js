
var wordUsed = "amazing";

function cappingWord(word){
  var newWord = "";
  for(var i = 0; i < word.length; i++){
    if (i%2 === 0){
      newWord += word[i];
    }
    else{
      var letterCap = word[i].toUpperCase();
      newWord += letterCap;
    }
  }
  return newWord;
}

console.log(cappingWord(wordUsed));