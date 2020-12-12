// create array for cards between 1 and 11
// let deck = [2,3,4,5,6,7,8,9,10,10,10,10,11]
// let deck = [1,1,1,1,1,1,1,1,1,1,1,1,1]
let deck = [
  {
    value: 2,
    suit: 'clubs',
    source: './png-cards-1.3/2_of_clubs.png'
  },
  {
    value: 2,
    suit: 'diamonds',
    source: './png-cards-1.3/2_of_diamonds.png'
  },
  {
    value: 2,
    suit: 'hearts',
    source: './png-cards-1.3/2_of_hearts.png'
  },
  {
    value: 2,
    suit: 'spades',
    source: './png-cards-1.3/2_of_spades.png'
  },
  {
    value: 3,
    suit: 'diamonds',
    source: './png-cards-1.3/3_of_diamonds.png'
  },
  {
    value: 3,
    suit: 'hearts',
    source: './png-cards-1.3/3_of_hearts.png'
  },
  {
    value: 3,
    suit: 'clubs',
    source: './png-cards-1.3/3_of_clubs.png'
  },
  {
    value: 3,
    suit: 'spades',
    source: './png-cards-1.3/3_of_spades.png'
  },
  {
    value: 4,
    suit: 'hearts',
    source: './png-cards-1.3/4_of_hearts.png'
  },
  {
    value: 4,
    suit: 'spades',
    source: './png-cards-1.3/4_of_spades.png'
  },
  {
    value: 4,
    suit: 'diamonds',
    source: './png-cards-1.3/4_of_diamonds.png'
  },
  {
    value: 4,
    suit: 'clubs',
    source: './png-cards-1.3/4_of_clubs.png'
  },
  {
    value: 5,
    suit: 'clubs',
    source: './png-cards-1.3/5_of_clubs.png'
  },
  {
    value: 5,
    suit: 'diamonds',
    source: './png-cards-1.3/5_of_diamonds.png'
  },
  {
    value: 5,
    suit: 'hearts',
    source: './png-cards-1.3/5_of_hearts.png'
  },
  {
    value: 5,
    source: './png-cards-1.3/5_of_spades.png'
  },
  {
    value: 6,
    source: './png-cards-1.3/6_of_spades.png'
  },
  {
    value: 6,
    source: './png-cards-1.3/6_of_clubs.png'
  },
  {
    value: 6,
    source: './png-cards-1.3/6_of_diamonds.png'
  },
  {
    value: 6,
    source: './png-cards-1.3/6_of_clubs.png'
  },
  {
    value: 7,
    source: './png-cards-1.3/7_of_clubs.png'
  },
  {
    value: 7,
    source: './png-cards-1.3/7_of_diamonds.png'
  },
  {
    value: 7,
    source: './png-cards-1.3/7_of_hearts.png'
  },
  {
    value: 7,
    source: './png-cards-1.3/7_of_spades.png'
  },
  {
    value: 8,
    source: './png-cards-1.3/8_of_spades.png'
  },
  {
    value: 8,
    source: './png-cards-1.3/8_of_hearts.png'
  },
  {
    value: 8,
    source: './png-cards-1.3/8_of_diamonds.png'
  },
  {
    value: 8,
    source: './png-cards-1.3/8_of_clubs.png'
  },
  {
    value: 9,
    source: './png-cards-1.3/9_of_clubs.png'
  },
  {
    value: 9,
    source: './png-cards-1.3/9_of_diamonds.png'
  },
  {
    value: 9,
    source: './png-cards-1.3/9_of_hearts.png'
  },
  {
    value: 9,
    source: './png-cards-1.3/9_of_spades.png'
  },
  {
    value: 10,
    source: './png-cards-1.3/10_of_spades.png'
  },
  {
    value: 10,
    source: './png-cards-1.3/10_of_clubs.png'
  },
  {
    value: 10,
    source: './png-cards-1.3/10_of_hearts.png'
  },
  {
    value: 10,
    source: './png-cards-1.3/10_of_diamonds.png'
  },
  {
    value: 11,
    source: './png-cards-1.3/jack_of_diamonds2.png'
  },
  {
    value: 11,
    source: './png-cards-1.3/jack_of_clubs2.png'
  },
  {
    value: 11,
    source: './png-cards-1.3/jack_of_hearts2.png'
  },
  {
    value: 11,
    source: './png-cards-1.3/jack_of_spades2.png'
  },
  {
    value: 12,
    source: './png-cards-1.3/queen_of_spades2.png'
  },
  {
    value: 12,
    source: './png-cards-1.3/queen_of_hearts2.png'
  },
  {
    value: 12,
    source: './png-cards-1.3/queen_of_diamonds2.png'
  },
  {
    value: 12,
    source: './png-cards-1.3/queen_of_clubs2.png'
  },
  {
    value: 13,
    source: './png-cards-1.3/king_of_clubs2.png'
  },
  {
    value: 13,
    source: './png-cards-1.3/king_of_diamonds2.png'
  },
  {
    value: 13,
    source: './png-cards-1.3/king_of_hearts2.png'
  },
  {
    value: 13,
    source: './png-cards-1.3/king_of_spades2.png'
  },
  {
    value: 14,
    source: './png-cards-1.3/ace_of_spades.png'
  },
  {
    value: 14,
    source: './png-cards-1.3/ace_of_clubs.png'
  },
  {
    value: 14,
    source: './png-cards-1.3/ace_of_hearts.png'
  },
  {
    value: 14,
    source: './png-cards-1.3/ace_of_diamonds.png'
  },
]

