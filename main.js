function Card(suit, value){
  this.suit = suit;
  switch (value){
    case 1:
      this.value = "Ace";
      break;
    case 11:
      this.value = "Jack";
      break;
    case 12:
      this.value = "Queen";
      break;
    case 13:
      this.value = "King";
      break;
    default:
      this.value = String(value);
  }
}

function DeckOfCards(){
  var self = this;
  this.deck = [];
  this.suits = ["Diamonds", "Hearts", "Spades", "Clubs"];
  this.suits.forEach(function(suit){
    for (var i = 1; i < 14; i ++){
      var card = new Card(suit, i);
      // console.log(card.value + " of " + card.suit);
      self.deck.push(card);
    }
  });

  this.shuffle = function(){
    for (var i = 0; i < self.deck.length; i ++){
      var j = Math.floor(Math.random() * (i + 1));
      tempCard = self.deck[i];
      self.deck[i] = self.deck[j];
      self.deck[j] = tempCard;
    }
  };

  this.draw = function(){
    var topCard = self.deck.pop();
    return "Drawn: " + topCard.value + " of " + topCard.suit;
  };

  this.get = function(){
    self.deck.forEach(function(card){
      console.log(card.suit + " " + card.value);
    });
  };
}

function Dice(){
  this.value = Math.ceil(Math.random() * 6);
  this.roll = function(){
    this.value = Math.ceil(Math.random() * 6);
  };
}


function getProbabilities(){
  var sumArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 11 indexes for 11 possible sums
  var dice1 = new Dice();
  var dice2 = new Dice();
  var sum = 0;
  for (var i = 0; i < 1000; i ++){
    dice1.roll();
    dice2.roll();
    sum = dice1.value + dice2.value;
    sumArray[sum - 2] += 1;
  }
  return sumArray;
}


// ************************ CODE TO RUN ***************************

console.log(getProbabilities());

var deck = new DeckOfCards();
deck.shuffle();
// deck.get(); // shows all cards
console.log(deck.draw());
