
window.addEventListener("click", (event)=>{
const button = document.getElementById("school_name")
btn.innerHTML = "In Omnibus Caritas" // Changes (inside the JavaScript) the words of the button when clicked
setTimeout(() => {
    btn.innerHTML = "See School Motto"}, 3000)  //The original words automatically re-appear after 3 seconds
}
)



const form = document.querySelector("#contact-form")

form.addEventListener("submit", (event)=> { //Event listener alls a function (event) to be detected when an action (submit) is acted out
    event.preventDefault() //Stops the action from occurring

const formData = new FormData(form)  //Sets what data will be submitted in the form

const data = Object.fromEntries(formData.entries())

console.log("FormData", formData) // Lists the data within the console log which allows the submission to be viewed
console.log("data", data)

})

const btn2 = document.querySelector("#offical_website") // 

btn2.addEventListener('click', (event)=>{
    const newElement = document.createElement("a") //Creates an anchor tag - That will show a child
    newElement.innerHTML = "Official Website" //Gives a title to the child
    document.body.appendChild(newElement) //Creates the child
})

let output = document.getElementById('btn3'); //I got this idea from the following website:
                                                    // https://www.tutorialspoint.com/how-to-clear-the-form-after-submitting-in-javascript-without-using-reset#
      function clearAllInputs(event) {   //The Event is to action the clearing of the data from the form when submitted
         var allInputs = document.querySelectorAll('input');
         allInputs.forEach(singleInput => singleInput.value = ''); //For each box within the form it will be left blank after submission
         output.innerHTML += "Details entered successfully! - Please enter next person <br>"; //Sets the message that will be displayed within the button when submitted
                                                                                                    //The use of br (break) allows a new line after each submission
      }

      // What I would like to improve - 
            //1. To have the message (details entered successfully! - Please enter next person) outside of the "Press to Add Next" button
            //2. I would like to find a way of only having one submit button
            //3. To have some sort of counter to count how many times the data has been submitted (how many classmates identified)
            //4. To link the "Cheat" button to a full class dictionary - whilst also keeping a pop-up hint
            //5. In keeping the pop-up hint - have a second and third (different subject) pop-up i.e. "Add One more name"
            //6. The "Cheat" button is introduced too early in the page - It might get clicked on by mistake - Could introduce a hint/answers/cheat separate buttons
            //7. I would like my anchor tag to make a direct link to the school's website
    
      // Expansion Plans -
                // This could be a really good app with possibilities of "female in 5th Form added" - Then "other people in school"
                // It could even have the capability to add different schools/universities - Maybe which an individual has attended
                // Or even as part of a mega app incorporating multiple schools for multiple non educationally related people
