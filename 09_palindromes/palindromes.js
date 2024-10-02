const palindromes = function (string) {
  let key = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let cleanString = string
    .toLowerCase()
    .split('')
    .filter((character) => key.includes(character))
    .join('')
  let reverseString = cleanString.split('').reverse().join('')
  if (cleanString == reverseString) return true
  else return false
}

// Do not edit below this line
module.exports = palindromes
