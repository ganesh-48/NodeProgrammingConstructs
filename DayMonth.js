let readline = require('readline-sync');
const startDate= 20/03/2020;
const endDate = 20/06/2020;
let date = readline.question("Enter a date  mm/dd/YYYY\n");
if (startDate < date && endDate > date)
    console.log("Entered date is right");
else
    console.log("Entered date is wrong");