//Check JavaScript code work by print in the console 'Up and running!'
console.log("Up and running!");
//Create Array to Store Cards Played
let cardsInPlay = [];
//Create Array to Store 4 Cards info as Object
const cards = [
  {
    rank:'queen',
    suit:'hearts',
    cardImage:'images/queen-of-hearts.png'
  },
  {
    rank: "queen"  ,
    suit: "diamonds"  ,
    cardImage: "images/queen-of-diamonds.png"

  },
  {
    rank: "king"  ,
    suit:  "hearts" ,
    cardImage:  "images/king-of-hearts.png"
  },
  {
    rank:"king"   ,
    suit:"diamonds"   ,
    cardImage: "images/king-of-diamonds.png"

  }
];

//******* function numberOne ********
//# function Check the Two Cards Played are Matched or Not Matched
function checkForMatch(){
  //if condition
    if(cardsInPlay[0]===cardsInPlay[1]){
      alert('you find a Match !');
    }else{
      alert('Sorry, tray again ..')
    }
}//function

//******** function numberTwo *******
//# function display the front image  of the played card
function flipCard(){

  //varible store the played card id (clicked)
  let cardId = this.getAttribute('data-id');

  //array store the played card rank
  cardsInPlay.push(cards[cardId].rank);

  //display the image of the played card
  this.setAttribute('src',cards[cardId].cardImage);
  
  //Checking Two Card are Played
  if(cardsInPlay.length === 2){
     checkForMatch();
  }
}//function

//********* function numberThree ********
//# function create new game
function createBoard(){
  for (let i = 0;i < cards.length;i++){

    // varible create element cards
    let cardElement = document.createElement('img');

    //set all 4 cards in thier back
    cardElement.setAttribute('src', 'images/back.png' );

    // set attrbuite 'data-id' to track each card by inedx i
    cardElement.setAttribute('data-id', i);

    // add click EventListener to run flipCard function
    cardElement.addEventListener('click',flipCard);

    // append child
    document.getElementById('game-board').appendChild(cardElement);

  }//loop
}//function

//####### Calling function & Start the Game #######
createBoard();
