// create array for cards between 1 and 11
// let deck = [1,2,3,4,5,6,7,8,9,10,10,10,10,11]
let newDeck = [
  { value: 2, source: './png-cards-1.3/2_of_clubs.png', index: 0 },
  { value: 2, source: './png-cards-1.3/2_of_diamonds.png', index: 1 },
  { value: 2, source: './png-cards-1.3/2_of_hearts.png', index: 2 },
  { value: 2, source: './png-cards-1.3/2_of_spades.png', index: 3 },
  { value: 3, source: './png-cards-1.3/3_of_diamonds.png', index: 4 },
  { value: 3, source: './png-cards-1.3/3_of_hearts.png', index: 5 },
  { value: 3, source: './png-cards-1.3/3_of_clubs.png', index: 6 },
  { value: 3, source: './png-cards-1.3/3_of_spades.png', index: 7 },
  { value: 4, source: './png-cards-1.3/4_of_hearts.png', index: 8 },
  { value: 4, source: './png-cards-1.3/4_of_spades.png', index: 9 },
  { value: 4, source: './png-cards-1.3/4_of_diamonds.png', index: 10 },
  { value: 4, source: './png-cards-1.3/4_of_clubs.png', index: 11 },
  { value: 5, source: './png-cards-1.3/5_of_clubs.png', index: 12 },
  { value: 5, source: './png-cards-1.3/5_of_diamonds.png', index: 13 },
  { value: 5, source: './png-cards-1.3/5_of_hearts.png', index: 14 },
  { value: 5, source: './png-cards-1.3/5_of_spades.png', index: 15 },
  { value: 6, source: './png-cards-1.3/6_of_spades.png', index: 16 },
  { value: 6, source: './png-cards-1.3/6_of_clubs.png', index: 17 },
  { value: 6, source: './png-cards-1.3/6_of_diamonds.png', index: 18 },
  { value: 6, source: './png-cards-1.3/6_of_clubs.png', index: 19 },
  { value: 7, source: './png-cards-1.3/7_of_clubs.png', index: 20 },
  { value: 7, source: './png-cards-1.3/7_of_diamonds.png', index: 21 },
  { value: 7, source: './png-cards-1.3/7_of_hearts.png', index: 22 },
  { value: 7, source: './png-cards-1.3/7_of_spades.png', index: 23 },
  { value: 8, source: './png-cards-1.3/8_of_spades.png', index: 24 },
  { value: 8, source: './png-cards-1.3/8_of_hearts.png', index: 25 },
  { value: 8, source: './png-cards-1.3/8_of_diamonds.png', index: 26 },
  { value: 8, source: './png-cards-1.3/8_of_clubs.png', index: 27 },
  { value: 9, source: './png-cards-1.3/9_of_clubs.png', index: 28 },
  { value: 9, source: './png-cards-1.3/9_of_diamonds.png', index: 29 },
  { value: 9, source: './png-cards-1.3/9_of_hearts.png', index: 30 },
  { value: 9, source: './png-cards-1.3/9_of_spades.png', index: 31 },
  { value: 10, source: './png-cards-1.3/10_of_spades.png', index: 32 },
  { value: 10, source: './png-cards-1.3/10_of_clubs.png', index: 33 },
  { value: 10, source: './png-cards-1.3/10_of_hearts.png', index: 34 },
  {
    value: 10,
    source: './png-cards-1.3/10_of_diamonds.png',
    index: 35
  },
  {
    value: 10,
    source: './png-cards-1.3/jack_of_diamonds2.png',
    index: 36
  },
  {
    value: 10,
    source: './png-cards-1.3/jack_of_clubs2.png',
    index: 37
  },
  {
    value: 10,
    source: './png-cards-1.3/jack_of_hearts2.png',
    index: 38
  },
  {
    value: 10,
    source: './png-cards-1.3/jack_of_spades2.png',
    index: 39
  },
  {
    value: 10,
    source: './png-cards-1.3/queen_of_spades2.png',
    index: 40
  },
  {
    value: 10,
    source: './png-cards-1.3/queen_of_hearts2.png',
    index: 41
  },
  {
    value: 10,
    source: './png-cards-1.3/queen_of_diamonds2.png',
    index: 42
  },
  {
    value: 10,
    source: './png-cards-1.3/queen_of_clubs2.png',
    index: 43
  },
  {
    value: 10,
    source: './png-cards-1.3/king_of_clubs2.png',
    index: 44
  },
  {
    value: 10,
    source: './png-cards-1.3/king_of_diamonds2.png',
    index: 45
  },
  {
    value: 10,
    source: './png-cards-1.3/king_of_hearts2.png',
    index: 46
  },
  {
    value: 10,
    source: './png-cards-1.3/king_of_spades2.png',
    index: 47
  },
  { value: 11, source: './png-cards-1.3/ace_of_spades.png', index: 48 },
  { value: 11, source: './png-cards-1.3/ace_of_clubs.png', index: 49 },
  { value: 1, source: './png-cards-1.3/ace_of_hearts.png', index: 50 },
  {
    value: 1,
    source: './png-cards-1.3/ace_of_diamonds.png',
    index: 51
  }
]
let deck = [
  { value: 2, source: './png-cards-1.3/2_of_clubs.png', index: 0 },
  { value: 2, source: './png-cards-1.3/2_of_diamonds.png', index: 1 },
  { value: 2, source: './png-cards-1.3/2_of_hearts.png', index: 2 },
  { value: 2, source: './png-cards-1.3/2_of_spades.png', index: 3 },
  { value: 3, source: './png-cards-1.3/3_of_diamonds.png', index: 4 },
  { value: 3, source: './png-cards-1.3/3_of_hearts.png', index: 5 },
  { value: 3, source: './png-cards-1.3/3_of_clubs.png', index: 6 },
  { value: 3, source: './png-cards-1.3/3_of_spades.png', index: 7 },
  { value: 4, source: './png-cards-1.3/4_of_hearts.png', index: 8 },
  { value: 4, source: './png-cards-1.3/4_of_spades.png', index: 9 },
  { value: 4, source: './png-cards-1.3/4_of_diamonds.png', index: 10 },
  { value: 4, source: './png-cards-1.3/4_of_clubs.png', index: 11 },
  { value: 5, source: './png-cards-1.3/5_of_clubs.png', index: 12 },
  { value: 5, source: './png-cards-1.3/5_of_diamonds.png', index: 13 },
  { value: 5, source: './png-cards-1.3/5_of_hearts.png', index: 14 },
  { value: 5, source: './png-cards-1.3/5_of_spades.png', index: 15 },
  { value: 6, source: './png-cards-1.3/6_of_spades.png', index: 16 },
  { value: 6, source: './png-cards-1.3/6_of_clubs.png', index: 17 },
  { value: 6, source: './png-cards-1.3/6_of_diamonds.png', index: 18 },
  { value: 6, source: './png-cards-1.3/6_of_clubs.png', index: 19 },
  { value: 7, source: './png-cards-1.3/7_of_clubs.png', index: 20 },
  { value: 7, source: './png-cards-1.3/7_of_diamonds.png', index: 21 },
  { value: 7, source: './png-cards-1.3/7_of_hearts.png', index: 22 },
  { value: 7, source: './png-cards-1.3/7_of_spades.png', index: 23 },
  { value: 8, source: './png-cards-1.3/8_of_spades.png', index: 24 },
  { value: 8, source: './png-cards-1.3/8_of_hearts.png', index: 25 },
  { value: 8, source: './png-cards-1.3/8_of_diamonds.png', index: 26 },
  { value: 8, source: './png-cards-1.3/8_of_clubs.png', index: 27 },
  { value: 9, source: './png-cards-1.3/9_of_clubs.png', index: 28 },
  { value: 9, source: './png-cards-1.3/9_of_diamonds.png', index: 29 },
  { value: 9, source: './png-cards-1.3/9_of_hearts.png', index: 30 },
  { value: 9, source: './png-cards-1.3/9_of_spades.png', index: 31 },
  { value: 10, source: './png-cards-1.3/10_of_spades.png', index: 32 },
  { value: 10, source: './png-cards-1.3/10_of_clubs.png', index: 33 },
  { value: 10, source: './png-cards-1.3/10_of_hearts.png', index: 34 },
  {
    value: 10,
    source: './png-cards-1.3/10_of_diamonds.png',
    index: 35
  },
  {
    value: 10,
    source: './png-cards-1.3/jack_of_diamonds2.png',
    index: 36
  },
  {
    value: 10,
    source: './png-cards-1.3/jack_of_clubs2.png',
    index: 37
  },
  {
    value: 10,
    source: './png-cards-1.3/jack_of_hearts2.png',
    index: 38
  },
  {
    value: 10,
    source: './png-cards-1.3/jack_of_spades2.png',
    index: 39
  },
  {
    value: 10,
    source: './png-cards-1.3/queen_of_spades2.png',
    index: 40
  },
  {
    value: 10,
    source: './png-cards-1.3/queen_of_hearts2.png',
    index: 41
  },
  {
    value: 10,
    source: './png-cards-1.3/queen_of_diamonds2.png',
    index: 42
  },
  {
    value: 10,
    source: './png-cards-1.3/queen_of_clubs2.png',
    index: 43
  },
  {
    value: 10,
    source: './png-cards-1.3/king_of_clubs2.png',
    index: 44
  },
  {
    value: 10,
    source: './png-cards-1.3/king_of_diamonds2.png',
    index: 45
  },
  {
    value: 10,
    source: './png-cards-1.3/king_of_hearts2.png',
    index: 46
  },
  {
    value: 10,
    source: './png-cards-1.3/king_of_spades2.png',
    index: 47
  },
  { value: 11, source: './png-cards-1.3/ace_of_spades.png', index: 48 },
  { value: 11, source: './png-cards-1.3/ace_of_clubs.png', index: 49 },
  { value: 1, source: './png-cards-1.3/ace_of_hearts.png', index: 50 },
  {
    value: 1,
    source: './png-cards-1.3/ace_of_diamonds.png',
    index: 51
  }
]

