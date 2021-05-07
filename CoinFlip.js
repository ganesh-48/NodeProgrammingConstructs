/*@Description- Coin flip and get a head or tail */
let random = Math.floor(Math.random() * 10) % 2;
if (random == 0) {
        console.log("Head");
} else {
    console.log("Tail");
}