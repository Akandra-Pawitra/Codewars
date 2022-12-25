// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

function snail (arr) {
  const final = []

  // repeat
  while (arr.length !== 0) {
    // right
    for (let i = 0; i < arr.length; i++) {
      const cell = arr[0]
      const splice = parseInt(cell.splice(0, 1))
      if (!isNaN(splice)) final.push(splice)
    }
    arr.splice(0, 1)
    // down
    for (let i = 0; i < arr.length; i++) {
      const cell = arr[i]
      const splice = parseInt(cell.splice(arr.length, 1))
      if (!isNaN(splice)) final.push(splice)
    }
    // left
    for (let i = 0; i < arr.length; i++) {
      const index = arr.length - 1
      const cell = arr[index]
      const splice = parseInt(cell.splice(cell.length - 1, 1))
      if (!isNaN(splice)) final.push(splice)
    }
    arr.splice(arr.length - 1, 1)
    // up
    for (let i = 0; i < arr.length; i++) {
      const index = arr.length - i
      const cell = arr[index - 1]
      const splice = parseInt(cell.splice(0, 1))
      if (!isNaN(splice)) final.push(splice)
    }
  }

  return final
}

snail([])