// let deck = [1,1,1,1,1,1,1,1,1,1,1,1,1]

// create a deal function which gives a random card from the deck
let playerHand = [];
let dealerHand = [];

let playerHandTotal = 0;
let dealerHandTotal = 0;
let betAmount = 0;

let dealerHandObj = {};
let playerHandObj = {};
let dealerHandSource = [];
let playerHandSource = [];

let bankAmount = 1000

function deal () {
  document.getElementById("player-bust").innerHTML = ""
  document.getElementById("player-card").innerHTML = ""
  document.getElementById("dealer-card").innerHTML = ""
  betAmount = document.getElementById("bet-amount").value
  // console.log(bankAmount, 'bankAmount')
  // if (betAmount * 1 > bankAmount * 1) {
  //   alert(`Please enter an amount less than ${bankAmount}`)
  //   return;
  // }
  // if (betAmount * 1 <= 0) {
  //   alert(`Please enter an amount to bet`)
  //   return;
  // }
  bankAmount = bankAmount - betAmount
  document.getElementById("bank-amount").innerHTML = "Bank: $" + bankAmount;
  
  dealerHandTotal = 0;
  playerHandTotal = 0;
  playerHand = [];
  dealerHand = [];

  playerHand.push(deck[Math.floor(deck.length * Math.random())])
  let pIndex = playerHand[0].index
  // console.log(playerHand, 'playerhand')
  deck.splice(pIndex, 1)
  runningCount(playerHand[0].value)
  // console.log(runningCount(playerHand[0].value))
  
  
  playerHand.push(deck[Math.floor(deck.length * Math.random())])
  let pIndexOne = playerHand[1].index
  // console.log(playerHand, 'playerhand')
  deck.splice(pIndexOne, 1)
  runningCount(playerHand[1].value)
  // console.log(runningCount(playerHand[1].value))
  
  dealerHand.push(deck[Math.floor(deck.length * Math.random())])
  let dIndex = dealerHand[0].index
  // console.log(dealerHand, 'dealerhand')
  runningCount(dealerHand[0].value)
  deck.splice(dIndex, 1)
  // console.log(runningCount(dealerHand[0].value))



  // let pIndexLast = playerHand[playerHand.length - 1]
  // runningCount(pIndexLast)
  // deck.splice(pIndexLast, 1)


  // console.log(deck)

  // add images

  for (let i = 0; i < playerHand.length; i++) {
    playerHandTotal += playerHand[i].value;
    // document.getElementById('player-card-source').src = playerHand[i].source
    playerHandSource.push(playerHand[i].source)

    let arrayImagesElement = document.getElementById("player-card");
    let img = document.createElement('img');
    img.src = playerHand[i].source
    img.width = "100";
    img.style.margin = "5px";
    // img.style.marginRight = "15px";
    arrayImagesElement.appendChild(img)
  }
  for (let i = 0; i < dealerHand.length; i++) {
    dealerHandTotal += dealerHand[i].value;
    // document.getElementById('dealer-card-source').src = dealerHand[i].source
    dealerHandSource.push(dealerHand[i].source)

    let arrayImagesElement = document.getElementById("dealer-card");
    let img = document.createElement('img');
    img.src = dealerHand[i].source
    img.width = "100";
    img.style.margin = "5px";
    // img.style.margin = "15px";
    arrayImagesElement.appendChild(img)
  }
  // document.getElementById("dealer-hand").innerHTML = dealerHand
  document.getElementById("dealer-hand-value").innerHTML = dealerHandTotal
  // document.getElementById("player-hand").innerHTML = playerHand
  document.getElementById("player-hand-value").innerHTML = playerHandTotal
  return playerHand, dealerHand, playerHandTotal, dealerHandTotal, betAmount, bankAmount, deck;
}

