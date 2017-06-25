require('babel-polyfill')
const itertools = require('aureooms-js-itertools')
const helpers = require('./helpers')

function jam_coin() {
  const gen = itertools.product([ "01"], 30)
  let coins = 0

  while (true) {
    let bin = gen.next().value
    bin.unshift(1)
    bin.push(1)

    let stop = false

    for(let i = 2; i < 11; i++) {
      let converted = helpers.toBase(bin, i)
      if(helpers.trialDivisionTest(converted)) {
        stop = true
        break
      }
    }

    if(stop) {
      continue;
    } else {
      coins += 1
      console.log("Case #" + coins + ": " + bin.join(''))
      if (coins >= 500) {
        break
      }
    }
  }
}

jam_coin()
