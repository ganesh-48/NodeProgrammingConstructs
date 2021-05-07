/*@Description- Read a number and show the weekday */

let read = require('read-sync');
function weekday(day) {
    if (day == 0)
        console.log("Sunday");
    else if (day == 1)
        console.log("Monday");
    else if (day == 2)
        console.log("Tuesday");        
    else if (day == 3)
        console.log("Wednesday");
    else if (day == 4)
        console.log("Thursday");
    else if (day == 5)
        console.log("Friday");
    else if (day == 6)
        console.log("Saturday");
    else 
        console.log("your invalid choice.");
    }
let day = read.question("Enter the number between 1-7\n: ");
weekday(day);