// create a function hit
function hit () {
    if (playerHandTotal > 21) {
      document.getElementById("player-bust").innerHTML = "You Lose!"
      return;
    }
  let nextCardP = deck[Math.floor(deck.length * Math.random())]
  playerHand.push(nextCardP.value)
  playerHandTotal += nextCardP.value

  // playerHand.push(deck[Math.floor(deck.length * Math.random())])
  // let pIndexLast = playerHand[0].index
  // deck.splice(pIndexLast, 1)
  // runningCount(playerHand[0].value)
  // console.log(playerHand, '<----player hand')
  let pIndexLast = playerHand[playerHand.length - 1]
  runningCount(pIndexLast)
  deck.splice(pIndexLast, 1)


  let arrayImagesElement = document.getElementById("player-card");
  let img = document.createElement('img');
  img.src = nextCardP.source
  img.width = "100";
  img.style.margin = "5px";
  arrayImagesElement.appendChild(img)
  
  // document.getElementById("player-hand").innerHTML = playerHand
  document.getElementById("player-hand-value").innerHTML = playerHandTotal
    if (playerHandTotal > 21) {
      document.getElementById("player-bust").innerHTML = "You Lose!"
      return;
    }
  return playerHandTotal, playerHand
}
// create a function stand
function stand (dealerHandTotal, playerHandTotal) {
  setTimeout(function () {
    if (dealerHandTotal >= 17 && dealerHandTotal <= 21) {
      if (dealerHandTotal > playerHandTotal) {
        document.getElementById("player-bust").innerHTML = "You Lose!"
        // console.log(`player loses with ${playerHandTotal} and dealer has ${dealerHandTotal}`)
        return;
      }
      else if (dealerHandTotal === playerHandTotal) {
        document.getElementById("player-bust").innerHTML = "You Push!"
        bankAmount += 1 * betAmount;
        document.getElementById("bank-amount").innerHTML = bankAmount;
        return;
      }
      else {
        document.getElementById("player-bust").innerHTML = "You Win!"
        console.log(betAmount, 'betAmount')
        bankAmount += 2 * betAmount
        document.getElementById("bank-amount").innerHTML = bankAmount;
        console.log(`player wins with ${playerHandTotal} and dealer has ${dealerHandTotal}`)
        return;
      }
    }
    if (dealerHandTotal > 21) {
      document.getElementById("player-bust").innerHTML = "You Win!"
      console.log(betAmount, 'betAmount')
      bankAmount += 2 * betAmount
      document.getElementById("bank-amount").innerHTML = "Bank: $" + bankAmount;
      console.log(`player wins with ${playerHandTotal} and dealer has ${dealerHandTotal}`)
      return;
    }
    else {
      let nextCardD = deck[Math.floor(deck.length * Math.random())]
      dealerHand.push(nextCardD.value)
      dealerHandTotal += nextCardD.value

      let arrayImagesElement = document.getElementById("dealer-card");
      let img = document.createElement('img');
      img.src = nextCardD.source
      img.width = "100";
      img.style.margin = "5px";
      arrayImagesElement.appendChild(img)

      console.log(dealerHand, '<----dealerHand')
      let dIndexLast = dealerHand[dealerHand.length - 1]
      runningCount(dIndexLast)
      deck.splice(dIndexLast, 1)

      // document.getElementById("dealer-hand").innerHTML = dealerHand
      document.getElementById("dealer-hand-value").innerHTML = dealerHandTotal
      if (dealerHandTotal >= 17 && dealerHandTotal <= 21) {
        if (dealerHandTotal > playerHandTotal) {
          document.getElementById("player-bust").innerHTML = "You Lose!"
          console.log(`player loses with ${playerHandTotal} and dealer has ${dealerHandTotal}`)
          return;
        }
        else if (dealerHandTotal === playerHandTotal) {
          document.getElementById("player-bust").innerHTML = "You Push!"
          bankAmount += 1 * betAmount;
          document.getElementById("bank-amount").innerHTML = "Bank: $" + bankAmount;
          return;
        }
        else {
          document.getElementById("player-bust").innerHTML = "You Win!"
          console.log(betAmount, 'betAmount')
          bankAmount += 2 * betAmount
          document.getElementById("bank-amount").innerHTML = "Bank: $" + bankAmount;
          console.log(`player wins with ${playerHandTotal} and dealer has ${dealerHandTotal}`)
          return;
        }
      }
      if (dealerHandTotal > 21) {
        document.getElementById("player-bust").innerHTML = "You Win!"
        console.log(betAmount, 'betAmount')
        bankAmount += 2 * betAmount
        document.getElementById("bank-amount").innerHTML = "Bank: $" + bankAmount;
        console.log(`player wins with ${playerHandTotal} and dealer has ${dealerHandTotal}`)
        return;
      }
      return stand(dealerHandTotal, playerHandTotal)
    }
  } ,500)
}

