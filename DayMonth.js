let read = require('read-sync');
const startDate= 20032020;
const endDate = 200602020;
let date = read.question("Enter a date  mmddYYYY\n");
if (startDate < date && endDate > date)
    console.log("Entered date is right");
else
    console.log("Entered date is wrong");