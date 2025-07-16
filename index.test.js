/**TODO
 * Testing for base class
 * Testing for sub-classes
 * Testing for Randmization function
 * Testing for add-to-page function
 *
 *
 */

import { BaseCard, ForrestCard, StoneCard, GrassCard } from "./CardClass.js";
import { RandomCard, AddToPage, RandomNumber } from "./index.js";
//jest.mock(`./CardClass`);

//Card testing

beforeEach(() => {
  let testBaseCard;
  let testStoneCard;
  let testGrassCard;
  let testForrestCard;
  let randomCard;

})

describe('BaseCard Class Tests', () => {
  it('verify creation of BaseCard', () => {
    testBaseCard = new BaseCard();
    expect(testBaseCard).toBeInstanceOf(BaseCard);
  })
  it('verify BaseCArd static function works', () => {
    let testMin = 1;
    let testMax = 5;
    let testA = 'a';
    expect(typeof BaseCard.InitialResourceValue(testMin, testMax)).toBe("number");
    expect(BaseCard.InitialResourceValue(testMin, testMax)).toBeGreaterThan(0);
    expect(BaseCard.InitialResourceValue(testMin, testMax)).toBeLessThan(6);
    expect(BaseCard.InitialResourceValue(testMin, testA)).toBe(-1);
  })
  it('class variables exist', () => {
    testBaseCard = new BaseCard();
    expect(testBaseCard.getResourceType).toBeDefined();
    expect(testBaseCard.getResourceType).toBe('Base');
  })

})


describe('Sub-Class Tests', () => {
  it('verify creation of ForrestCard', () => {
    testForrestCard = new ForrestCard;
    expect(testForrestCard).toBeInstanceOf(ForrestCard);

  })
  it('Grass variables set correctly', () => {
    testForrestCard = new ForrestCard;
    expect(testForrestCard.getResourceType).toBe('Forrest');
    expect(testForrestCard.getValue).toBeGreaterThan(10);
    expect(testForrestCard.getValue).toBeLessThan(20);
  })

  it('verify creation of StoneCard', () => {
    testStoneCard = new StoneCard;
    expect(testStoneCard).toBeInstanceOf(StoneCard);

  })

  it('Stone variables set correctly', () => {
    testStoneCard = new StoneCard;
    expect(testStoneCard.getResourceType).toBe('Stone');
    expect(testStoneCard.getValue).toBeGreaterThan(10);
    expect(testStoneCard.getValue).toBeLessThan(20);
  })

  it('verify creation of GrassCard', () => {
    testGrassCard = new GrassCard;
    expect(testGrassCard).toBeInstanceOf(GrassCard);
  })

  it('Grass variables set correctly', () => {
    testGrassCard = new GrassCard;
    expect(testGrassCard.getResourceType).toBe('Grass');
    expect(testGrassCard.getValue).toBeGreaterThan(1);
    expect(testGrassCard.getValue).toBeLessThan(5);
  })
})

describe('Testing Page Functionality', () => {
  it('verify get random number', () => {
    let testMin = 1;
    let testMax = 10;
    let testA = 'a';
    expect(typeof RandomNumber(testMin, testMax)).toBe("number");
    expect(RandomNumber(testMin, testMax)).toBeGreaterThan(0);
    expect(RandomNumber(testMin, testMax)).toBeLessThan(10);
    expect(RandomNumber(testMin, testA)).toBe(-1);
  })
  it('verify Random Card generator', () => {
    let testMin = 1;
    let testMax = 5;
    let testA = 'a';
    let testCard = new RandomCard();
    expect(testCard).toBeInstanceOf(BaseCard);
  })
})


