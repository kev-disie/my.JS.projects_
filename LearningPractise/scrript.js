      let firstCard = 6;
let secondCard = 6;
let sum = firstCard + secondCard 
console.log(sum);
sumEL=document.getElementById("sum-el")

let hasBlackjack = false;
let messeage="";


let cardsEL=document.getElementById("cards-el")
function renderGame(){
  if (sum < 21) {
  messeage="Do you want to draw a new card?";
} else if (sum == 21) {
  messeage="You've got Black Jack!";
  hasBlackjack = true;
} else { 
  messeage="You're out of the game!"  
  
}
// let cardsEL=document.getElementById("cards-el")
cardsEL.textContent="Cards:"+''+firstCard+','+secondCard
let messeageEl=document.getElementById("messeage-el")
sumEL.textContent="sum: "+''+sum
 messeageEl.textContent=messeage

console.log(messeage)

}

function startGame(){
  renderGame()
}


let newCardi=9
function newCard(){

  sum+=newCardi
  renderGame()
  // sum = firstCard + secondCard + newCardi; 
  // sumEL.textContent="sum: "+''+sum
  // console.log("Drawing new card from the deck!!!")
  cardsEL.textContent="Cards:"+''+firstCard+','+secondCard+','+newCardi
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
// console.log(3<=2)//falsef
