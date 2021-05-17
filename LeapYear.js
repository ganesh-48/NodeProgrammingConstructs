/*@Description- Check the year is leap year or not*/

function leapYear(year) {

    if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year+ "This is leap year");
    } else {
        console.log(year+ "This is not a leap year");
    }
}
const year = prompt ("Enter a Year: ");
leapYear(year);