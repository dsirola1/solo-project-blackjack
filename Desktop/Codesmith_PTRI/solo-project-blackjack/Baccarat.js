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
    value: 0,
    source: './png-cards-1.3/10_of_spades.png'
  },
  {
    value: 0,
    source: './png-cards-1.3/10_of_clubs.png'
  },
  {
    value: 0,
    source: './png-cards-1.3/10_of_hearts.png'
  },
  {
    value: 0,
    source: './png-cards-1.3/10_of_diamonds.png'
  },
  {
    value: 0,
    source: './png-cards-1.3/jack_of_diamonds2.png'
  },
  {
    value: 0,
    source: './png-cards-1.3/jack_of_clubs2.png'
  },
  {
    value: 0,
    source: './png-cards-1.3/jack_of_hearts2.png'
  },
  {
    value: 0,
    source: './png-cards-1.3/jack_of_spades2.png'
  },
  {
    value: 0,
    source: './png-cards-1.3/queen_of_spades2.png'
  },
  {
    value: 0,
    source: './png-cards-1.3/queen_of_hearts2.png'
  },
  {
    value: 0,
    source: './png-cards-1.3/queen_of_diamonds2.png'
  },
  {
    value: 0,
    source: './png-cards-1.3/queen_of_clubs2.png'
  },
  {
    value: 0,
    source: './png-cards-1.3/king_of_clubs2.png'
  },
  {
    value: 0,
    source: './png-cards-1.3/king_of_diamonds2.png'
  },
  {
    value: 0,
    source: './png-cards-1.3/king_of_hearts2.png'
  },
  {
    value: 0,
    source: './png-cards-1.3/king_of_spades2.png'
  },
  {
    value: 1,
    source: './png-cards-1.3/ace_of_spades.png'
  },
  {
    value: 1,
    source: './png-cards-1.3/ace_of_clubs.png'
  },
  {
    value: 1,
    source: './png-cards-1.3/ace_of_hearts.png'
  },
  {
    value: 1,
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

let playerHandArr = [];
let dealerHandArr = [];
let betAmount = 0;
let bankAmount = 1000

function deal () {
  document.getElementById("player-bust").innerHTML = "";
  betAmount = document.getElementById("bet-amount").value;
  document.getElementById("player-card").innerHTML = "";
  document.getElementById("dealer-card").innerHtml = "";
  document.getElementById("player-hand-value").innerHTML = "";
  document.getElementById("dealer-hand-value").innerHTML = "";
  playerHandTotal = 0;
  dealerHandTotal = 0;
  playerHandArr = [];
  dealerHandArr = [];
  // document.getElementById("dealer-card-source").innerHTML = "";
  // console.log(bankAmount, 'bankAmount'
  // if (betAmount * 1 > bankAmount * 1) {
  //   alert(`Please enter an amount less than ${bankAmount}`)
  //   return;
  // }
  // if (betAmount * 1 <= 0) {
  //   alert(`Please enter an amount to bet`)
  //   return;
  // }
  bankAmount = bankAmount - betAmount
  document.getElementById("bank-amount").innerHTML = bankAmount;
  
  playerHandArr.push(deck[Math.floor(deck.length * Math.random())])
  playerHandArr.push(deck[Math.floor(deck.length * Math.random())])
  playerHandArr.push(deck[Math.floor(deck.length * Math.random())])
  dealerHandArr.push(deck[Math.floor(deck.length * Math.random())])
  dealerHandArr.push(deck[Math.floor(deck.length * Math.random())])
  dealerHandArr.push(deck[Math.floor(deck.length * Math.random())])

  playerHandSource = playerHandObj.source;
  dealerHandSource = dealerHandObj.source;
  
  
  for (let i = 0; i < playerHandArr.length; i++) {
    playerHandTotal += playerHandArr[i].value;
    playerHandTotal = playerHandTotal % 10;
    // document.getElementById('player-card-source').src = playerHand[i].source
    // playerHandSource.push(playerHand[i].source)
    
    let arrayImagesElement = document.getElementById("player-card");
    let img = document.createElement('img');
    img.src = playerHandArr[i].source
    img.width = "100";
    img.style.margin = "15px";
    arrayImagesElement.appendChild(img)

  }
  
  document.getElementById("dealer-card").innerHTML = ""

  for (let i = 0; i < dealerHandArr.length; i++) {
    dealerHandTotal += dealerHandArr[i].value;
    dealerHandTotal = dealerHandTotal % 10;
    // document.getElementById('player-card-source').src = playerHand[i].source
    // dealerHandSource.push(dealerHand[i].source)

    let arrayImagesElement = document.getElementById("dealer-card");
    let img = document.createElement('img');
    img.src = dealerHandArr[i].source
    img.width = "100";
    img.style.margin = "15px";
    arrayImagesElement.appendChild(img)
  }
  document.getElementById("player-hand-value").innerHTML = playerHandTotal;
  document.getElementById("dealer-hand-value").innerHTML = dealerHandTotal;



  
  // document.getElementById("player-hand").innerHTML = playerHand
  console.log(playerHandTotal, dealerHandTotal, 'player dealer totals')
  // if (dealerHand >= playerHand) {
  //   // player loses
  //   document.getElementById("player-bust").innerHTML = "You Lose!"
  //   return;
  // }
  // else {
  //   document.getElementById("player-bust").innerHTML = "You Win!"
  //   document.getElementById("bank-amount").innerHTML = bankAmount;
  //   bankAmount += 2 * betAmount;
  //   return;
  // }
  return playerHand, dealerHand, betAmount, bankAmount, playerHandTotal, dealerHandTotal;

}
function betPlayer () {
  deal();
  console.log(playerHandTotal, dealerHandTotal, "player dealer totals")
  if (playerHandTotal > dealerHandTotal) {
    document.getElementById("player-bust").innerHTML = "Player Wins!"
    bankAmount += 2 * betAmount;
    document.getElementById("bank-amount").innerHTML = bankAmount
  }
  else if (playerHandTotal == dealerHandTotal) {
    console.log("it is a tie")
    document.getElementById("player-bust").innerHTML = "Tie!"
    bankAmount += 1 * betAmount;
    document.getElementById("bank-amount").innerHTML = bankAmount
  }
  else if (playerHandTotal < dealerHandTotal) {
    console.log('banker wins')
    document.getElementById("player-bust").innerHTML = "Banker Wins!"
    document.getElementById("bank-amount").innerHTML = bankAmount
  }
}
function betBanker () {
  deal();
  console.log(playerHandTotal, dealerHandTotal, "player dealer totals")
  if (playerHandTotal > dealerHandTotal) {
    document.getElementById("player-bust").innerHTML = "Player Wins!"
  }
  else if (playerHandTotal == dealerHandTotal) {
    console.log("it is a tie")
    document.getElementById("player-bust").innerHTML = "Tie!"
    bankAmount += 1 * betAmount;
    document.getElementById("bank-amount").innerHTML = bankAmount
  }
  else if (playerHandTotal < dealerHandTotal) {
    console.log('banker wins')
    document.getElementById("player-bust").innerHTML = "Banker Wins!"
    bankAmount += 2 * betAmount;
    document.getElementById("bank-amount").innerHTML = bankAmount
  }
}

function chips (value) {
  // return  console.log('chips invoked')
  betAmount = document.getElementById("bet-amount").value
  console.log(betAmount)
  betAmount = betAmount * 1 + value;
  document.getElementById("bet-amount").value = betAmount;
  return betAmount;
}


