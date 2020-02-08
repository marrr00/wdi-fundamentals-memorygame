console.log("Up and running!");




//alert('Hello, friends.');
//Arrays
const cards = ["queen","queen","king","king"];
let cardsInPlay = [];

// Variables
let cardOne = cards[0];
let cardTwo = cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

//Print
console.log("User flipped1 " + cardsInPlay[0]);
console.log("user flipped 2" + cardsInPlay[1]);

if(cardsInPlay.length === 2){
  if(cardsInPlay[0]===cardsInPlay[1]){
    alert('you find a Match !');
  }else{
    alert('Sorry, tray again ..')
  }
}
