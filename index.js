let firstCard;
let secondCard;
let cards = [firstCard, secondCard]
let sum;


// Grabbing the display lines to edit later on
let statusLine = document.getElementById("status-line");
let cardLine = document.getElementById("card-line");
let scoreLine = document.getElementById("score-line");

function startGame () {
    // console.log("The game has started")
    firstCard = Math.floor(Math.random() * 9);
    secondCard = Math.floor(Math.random() * 9);
    sum = firstCard + secondCard

    // editing the details on the page
    cards = [firstCard, secondCard]
    // console.log(cards)
    renderGame()

    checkScore()
}


function newCard() {
    // console.log("connected")
    let card = Math.floor(Math.random() * 9);
    cards.push(card)
    console.log(cards)

    //defining updaye sum here because "card" only exists here
    function updateScore() {
        sum = sum + card
    }
    updateScore()
    renderGame()

}


function checkScore() {
    if (sum === 21) {
        statusLine.textContent = "STATUS: Yay, Blackjack" ;       
    }else if ( sum < 21) {
        statusLine.textContent = "STATUS: Want another card?";
    }else {
        statusLine.textContent = "STATUS: Oops, you lost";    }
}



function renderGame() {
    let word = ''
    for (let i = 0; i< cards.length; i++) {
        word += cards[i] + ", "
    }
    console.log(word)
    scoreLine.textContent = "SCORE: " + sum
    cardLine.textContent = `CURRENT CARDS: ${word}`
    
}