// create a deal function which gives a random card from the deck
let playerHand = 0;
let dealerHand = 0;

let playerHandTotal = 0;
let dealerHandTotal = 0;
let playerHandObj = {};
let dealerHandObj = {};
let dealerHandSource;
let playerHandSource;

let betAmount = 0;
let bankAmount = 1000

function deal () {
  document.getElementById("player-bust").innerHTML = ""
  betAmount = document.getElementById("bet-amount").value
  // console.log(bankAmount, 'bankAmount')
  if (betAmount * 1 > bankAmount * 1) {
    alert(`Please enter an amount less than ${bankAmount}`)
    return;
  }
  if (betAmount * 1 <= 0) {
    alert(`Please enter an amount to bet`)
    return;
  }
  bankAmount = bankAmount - betAmount
  document.getElementById("bank-amount").innerHTML = bankAmount;
  
  playerHandObj = (deck[Math.floor(deck.length * Math.random())])
  dealerHandObj = (deck[Math.floor(deck.length * Math.random())])
  
  playerHand = playerHandObj.value;
  dealerHand = dealerHandObj.value;

  playerHandSource = playerHandObj.source;
  dealerHandSource = dealerHandObj.source;

  document.getElementById('dealer-card-source').src=dealerHandSource;
  document.getElementById('player-card-source').src=playerHandSource;
  
  // document.getElementById("dealer-hand").innerHTML = dealerHand
  // document.getElementById("player-hand").innerHTML = playerHand
  console.log('player-hand is ', playerHand)
  if (dealerHand >= playerHand) {
    // player loses
    document.getElementById("player-bust").innerHTML = "You Lose!"
    return;
  }
  else {
    document.getElementById("player-bust").innerHTML = "You Win!"
    document.getElementById("bank-amount").innerHTML = bankAmount;
    bankAmount += 2 * betAmount;
    return;
  }
  return playerHand, dealerHand, betAmount, bankAmount
}

function chips (value) {
  // return  console.log('chips invoked')
  betAmount = document.getElementById("bet-amount").value
  console.log(betAmount)
  betAmount = betAmount * 1 + value;
  document.getElementById("bet-amount").value = betAmount;
  return betAmount;
}


