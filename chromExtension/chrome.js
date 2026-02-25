let myLeads = ["Kassandra","Naomi","Marione","cutepoison","Nasseh"];

const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

const ulEL = document.getElementById("ul-el") //defined and get the u-el id from the DOM != assignment



// let lead = inputEl.value



inputBtn.addEventListener("click",function(){
    // myLeads.push(lead)
    // console.log(myLeads)
    myLeads.push(inputEl.value)
    console.log(myLeads)



    

    console.log("Button clicked from addEventlistener...")
})
// write a for loop that logs out the items in the myLeads array

for (let i = 0; i < myLeads.length ;i++){
    // console.log(myLeads[i])

    ulEL.innerHTML += "<li>" + myLeads[i] + "</li>"

}


