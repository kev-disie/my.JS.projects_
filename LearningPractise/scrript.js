let firstCard = 7;
let secondCard = 14;
let sum = firstCard + secondCard;
console.log(sum);
let hasBlackjack = false;

if (sum < 21) {
  console.log("Do you want to draw a new card?🥲");
} else if (sum == 21) {
  console.log("Wohooo!You've got Black Jack!🥳 ");
  hasBlackjack = true;
} else {
  console.log("You're out of the game!🤯");
}

let age = 19;
if (age >= 21) {
  console.log("Enter the club!!");
} else {
  console.log("You are a minor,Go Screw yourself !!");
}

let num = 100;
if (num < 100) {
  console.log("Not eligible dumb-ass");
} else if (num === 100) {
  //   Tripple equal sign is strict than double equal sign i.e when passing the same value as a string "100
  //   the code still works

  console.log("Here is your Birthday card Old stuff!!");
} else {
  console.log("Not eligible,You've lready goten your card!!");
}
