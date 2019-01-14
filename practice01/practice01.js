var myArray = ['bug', 'insect', 'mammals']

function findWords(word, array){
  var wordsLeftOver = [];
  for (var i = 0; i < array.length; i++){
    if (array[i] > word){
      wordsLeftOver.push(array[i])
    }
  }
  return wordsLeftOver;    
}

console.log(findWords('bun', myArray));