// create a chips added function

function chips (value) {
  // return  console.log('chips invoked')
  betAmount = document.getElementById("bet-amount").value
  console.log(betAmount)
  betAmount = betAmount * 1 + value;
  document.getElementById("bet-amount").value = betAmount;
  return betAmount;
}
let trueCount = 0;
function runningCount (cardVal) {
  if (cardVal >= 1 && cardVal <= 6) {
    trueCount += 1
  }
  else if (cardVal >= 7 && cardVal <= 9) {
    trueCount = trueCount
  }
  else if (cardVal >= 10) {
    trueCount -= 1
  }
  if (trueCount > 0) {
    document.getElementById("count").innerHTML = "Running Count: +" + trueCount;
  }
  else {
    document.getElementById("count").innerHTML = "Running Count: " + trueCount;
  }
  // console.log(trueCount, 'trueCount in function')
  return trueCount;
}







var simWins = 0;
var simLosses = 0;
var simTies = 0;
var simPercent = 0;

function hundredTimesStand (dealerHandTotal, playerHandTotal) {
  let simGames = document.getElementById("sim-input").value;
  simWins = simLosses = simTies = simPercent = 0
  document.getElementById("simGames").innerHTML = simGames;
  document.getElementById("simWins").innerHTML = simWins;
  document.getElementById("simLosses").innerHTML = simLosses;
  document.getElementById("simTies").innerHTML = simTies;
  document.getElementById("simPercent").innerHTML = simPercent;
  for (let i = 0; i < simGames; i++) {
    standSim(dealerHandTotal, playerHandTotal)
  }
  console.log(simWins, simLosses, simTies)
  simPercent = simWins / simGames * 100
  simPercent = simPercent.toFixed(2)
  document.getElementById("simGames").innerHTML = simGames;
  document.getElementById("simWins").innerHTML = simWins;
  document.getElementById("simLosses").innerHTML = simLosses;
  document.getElementById("simTies").innerHTML = simTies;
  document.getElementById("simPercent").innerHTML = simPercent;
}

