

function forLoop(array) {
  for (var i = 1; i < 25; i++) {
    array.push(`"I am ${i} strange loop${i === 1 ? '' : 's'}."`)
  }
  return array
}