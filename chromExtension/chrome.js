let myLeads = [];


const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

const ulEL = document.getElementById("ul-el") //defined and get the u-el id from the DOM != assignment



// let lead = inputEl.value

  let lent = myLeads.length

      console.log(lent)



inputBtn.addEventListener("click",function(){
    // myLeads.push(lead)
    myLeads.push(inputEl.value)
     console.log(lent)
    console.log(myLeads)
    
      renderLeads()

    

    // console.log(renderLeads())

    console.log("Button clicked from addEventlistener...")
})

function renderLeads(){
    
// write a for loop that logs out the items in the myLeads array

  let listItems = ""

   const li = document.createElement("li")  //define a variable then use creatElement method 
for (let i = 0; i < myLeads.length ;i ++){
    // console.log(myLeads[i])

    // listItems += "<li>" +  myLeads[i] + "</li>"
                                                           //NEVER DEFINE AYTHING INSIDE A FOR LOOP!!
    // ulEL.innerHTML = listItems

     li.textContent =  myLeads[i] + " 😮‍💨" //we know the usage of textcontent here

    ulEL.append(li) //appEND adds the items to the list

    

}


}