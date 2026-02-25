let myLeads = [];

const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

let lead ="WWW.awsomeLead.com"



inputBtn.addEventListener("click",function(){
    myLeads.push(lead)
    console.log(myLeads)

    console.log("Button clicked from addEventlistener...")
})
// eventListener using a function
// function buttonClicked(){
//     console.log( "Button clicked");
// }


 