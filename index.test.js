/**TODO
 * Testing for base class
 * Testing for sub-classes
 * Testing for Randmization function
 * Testing for add-to-page function
 *
 *
 */

import { BaseCard, ForestCard, StoneCard, GrassCard } from "./CardClass.js";
import { RandomCard, AddToPage } from "./index.js";
//jest.mock(`./CardClass`);

//Card testing

it('verify creation of BaseCard', () => {
  const testCard = new BaseCard();
  expect(testCard).toBeInstanceOf(BaseCard);
})



it('verify creation of ForrestCard', () => {
  let testCard = new ForestCard;
  expect(testCard).toBeInstanceOf(BaseCard);
})

it('verify creation of StoneCard', () => {
  let testCard = new StoneCard;
  expect(testCard).toBeInstanceOf(BaseCard);
})

it('verify creation of GrassCard', () => {
  let testCard = new GrassCard;
  expect(testCard).toBeInstanceOf(BaseCard);
})