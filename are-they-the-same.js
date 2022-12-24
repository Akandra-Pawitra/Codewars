// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

function comp (array1, array2) {
  if (array1 === null || array2 === null) return false

  // declare square root for comparison
  const sqrt = []
  for (let i = 0; i < array2.length; i++) {
    sqrt.push(Math.sqrt(array2[i]))
  }

  // if one of square root is not in array1, set flag to false
  let flag = true
  for (let j = 0; j < sqrt.length; j++) {
    const index = array1.indexOf(sqrt[j])
    // if sqrt is in array1, remove array1 element corresponding to sqrt
    // this is due how the kata work
    if (index !== -1) {
      array1.splice(index, 1)
    } else {
      flag = false
      break
    }
  }
  return flag
}

const a1 = [121, 144, 19, 161, 19, 144, 19, 11]
const a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]
comp(a1, a2) // true
