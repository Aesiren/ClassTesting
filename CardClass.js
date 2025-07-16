/**TODO
 * Define base card class
 * Define specific card classes
 */

export default class BaseCard {
  constructor() {

  }
}

class GrassCard extends BaseCard {
  constructor() {
    super();
  }
}

class ForestCard extends BaseCard {
  constructor() {
    super();
  }
}

class StoneCard extends BaseCard {
  constructor() {
    super();
  }
}

module.exports = { BaseCard, GrassCard, ForestCard, StoneCard };