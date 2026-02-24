//using Arrays to initialize the cards
let cards = []; //we can also use the getRandomCard() function to initialize the cards array instead of hardcoding the values of the first two cards
let myLength = console.log(cards);

let sum = 0;

isAlive = false;
// console.log(sum);             //validating the output of the sum to the console not necessary but essential
let sumEL = document.getElementById("sum-el"); //Taking the id sum-el from the DOM  to diplsy the actual sum

//boolean variable to check if the player has blackjack or not
let hasBlackjack = false; //
let messeage = ""; //initilaizing an empty string to be used later on in the function below

//The card display function displays all the cards when invoked
let cardsEL = document.getElementById("cards-el"); //Taking the cards-el id from the DOM to display the cards actual value

let playerEl = document.getElementById("player-el");
let player = { name: "Sally", chips: 145 }; //definig an object
console.log(player);

playerEl.textContent = `${player.name}:  $${player.chips}`; //use backticks for readability rather than + operator to join the two properties
console.log(playerEl.textContent);
// debugger;
function renderGame() {
  if (sum < 21) {
    messeage ="Do you want to draw a new card?"; /*renderGame() function: checks if the sum of the card indexed 0 and 1 ===21 
                                                    if the card drawn !=21 then                                                                            
                                                                                                                              */
  } else if (sum == 21) {
    messeage = "You've got Black Jack!";
    hasBlackjack = true;
  } else {
    messeage = "You're out of the game!";
    hasBlackjack =false
    isAlive = false
  }
  // for( i=0;i < cards.length; i++){
  // let cardsEL=document.getElementById("cards-el")
  //  let  first2=cards.slice(firstCard,secondCard);
  //  console.log(i)
  // we use the .join() method to join the elements of the array with a comma and a space in between
  // cardsEL.textContent+="Cards: "+''+first2.join(",");
  //conditional way of displaying the cards with commas in between

  //using join
  cardsEL.textContent = "Cards: " + cards.join("");

    let messeageEl = document.getElementById("messeage-el");
    sumEL.textContent = "sum: " + " " + sum;
    messeageEl.textContent = messeage;

    console.log(messeage);

      //for loop to join the cards**did not work to my expectation

//   for (let i = 0; i < cards.length ; i++) {
//     cardsEL.textContent += cards[i] +' ';
//     console.log(cardsEL.textContent)
    
//     if (i < cards.length ) {
//       cardsEL.textContent += cards[i] + " ";
//     }
//     let messeageEl = document.getElementById("messeage-el");
//     sumEL.textContent = "sum: " + " " + sum;
//     messeageEl.textContent = messeage;

//     console.log(messeage);
//   }
 }

//start game function that invokes the renderGame function to start the game

  let firstCard = [];
let secondCard = [];
cards.push(firstCard);
cards.push(secondCard);

function startGame() {
  isAlive = true;

  cards = [firstCard, secondCard];

  firstCard[0] = getRandomCard();
  console.log(firstCard[0]);

  secondCard[1] = getRandomCard();
  console.log(secondCard[1]);

  //  cards[firstCard,secondCard];
  // let sum = cards[0] + cards[1] //defining the sum of the first card in array
  sum = firstCard[0] + secondCard[1]; //defining the sum of the first card in array
  console.log(sum);

  renderGame();
}

//DRY==DO NOT REPEAT YOURSELFR===CODE

let newCardi = [];
cards.push(newCardi);

//New card function that adds a new card to the cards array and updates the sum and renders the game
function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    newCardi = getRandomCard();
    sum += newCardi; //we can also use the newCardi variable to add the new card to the sum instead of accessing the last element of the cards array

    renderGame();
    cardsEL.textContent += " " + newCardi;
    // console.log(newCard())
  }
}

//Mtah.random() method

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1; //we use the Math.floor() method to round down the random number to the nearest integer and we add 1 to it to get a number between 1 and 13 inclusive
  if (randomNumber == 1) {
    return 11;
  } else if (
    randomNumber === 11 ||
    randomNumber === 12 ||
    randomNumber === 13
  ) {
    return 10;
  }

  return randomNumber;
}
