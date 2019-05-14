

var numGenerator = function(start, end){
  var p = []
  for (var i = start; i <= end; i++ ){
    p.push(i)
  }
  return p
}

var cardInfo = [
  {
    name: "Visa",
    l: [13, 16, 19],
    p: ['4'],
  },
  {
    name: "Switch",
    l: numGenerator(16, 18, 19),
    p: [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759]
  },
]

var detectNetwork = function(cardNumber) {

  var cardLength = cardNumber.length;

  const cardName = []

  cardInfo.map(card => {
    const checkLength = card.l.filter(value => value === cardLength)
    const checkPrefix = card.p.filter(value => cardNumber.startsWith(value))
    console.log(card.name,  checkLength);
    console.log(card.name, checkPrefix);
    if (checkLength.length>=1 && checkPrefix.length>=1){
      return cardName.push(card.name)
    }
  })

  if (cardName.includes('Visa', 'Switch')){
    console.log('return switch');
    return 'Switch'
  }

  return cardName[0]


};

console.log(detectNetwork('4903456789012345'));
