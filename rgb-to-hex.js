// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

function toHex(arg) {
  if (arg < 0) arg = (0).toString(16)
  else if (arg <= 255) arg = arg.toString(16)
  else if (arg > 255) arg = (255).toString(16)
  return arg
}

function pad(arg) {
  if (arg.length == 1) arg = '0' + arg
  return arg
}

function rgb(r, g, b){
  r = pad(toHex(r)).toUpperCase()
  g = pad(toHex(g)).toUpperCase()
  b = pad(toHex(b)).toUpperCase()
  console.log(r + g + b)
  return r + g + b
}

rgb(0, 0, 0)        // '000000'
rgb(0, 0, -20)      // '000000'
rgb(300,255,255)    // 'FFFFFF'
rgb(173,255,47)     // 'ADFF2F'