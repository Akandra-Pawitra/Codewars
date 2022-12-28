// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff (a, b) {
  if (b.length === 0) return a
  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < a.length; j++) {
      // using splice will messed up with the comparison
      // because it change the array length and indexing
      if (a[j] === b[i]) a[j] = undefined
    }
  }
  return a.filter(e => e !== undefined)
}

arrayDiff([1, 2, 2], [])