function hundredTimesHit (dealerHandTotal, playerHandTotal) {
  let simGames = document.getElementById("sim-input").value;
  simWins = simLosses = simTies = simPercent = 0
  document.getElementById("simGames").innerHTML = simGames;
  document.getElementById("simWins").innerHTML = simWins;
  document.getElementById("simLosses").innerHTML = simLosses;
  document.getElementById("simTies").innerHTML = simTies;
  document.getElementById("simPercent").innerHTML = simPercent;
  for (let i = 0; i < simGames; i++) {
    hitSim(dealerHandTotal, playerHandTotal)
    // console.log(newPlayerHandTotal, 'player hand before stand')
    standSim(dealerHandTotal, hitSim(dealerHandTotal, playerHandTotal))
  }
  console.log(simWins, simLosses, simTies)
  simPercent = simWins / simGames * 100
  simPercent = simPercent.toFixed(2)
  document.getElementById("simGames").innerHTML = simGames;
  document.getElementById("simWins").innerHTML = simWins;
  document.getElementById("simLosses").innerHTML = simLosses;
  document.getElementById("simTies").innerHTML = simTies;
  document.getElementById("simPercent").innerHTML = simPercent;
}


function hitSim (dealerHandTotal, playerHandTotal) {
  let nextCardP = deck[Math.floor(deck.length * Math.random())]
  playerHandTotal += nextCardP.value
  let newPlayerHandTotal = playerHandTotal
  console.log(newPlayerHandTotal, 'player hand at hitSim')
  return dealerHandTotal, playerHandTotal;

}


