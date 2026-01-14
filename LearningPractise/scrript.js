let firstCard = 7;
let secondCard = 14;
let sum = firstCard + secondCard;
console.log(sum);
let hasBlackjack = false;
let messeage="";
function startGame(){
  if (sum < 21) {
  messeage="Do you want to draw a new card?🥲";
} else if (sum == 21) {
  messeage="Wohooo!You've got Black Jack!🥳 ";
  hasBlackjack = true;
} else {
  messeage="You're out of the game!🤯"  
  
}
let messeageEl=document.getElementById("messeage-el")
 messeageEl.textContent=messeage

// console.log(messeage)

}

// document.getElementById("messeage-el").textContent=messeage

 


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
// console.log(4===3)//false
// console.log(12>12)//false
// console.log(3<6)//true
// console.log(3>=3)//false
// console.log(11<=11)//false
// console.log(3<=2)//false


