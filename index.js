import { BaseCard, GrassCard, ForrestCard, StoneCard } from "./CardClass.js";
/**TODO:
 * Create randomization function
 * -sub-task: modify for an algorithm
 * Create add-to-page functions
 *
 *
 */


window.onload = function () {
  NewGame();
  console.log("Page Loaded");

};

class Deck {
  constructor() {
    this.cards = [];
  }

  addCard(obj) {
    this.cards.push(obj);
  }
}

var indexTracker = 0;
var activeDeck = new Deck;

// NewGame();
// console.log(activeDeck);



function NewGame() {
  CreateDeck();
  AddToPage();
  console.log(activeDeck);
}


function RandomCard() {
  let cardNum = RandomNumber(1, 3);
  switch (cardNum) {
    case 1:
      return new GrassCard;
      break;
    case 2:
      return new StoneCard;
      break;
    case 3:
      return new ForrestCard;
      break;
  }

}

function CreateNewCard() {
  let obj = {
    index: indexTracker,
    card: RandomCard(),
  }

  indexTracker += 1;

  //activeDeck.addCard(obj);

  return obj;

}

function CreateDeck() {
  for (let x = 0; x < 17; x++) {
    activeDeck.addCard(CreateNewCard());
  }

}

function AddToPage() {
  console.log("starting add-to-page", activeDeck.cards[0].card);
  //let pageElements = document.getElementsByClassName("cardholder");
  for (let x = 0; x < activeDeck.cards.length; x++) {
    document.getElementById(x).innerHTML = activeDeck.cards[x].card.picLink;
    console.log(activeDeck.cards[x].setResourceType)
  }


}

function RandomNumber(min, max) {
  if (typeof min == "number" && typeof max == "number") {
    let value = Math.floor(Math.random() * (max - min) + min);
    return value;
  }
  else return -1;
}



//module.exports = { RandomCard, AddToPage, RandomNumber, CreateNewCard, Deck };
export { RandomCard, AddToPage, RandomNumber, CreateNewCard, Deck }