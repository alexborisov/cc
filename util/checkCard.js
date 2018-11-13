const checkCard = number => {
  const digits = number.replace(/\s/g, '')
  const check = parseInt(digits.slice(-1))
  const sum = digits
    .split('')
    .slice(0, -1)
    .map((digit, index, arr) => index%2 ? parseInt(digit) : parseInt(digit)*2)
    .reduce((sum, digit, index, arr) => sum + (digit > 9 ? digit - 9 : digit), check)

  return Number.isNaN(sum) ? false : !(sum%10)
}

module.exports = checkCard
