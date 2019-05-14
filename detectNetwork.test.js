
var FILL_ME_IN = 'Fill this value in';

var numGenerator = function(start, end){
  var p = []
  for (var i = start; i <= end; i++ ){
    const numToString = i.toString()
    p.push(numToString)
  }
  return p
}

describe('Diner\'s Club', function() {

  it('has a prefix of 38 and a length of 14', function() {

    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') !== 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') !== 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;


  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var should = chai.should();

  it('has a prefix of 51 and a length of 16', function() {
    (detectNetwork('5112345678901234')).should.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    (detectNetwork('5212345678901234')).should.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    (detectNetwork('5312345678901234')).should.equal('MasterCard');
  });

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });

});

describe('Discover', function(){
  const card = {
    name: "Discover",
    l: [16, 19],
    p: ['65', '644', '645', '646', '647', '648', '649', '6011']
  };

  const info = [];

  for (var i = 0; i < card.l.length; i++){
    for (var j = 0; j < card.p.length; j++){
      info.push([card.l[i], card.p[j]])
    }
  };

  var should = chai.should();

  for (var i = 0; i < info.length; i++){
    var cardNumber = '';
    for (var j = 0; j < (info[i][0] - info[i][1].length); j++){
      var num = ~~(Math.random() * 10);
      var numToString = num.toString();
      cardNumber += numToString
    }
    (function(){
      const newCardNumber = info[i][1]+cardNumber;
      it('has a prefix of ' + info[i][1] + ' and a length of ' + info[i][0], function() {
        detectNetwork(newCardNumber).should.equal('Discover');
      });
    })()
  }
})

describe('Maestro', function() {

  const card = {
    name: "Maestro",
    l: [12, 13, 14, 15, 16, 17, 18, 19],
    p: ['5018', '5020', '5038', '6304']
  };

  const info = [];

  for (var i = 0; i < card.l.length; i++){
    for (var j = 0; j < card.p.length; j++){
      info.push([card.l[i], card.p[j]])
    }
  };

  var should = chai.should();

  for (var i = 0; i < info.length; i++){
    var cardNumber = '';
    for (var j = 0; j < (info[i][0] - info[i][1].length); j++){
      var num = ~~(Math.random() * 10);
      var numToString = num.toString();
      cardNumber += numToString
    }
    (function(){
      const newCardNumber = info[i][1]+cardNumber;
      it('has a prefix of ' + info[i][1] + ' and a length of ' + info[i][0], function() {
        detectNetwork(newCardNumber).should.equal('Maestro');
      });
    })()
  }
});

describe('China UnionPay', function() {
  const card = {
    name: "China UnionPay",
    l: numGenerator(16, 19),
    p: (numGenerator(624, 626).concat(
      numGenerator(6282, 6288),
      numGenerator(622126, 622925)))
  };

  const info = [];

  for (var i = 0; i < card.l.length; i++){
    for (var j = 0; j < card.p.length; j++){
      info.push([card.l[i], card.p[j]])
    }
  };

  var should = chai.should();

  for (var i = 0; i < info.length; i++){
    var cardNumber = '';
    for (var j = 0; j < (info[i][0] - info[i][1].length); j++){
      var num = ~~(Math.random() * 10);
      var numToString = num.toString();
      cardNumber += numToString
    }
    (function(){
      const newCardNumber = info[i][1]+cardNumber;
      it('has a prefix of ' + info[i][1] + ' and a length of ' + info[i][0], function() {
        detectNetwork(newCardNumber).should.equal('China UnionPay');
      });
    })()
  }
});

describe('Switch', function() {
  const card = {
    name: "Switch",
    l: [16,18,19],
    p: ['4903', '4905', '4911', '4936', '564182', '633110', '6333',  '6759']
  };

  const info = [];

  for (var i = 0; i < card.l.length; i++){
    for (var j = 0; j < card.p.length; j++){
      info.push([card.l[i], card.p[j]])
    }
  };

  var should = chai.should();

  for (var i = 0; i < info.length; i++){
    var cardNumber = '';
    for (var j = 0; j < (info[i][0] - info[i][1].length); j++){
      var num = ~~(Math.random() * 10);
      var numToString = num.toString();
      cardNumber += numToString
    }
    (function(){
      const newCardNumber = info[i][1]+cardNumber;
      it('has a prefix of ' + info[i][1] + ' and a length of ' + info[i][0], function() {
        detectNetwork(newCardNumber).should.equal('Switch');
      });
    })()
  }
});
