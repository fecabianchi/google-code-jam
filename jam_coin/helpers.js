function toBase (bin, base) {
  const binary = bin.reverse()
  let result = []
  let data = 0
  let convert = 0
  for (let i = 0; i < binary.length; i++) {
    convert = binary[i] * Math.pow(base, i)
    result.push(convert)
  }
  data = result.reduce((cur, next) => cur + next)
  return data
}

function trialDivisionTest (n) {
  for (var i = 2; i <= 10; ++i) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

module.exports = {
  trialDivisionTest,
  toBase
}
