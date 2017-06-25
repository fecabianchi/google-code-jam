function pancakes (list) {
  let aux = 0
  let iterations = 0

  for (var i = 0; i < list.length - 1; i++) {
    if (list[i] !== list[i + 1]) {
      aux = i
      while (aux >= 0) {
        list[aux] = list[i + 1]
        aux--
      }
      iterations++
    }
  }
  if (list[0] === '-') {
    for (var j = 0; j < list.length; j++) {
      list[j] = '+'
    }
    iterations++
  } else {
    return iterations
  }
  return iterations
}
