const COUNT = 5;
let maxNum = 0;
let minNum = 0;
let index = 1

while(index <= COUNT){
    let num = Math.floor( 100 + Math.random()  * 900 );
if (index == 1 ){
    maxNum = num;
    minNum = num;
}
if (num < minNum ){
    minNum = num;
}
else if (num > maxNum){
    maxNum = num;
}
index++;
}
console.log("Minimum Number: "+minNum+"\nMaximum Number: "+maxNum);