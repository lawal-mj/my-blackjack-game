let firstCard;
let secondCard;
let cards = [firstCard, secondCard]
let sum;

// let x = Math.floor((Math.random() * 10) + 1)


// Grabbing the display lines to edit later on
let statusLine = document.getElementById("status-line");
let cardLine = document.getElementById("card-line");
let scoreLine = document.getElementById("score-line");

function startGame () {
    // console.log("The game has started")
    firstCard = Math.floor((Math.random() * 10) + 1);
    secondCard = Math.floor((Math.random() * 10) + 1);
    sum = firstCard + secondCard

    // editing the details on the page
    cards = [firstCard, secondCard]
    // console.log(cards)
    renderGame()

    changeStatus()
}


function newCard() {
    if (sum === 21 || sum > 21) {
        null;
    }else {
        let card = Math.floor((Math.random() * 10) + 1);
        cards.push(card)
        console.log(cards)
    
        //defining updaye sum here because "card" only exists here
        function updateScore() {
            sum = sum + card
        }
        updateScore()
        changeStatus()
        renderGame()

    }


}


function changeStatus() {
    if (sum === 21) {
        statusLine.textContent = "STATUS: Yay, Blackjack..wanna play a new game?" ;       
    }else if ( sum < 21) {
        statusLine.textContent = "STATUS: Want another card?";
    }else {
        statusLine.textContent = "STATUS: Oops, you lost..wanna play a new game?";    }
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

