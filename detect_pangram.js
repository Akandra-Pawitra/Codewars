function isPangram (string) {
  string = string.toLowerCase()
  let alpha = ('abcdefghijklmnopqrstuvwxyz').split('')
  for (let i = 0; i < string.length; i++) {
    alpha = alpha.filter(e => e !== string[i])
  }
  return (alpha.length === 0)
}

const string = 'The quick brown fox jumps over the lazy dog.'
isPangram(string)