function standSim (dealerHandTotal, playerHandTotal) {
  // console.log(simWins, simLosses, 'simWins and losses')
  if (playerHandTotal > 21) {
    let table = document.getElementById("simulation-table")
      let row = table.insertRow(1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      cell1.innerHTML = playerHandTotal;
      cell2.innerHTML = dealerHandTotal;
      cell3.innerHTML = "Loss"
      console.log(simLosses, 'simLosses')
      simLosses++
      document.getElementById("simGames").innerHTML = simGames;
      document.getElementById("simWins").innerHTML = simWins;
      document.getElementById("simLosses").innerHTML = simLosses;
      document.getElementById("simTies").innerHTML = simTies;
      document.getElementById("simPercent").innerHTML = simPercent;
      // console.log(`player loses with ${playerHandTotal} and dealer has ${dealerHandTotal}`)
      return;
  }

  if (dealerHandTotal >= 17 && dealerHandTotal <= 21) {
    if (dealerHandTotal > playerHandTotal) {
      let table = document.getElementById("simulation-table")
      let row = table.insertRow(1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      cell1.innerHTML = playerHandTotal;
      cell2.innerHTML = dealerHandTotal;
      cell3.innerHTML = "Loss"
      console.log(simLosses, 'simLosses')
      simLosses++
      document.getElementById("simGames").innerHTML = simGames;
      document.getElementById("simWins").innerHTML = simWins;
      document.getElementById("simLosses").innerHTML = simLosses;
      document.getElementById("simTies").innerHTML = simTies;
      document.getElementById("simPercent").innerHTML = simPercent;
      // console.log(`player loses with ${playerHandTotal} and dealer has ${dealerHandTotal}`)
      return;
    }
    else if (dealerHandTotal === playerHandTotal) {
      let table = document.getElementById("simulation-table")
      let row = table.insertRow(1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      cell1.innerHTML = playerHandTotal;
      cell2.innerHTML = dealerHandTotal;
      cell3.innerHTML = "Tie"
      simTies++
      document.getElementById("simGames").innerHTML = simGames;
      document.getElementById("simWins").innerHTML = simWins;
      document.getElementById("simLosses").innerHTML = simLosses;
      document.getElementById("simTies").innerHTML = simTies;
      document.getElementById("simPercent").innerHTML = simPercent;
      return;
    }
    else {
      let table = document.getElementById("simulation-table")
      let row = table.insertRow(1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      cell1.innerHTML = playerHandTotal;
      cell2.innerHTML = dealerHandTotal;
      cell3.innerHTML = "Win"
      simWins++;
      document.getElementById("simGames").innerHTML = simGames;
      document.getElementById("simWins").innerHTML = simWins;
      document.getElementById("simLosses").innerHTML = simLosses;
      document.getElementById("simTies").innerHTML = simTies;
      document.getElementById("simPercent").innerHTML = simPercent;
      return;
    }
  }
  if (dealerHandTotal > 21) {
    let table = document.getElementById("simulation-table")
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = playerHandTotal;
    cell2.innerHTML = dealerHandTotal;
    cell3.innerHTML = "Win"
    simWins++;
    document.getElementById("simGames").innerHTML = simGames;
    document.getElementById("simWins").innerHTML = simWins;
    document.getElementById("simLosses").innerHTML = simLosses;
    document.getElementById("simTies").innerHTML = simTies;
    document.getElementById("simPercent").innerHTML = simPercent;
    return;
  }
  
  let nextCardD = deck[Math.floor(deck.length * Math.random())]
  dealerHand.push(nextCardD.value)
  dealerHandTotal += nextCardD.value
  
  // return standSim(dealerHandTotal, playerHandTotal)
  if (playerHandTotal > 21) {
    let table = document.getElementById("simulation-table")
      let row = table.insertRow(1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      cell1.innerHTML = playerHandTotal;
      cell2.innerHTML = dealerHandTotal;
      cell3.innerHTML = "Loss"
      console.log(simLosses, 'simLosses')
      simLosses++
      document.getElementById("simGames").innerHTML = simGames;
      document.getElementById("simWins").innerHTML = simWins;
      document.getElementById("simLosses").innerHTML = simLosses;
      document.getElementById("simTies").innerHTML = simTies;
      document.getElementById("simPercent").innerHTML = simPercent;
      // console.log(`player loses with ${playerHandTotal} and dealer has ${dealerHandTotal}`)
      return;
  }
  if (dealerHandTotal >= 17 && dealerHandTotal <= 21) {
    if (dealerHandTotal > playerHandTotal) {
      let table = document.getElementById("simulation-table")
      let row = table.insertRow(1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      cell1.innerHTML = playerHandTotal;
      cell2.innerHTML = dealerHandTotal;
      cell3.innerHTML = "Loss"
      simLosses++;
      document.getElementById("simGames").innerHTML = simGames;
      document.getElementById("simWins").innerHTML = simWins;
      document.getElementById("simLosses").innerHTML = simLosses;
      document.getElementById("simTies").innerHTML = simTies;
      document.getElementById("simPercent").innerHTML = simPercent;
      // console.log(`player loses with ${playerHandTotal} and dealer has ${dealerHandTotal}`)
      return;
    }
    else if (dealerHandTotal === playerHandTotal) {
      let table = document.getElementById("simulation-table")
      let row = table.insertRow(1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      cell1.innerHTML = playerHandTotal;
      cell2.innerHTML = dealerHandTotal;
      cell3.innerHTML = "Tie"
      simTies++;
      document.getElementById("simGames").innerHTML = simGames;
      document.getElementById("simWins").innerHTML = simWins;
      document.getElementById("simLosses").innerHTML = simLosses;
      document.getElementById("simTies").innerHTML = simTies;
      document.getElementById("simPercent").innerHTML = simPercent;
      return;
    }
    else {
      let table = document.getElementById("simulation-table")
      let row = table.insertRow(1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      cell1.innerHTML = playerHandTotal;
      cell2.innerHTML = dealerHandTotal;
      cell3.innerHTML = "Win"
      simWins++
      document.getElementById("simGames").innerHTML = simGames;
      document.getElementById("simWins").innerHTML = simWins;
      document.getElementById("simLosses").innerHTML = simLosses;
      document.getElementById("simTies").innerHTML = simTies;
      document.getElementById("simPercent").innerHTML = simPercent;
      return;
    }
  }
  if (dealerHandTotal > 21) {
    let table = document.getElementById("simulation-table")
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = playerHandTotal;
    cell2.innerHTML = dealerHandTotal;
    cell3.innerHTML = "Win"
    simWins++
    document.getElementById("simGames").innerHTML = simGames;
    document.getElementById("simWins").innerHTML = simWins;
    document.getElementById("simLosses").innerHTML = simLosses;
    document.getElementById("simTies").innerHTML = simTies;
    document.getElementById("simPercent").innerHTML = simPercent;
    return;
  }
  else {
    return standSim(dealerHandTotal, playerHandTotal)
  }

}

