function parseFx(amount) {
  const parsed = Number(amount.replace(/[£]/gi, '')).toFixed(2)
  return Number.parseFloat(parsed)
}

module.exports = parseFx
