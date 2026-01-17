//using Arrays to initialize the cards
let cards=[6,6]

// let firstCard = 6;
// let secondCard = 6;
let sum = cards[0] + cards[1] //defining the sum of the first card in array
console.log(sum);             //validating the output of the sum to the console not necessary but essential
let sumEL=document.getElementById("sum-el")//Taking the id sum-el from the DOM  to diplsy the actual sum

//boolean
let hasBlackjack = false;//
let messeage="";//initilaizing an empty string to be used later on in the function below

//The card display function displays all the cards when invoked
let cardsEL=document.getElementById("cards-el")//Taking thr cards-el id from the DOM to display the cards actual value

function displayCard(){
  // for(i=0;i<cards.length;i++){
  //   cardsEL.textContent+= cards[i]+","
  // }
}

function renderGame(){
  if (sum < 21) {
  messeage="Do you want to draw a new card?";      /*renderGame() function: checks if the sum of the card indexed 0 and 1 ===21 
                                                    if the card drawn !=21 then                                                                            
                                                                                                                              */
} else if (sum == 21) {
  messeage="You've got Black Jack!";                
  hasBlackjack = true;
} else { 
  messeage="You're out of the game!"  
  
}
// // let cardsEL=document.getElementById("cards-el")
  for(i=0;i<cards.length;i++){
    cardsEL.textContent+= cards[i]+","
  }

let messeageEl=document.getElementById("messeage-el")
sumEL.textContent="sum: "+''+sum
 messeageEl.textContent=messeage

console.log(messeage)

}

function startGame(){
  renderGame()
}

 //DRY==DO NOT REPEAT YOURSELFR===CODE

let newCardi=9
cards.push(newCardi)


function newCard(){

  sum+=cards[2]
  renderGame()
  // sum = firstCard + secondCard + newCardi; 
  // sumEL.textContent="sum: "+''+sum
  // console.log("Drawing new card from the deck!!!")
  // cardsEL.textContent="Cards:"+''+cards[0]+','+cards[1]+','+cards[2]
  //  for(i=0;i<cards.length;i++){
  //   cardsEL.textContent+= cards[i]+","
  // }
 
}

// document.getElementById("messeage-el").textContent=messeage

 


// let age = 19;
// if (age >= 21) {
//   console.log("Enter the club!!");
// } else {
//   console.log("You are a minor,Go Screw yourself !!");
// }

// let num = 100;
// if (num < 100) {
//   console.log("Not eligible dumb-ass");
// } else if (num === 100) {
//   //   Tripple equal sign is strict than double equal sign i.e when passing the same value as a string "100
//   //   the code still works

//   console.log("Here is your Birthday card Old stuff!!");
// } else {
//   console.log("Not eligible,You've lready goten your card!!");
// }
// console.log(4===3)//false
// console.log(12>12)//false
// console.log(3<6)//true
// console.log(3>=3)//false
// console.log(11<=11)//false
// console.log(3<=2)//falsef
