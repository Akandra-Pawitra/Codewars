// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd (arr) {
  const int = {}
  for (let i = 0; i < arr.length; i++) {
    const index = arr[i]
    if (int[index] === undefined) int[index] = 0
    int[index] += 1
  }
  for (const k in int) {
    if (int[k] % 2) console.log(+k)
  }
}

findOdd([7]) // 7
findOdd([0]) // 0
findOdd([1, 1, 2]) // 2
findOdd([0, 1, 0, 1, 0]) // 0
findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]) // 4
