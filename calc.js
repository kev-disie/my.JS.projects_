let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");
// sumEl = [answer, answer1, answer2, answer3];

// sumEl.textContent = "sum";
function add() {
  let answer = num1 + num2;

  sumEl.textContent = answer;
  console.log(answer);
  sumEl.textContent = "sum: " + answer;
}
add();
function subtruct() {
  let answer1 = num1 - num2;

  sumEl.textContent = answer1;
  console.log(answer1);
  sumEl.textContent = "sum: " + answer1;
}
subtruct();
function divide() {
  let answer2 = num1 / num2;
  sumEl.textContent = answer2;
  console.log(answer2);
  sumEl.textContent = "sum: " + answer2;
}
divide();
function multiply() {
  let answer3 = num1 * num2;
  sumEl.textContent = answer3;
  console.log(answer3);
  sumEl.textContent = "sum: " + answer3;
}
