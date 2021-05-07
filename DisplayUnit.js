/*@Description- Read a number and display a unit */

let read = require('read-sync');
function DisplayUnit(unit){
    if (unit == 1)
        console.log("Units");
    else if (unit == 10)
        console.log("Tens");
    else if (unit == 100)
        console.log("Hundreds");        
    else if (unit == 1000)
        console.log("Thousands");
    else 
        console.log("You Enterd Invalid unit number.");
    }
let unit = read.question("Enter the number unit\n");
DisplayUnit(unit);