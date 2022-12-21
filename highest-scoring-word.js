// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(str){
  let highest = {
    word: '',
    score: 0
  }
  let arr = str.split(' ')
  for (let i = 0; i < arr.length; i++) {
    let score = 0
    for (let j = 0; j < arr[i].length; j++) {
      score += (arr[i][j].charCodeAt()) - 96
    }
    if (score > highest.score) {
      highest.word = arr[i]
      highest.score = score
    }
  }
  console.log(highest);
  return highest.word
}

high('man i need a taxi up to ubud')              // 'taxi'
high('what time are we climbing up the volcano')  // 'volcano'
high('aa b')                                      // 'aa'
high('bb d')                                      // 'bb'
high('d bb')                                      // 'd'