console.log("Up and running!");




//alert('Hello, friends.');
//Arrays
const cards = ["queen","queen","king","king"];
let cardsInPlay = [];

function checkForMatch(){
  //if condition
    if(cardsInPlay[0]===cardsInPlay[1]){
      alert('you find a Match !');
    }else{
      alert('Sorry, tray again ..')
    }
}//function

//*******************************
function flipCard(cardId){
  //add to array .. push
  cardsInPlay.push(cards[cardId]);
  //print
  console.log("User flipped " + cards[cardId]);
  if(cardsInPlay.length === 2){
     checkForMatch();
  }
}//function

flipCard(0);
flipCard(2);
