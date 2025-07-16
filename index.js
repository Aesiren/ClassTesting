/**TODO:
 * Create randomization function
 * -sub-task: modify for an algorithm
 * Create add-to-page functions
 *
 *
 */
import { ForrestCard, StoneCard, GrassCard } from "./CardClass.js";


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

  activeDeck.addCard(obj);

  return obj;

}


function AddToPage() {

}

function RandomNumber(min, max) {
  if (typeof min == "number" && typeof max == "number") {
    let value = Math.floor(Math.random() * (max - min) + min);
    return value;
  }
  else return -1;
}



module.exports = { RandomCard, AddToPage, RandomNumber, CreateNewCard, Deck };