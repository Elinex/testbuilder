// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var cardInfo = [
  {
    name: "Visa",
    l: [13, 16, 19],
    p: ['4'],
  },
  {
    name: "Diner\'s Club",
    l: [14],
    p: ['38', '39'],
  },
  {
    name: "American Express",
    l: [15],
    p: ['34', '37'],
  },
  {
    name: "MasterCard",
    l: [16],
    p: ['51', '52', '53', '54', '55'],
  },
  {
    name: "Discover",
    l: [16, 19],
    p: ['65', '644', '645', '646', '647', '648', '649', '6011']
  },
  {
    name: "Maestro",
    l: [12, 13, 14, 15, 16, 17, 18, 19],
    p: ['5018', '5020', '5038', '6304']
  }
]

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var cardLength = cardNumber.length;

  const cardName = []

  cardInfo.map(card => {
    const checkLength = card.l.filter(value => value === cardLength)
    const checkPrefix = card.p.filter(value => cardNumber.startsWith(value))
    if (checkLength.length>=1 && checkPrefix.length>=1){
      return cardName.push(card.name)
    }
  })

  return cardName[0]

};
