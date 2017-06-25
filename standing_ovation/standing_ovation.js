function standingOvation (list) {
  let stand = list[0]
  let friends = 0

  for (let i = 0; i < list.length; i++) {
    if (list[i] > 0) {
      if (stand >= i) {
        stand = stand + list[i]
      } else {
        friends = friends + (i - stand)
        stand = stand + (i - stand) + list[i]
      }
    }
  }
  return friends
}
