// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

function humanReadable (s) {
  let h = Math.floor(s / 3600)
  s = s - (h * 3600)
  h = h.toString()
  if (h.length == 1) h = '0' + h

  let m = Math.floor(s / 60)
  s = s - (m * 60)
  m = m.toString()
  if (m.length == 1) m = '0' + m

  s = s.toString()
  if (s.length == 1) s = '0' + s

  let time = `${h}:${m}:${s}`
  console.log(time);
  return time;
}

humanReadable(0)          // '00:00:00'
humanReadable(123)        // '00:02:03'
humanReadable(9714)       // '02:41:54'
humanReadable(45296)      // '12:34:56'
humanReadable(123456789)  // '34293:33:09'