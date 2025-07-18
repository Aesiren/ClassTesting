/**TODO
 * Define base card class
 * Define specific card classes
 */

//Base card needs to setup configuration for all cards
//Contains initial definitions for basic values
//Cards should contain a randomizer to determine starting resource values
class BaseCard {
  #resourceValue;
  #resourceType;
  constructor() {
    this.#resourceType = "Base";

  }
  static InitialResourceValue(min, max) {
    if (typeof min == "number" && typeof max == "number") {
      let value = Math.floor(Math.random() * (max - min) + min);
      return value;
    }
    else return -1;

  }

  // get resourceValue() {
  //   return this.resourceValue
  // }
  // set resourceValue(max) {
  //   this.resourceValue = BaseCard.InitialResourceValue(1, max)
  // }

  get getResourceType() {
    return this.#resourceType;
  }

  set setResourceType(type) {
    this.#resourceType = type;
  }

  get getValue() {
    return this.#resourceValue;
  }

  set setValue(value) {
    this.#resourceValue = value;
  }

}

class GrassCard extends BaseCard {
  #resourceType;
  #resourceValue
  constructor() {
    super();
    this.setResourceType = "Grass";
    this.setValue = BaseCard.InitialResourceValue(1, 5);
    this.picLink = "<img src='./pics/grass.jpg' height='200px' width='200px'>"
  }
}

class ForrestCard extends BaseCard {
  #resourceType;
  #resourceValue;
  constructor() {
    super();
    this.setResourceType = 'Forrest';
    this.setValue = BaseCard.InitialResourceValue(10, 20);
    this.picLink = "<img src='./pics/trees.jpg' height='200px' width='200px'>"
  }
}

class StoneCard extends BaseCard {
  #resourceType;
  #resourceValue;
  constructor() {
    super();
    this.setResourceType = "Stone";
    this.setValue = BaseCard.InitialResourceValue(10, 20);
    this.picLink = "<img src='./pics/stone.jpg' height='200px' width='200px'>"
  }
}

//module.exports = { BaseCard, GrassCard, ForrestCard, StoneCard };
export { BaseCard, GrassCard, ForrestCard, StoneCard };