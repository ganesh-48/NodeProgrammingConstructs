/**Roll the dice and a number bteween 1 to 6.
 * Dice roll repeate and find result.
 * stored result in dictonary.
 * Dice roll repeate till any number has reached 10 times.
 * Find number reaced maximum time and minimum time.
 */

let diceRoll1to6 = new Map([
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [6, 0]
]);

while (Array.from(diceRoll1to6.values()).includes(10) != true) {
    let diceRoll = Math.floor(Math.random() * 6 + 1);
    diceRoll1to6.set(diceRoll, diceRoll1to6.get(diceRoll) + 1);
}
console.log(diceRoll1to6);
for (let [key, value] of diceRoll1to6) {
    if (value == Math.max(...diceRoll1to6.values()))
        console.log("Number reached maximum times is: " + key + "-" + value);
    if (value == Math.min(...diceRoll1to6.values()))
        console.log("Number reached minimum times is: " + key + "-" + value);
}