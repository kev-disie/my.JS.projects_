//document.getElementById("count-el").innerText = 5;
// let myAge = 15;
// let humanDogRatio = 7;
// let mydogAge = myAge * humanDogRatio;
// console.log(mydogAge);
// let bonusPoints = 50;
// bonusPoints += 50;
// console.log(bonusPoints);
// bonusPoints -= 75;
// console.log(bonusPoints);
// bonusPoints += 45;
// console.log(bonusPoints);

// function increment() {
//   console.log("click that button you son of a b!h!!");
// }
// function recall() {
//   let number = 42;
//   console.log(number);
// }
// recall();
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function totalLaps() {
//   let lapsum = lap1 + lap2 + lap3;
//   console.log(lapsum);
// }
// totalLaps();
// let lapsCompleted = 0;

// function inreaseLapcount() {
//   lapsCompleted += 1;
// }
// inreaseLapcount();
// inreaseLapcount();
// inreaseLapcount();
// console.log(lapsCompleted);

//functions

let count = 0;
let countEl = document.getElementById("count-el"); //pass in arguments
function increment() {
  count += 1;
  countEl.innerText = count;
  console.log(count);
}

//strings
// let username = "jhonny";
// console.log(username);
// let messeage = "You have three new messeges";
// console.log(messeage);
// console.log(username + ", " + messeage);
// let messeageTouser = "we have logged";
// console.log(messeageTouser + "," + username + "," + messeage);
// let name = "Danny";
// let greeting = "Hi,my name is ";
// let myGreeting = greeting + name;
// console.log(myGreeting);
// let points = "4";
// let bonusPooints = "10";
// let totalPoints = points + bonusPooints;
// console.log(totalPoints);
// console.log(4 + 5); //9
// console.log("5" + 5); //55
// console.log("2" + "4"); //24

let welcomeEl = document.getElementById("welcome-el");
let name = "Jared!!";
let greeting = "Welcome back to this page, ";
welcomeEl.innerText = greeting + name;
console.log(welcomeEl.innerText);
let emoji = "👋";
welcomeEl.innerText += emoji;

let saveEl = document.getElementById("save-el");
console.log(saveEl);
function save() {
  let output = count + " - ";
  saveEl.textContent += output;
  console.log(count);
  countEl.innerText = 0;
  count = 0;
}
save();

//1.0Practise exercise!!
//variables

let firstName = "kefini";
let lastName = " jay";

let fullName = firstName + lastName;
console.log(fullName);

//functions

let nname = "linda";
let ggreeting = "Hi there";

function caller() {
  let ooutput = ggreeting + "," + nname + "!!";
  console.log(ooutput);
}
caller();

let myPpoints = 3;
function inc() {
  myPpoints += 3;
}
inc();
inc();
inc();
console.log(myPpoints);
function dec() {
  myPpoints -= 1;
}
dec();
dec();
console.log(myPpoints);

//strings
console.log("2" + 2);
console.log(11 + 7);
console.log(6 + "5");
console.log("My points :" + 5 + 9);
console.log(2 + 2);
console.log("11" + "14");

//Arrays-this are ordered lists of items

let featurePost=["2 years sales agent","8 months debt collection agent ",
  "Bachelors Degree Holder","C.E.O"]
console.log(featurePost[0],[1],[2])

let expirience=["frontendDeveloper","pepolecounterforNostat","ceoatScrimba"]
console.log(expirience[0])
console.log(expirience[1])
console.log(expirience[2])
console.log(expirience[0],expirience[1],expirience[2])

