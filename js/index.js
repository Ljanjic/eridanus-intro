//added a new date object and stored in a var "today"
let today = new Date();


//Got the current year from new Date object and stored into thisYear
let thisYear = today.getFullYear();

//Selected <footer> element and stored into var "footer"
const footer = document.querySelector("footer");
//create a new <p> and store it into "copyright"
const copyright = document.createElement("p");
//setting innerHTML to display my name and current year 
copyright.innerHTML = `Ljiljana Janjić &copy ${thisYear}`;
//copyright.apprendChild(footer);
footer.appendChild(copyright);
//List of Skills section
let skills = ["* Communication", "* Front-end Coding", "* Git", "* Problem Solving", "* Attention to Detail"];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li")
     skill.innerHTML = skills[i]
     skillsList.appendChild(skill)
}

//Handling Message Form Submit
const messageForm = document.forms.leave_message;
messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = event.target.usersName.value;
    const mail = event.target.usersEmail.value;
    const mssg = event.target.usersMessage.value;
console.log(user, mail, mssg);
let messageSection = document.getElementById("messages");
let messageList = messageSection.querySelector("ul");
let newMessage = document.createElement("li");
newMessage.innerHTML = `<a href=mailto:${mail}>${user}'s message:</a> <span>"${mssg}"</span>`; 
let removeButton = document.createElement("button");
removeButton.className = "button_class";
removeButton.innerText = "remove";
removeButton.type = "button";
removeButton.addEventListener('click', (event) => {
    entry = event.target.parentNode;
    entry.remove()  
    document.getElementById("leave_message").reset();
}) 
newMessage.appendChild(removeButton)
    messageList.append(newMessage)

});

