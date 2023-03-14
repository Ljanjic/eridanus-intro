//added a new date object and stored in a var "today"
let today = new Date();
//const myName = Ljiljana;
//console.log(thisYear);
//Got the current year from new Date object and stored into thisYear
let thisYear = today.getFullYear();
//should I define const body = document.body for following
//Selected <footer> element and stored into var "footer"
const footer = document.querySelector("footer");
//create a new <p> and store it into "copyright"
const copyright = document.createElement("p");
//setting innerHTML to display my name and current year 
copyright.innerHTML = `Ljiljana Janjić &copy ${thisYear}`;
//copyright.apprendChild(footer);
footer.appendChild(copyright);
//List of Skills section
let skills = ["Communication", "Front-end Coding", "Git", "Problem Solving", "Attention to Detail"];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li")
     skill.innerHTML = skills[i]
     skillsList.appendChild(skill)
}