/**TODO:
 * Create randomization function
 * -sub-task: modify for an algorithm
 * Create add-to-page functions
 *
 *
 */

function RandomCard() {
  let cardNum = RandomNumber(1, 3);
  switch cardNum{
    case 1:
      return GrassCard;

    case
  }
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

module.exports = { RandomCard, AddToPage, RandomNumber };