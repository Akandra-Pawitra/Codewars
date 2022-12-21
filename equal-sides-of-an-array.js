// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let [leftSum, rightSum, leftArr, rightArr] = [0, 0, arr.slice(0, i), arr.slice(i+1, arr.length)]
    for (let j = 0; j < leftArr.length; j++) {
      leftSum += leftArr[j]
    }
    for (let k = 0; k < rightArr.length; k++) {
      rightSum += rightArr[k]
    }
    if (leftSum === rightSum) {
      console.log(i)
      return i
    }
  }
  console.log(-1)
  return -1
}

findEvenIndex([1,2,3,4,3,2,1])          // 3
findEvenIndex([1,100,50,-51,1,1])       // 1
findEvenIndex([1,2,3,4,5,6])            // -1
findEvenIndex([20,10,30,10,10,15,35])   // 3