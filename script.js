const check = document.getElementById("check");
const menu = document.getElementById("menu");
const links = document.getElementById('links');
const lists = document.querySelectorAll('li');
const content = document.getElementById('content');
const nav = document.querySelector('nav');
const skills_div1 = document.getElementsByClassName('skills-sec-1')[0];
const skills_div2 = document.getElementsByClassName('skills-sec-2')[0];
const tLine = document.getElementById('tline-sec');

const skills = [
    ['Java', 80], ['JavaScript', 80], ['HTML', 70], ['CSS', 60],
    ['NodeJS', 70],['ExpressJs', 70], ['MongoDB', 60],['Python', 60],
    ['Problem Solving', 90]
];

const eduPoints = [{tag : "school", classN : "Class 10th", school : "Children's Academy, Ghaziabad", time : "2017", percentage : "Percentage : 91.2%"},
                    {tag : "school", classN : "Class 12th", school : "Childeren's Academy, Ghaziabad", time : "2019", percentage :"Percentage : 94%"},
                    {tag : "computer", classN : "B.Tech Computer Science", school : "GLA University, Mathura", time : "2024 Present", percentage : "Percentage : 88.7%"}];


menu.addEventListener('click', adjust);

for (let e of lists) {
    e.addEventListener('click', () => {
        console.log(e);
        if (links.style.display == "block") {
            links.style.display = "none";
            menu.innerText = "menu";
            menu.style.color = 'white';
            check.checked = false;
        }
    })
}
function adjust () {
    if (check.checked == false) {
        menu.style.color = "yellow";
        links.style.display = "block";
        menu.innerText = "menu_open";
    }
    else {
        menu.style.color = "white";
        links.style.display = "none";
        menu.innerText = "menu";
    }
}

window.addEventListener("resize", sizecheck);
function sizecheck() {
    if (window.innerWidth > 960) {
        links.style.display = "flex";
        check.checked = false;
        menu.innerText = "menu";
    }
    if (window.innerWidth <= 960 && check.checked == false) {
        menu.innerText = "menu";
        links.style.display = "None";
    }
}


//adding skills
for (let i = 0; i < skills.length; i++) {
    let skill = skills[i];
    if (i <= skills.length / 2) {
        skills_div1.appendChild(createSkill(skill));
    }
    else {
        skills_div2.appendChild(createSkill(skill));
    }
    console.log("added skill");
}

//creating skill loaders
function createSkill(skill) {
    let outerDiv = document.createElement('div');
    outerDiv.innerHTML = skill[0];
    outerDiv.classList.add('skill-box')
    let innerDiv = document.createElement('div');
    innerDiv.id = `${skill[0]}-load`;
    innerDiv.style.background = `linear-gradient(to right, green 0%, yellow ${skill[1]}%, white ${skill[1]}%, white 100%)`;
    innerDiv.classList.add('loaders');
    outerDiv.append(innerDiv);
    // console.log();
    return outerDiv;
}

//adding timeline 
for (let i = 0; i < eduPoints.length; i++) {
    tLine.appendChild(createTpoint(eduPoints[i]));
}

//creating tline elements 
function createTpoint (edupoint) {

    let content = `<p><strong>${edupoint.classN}</strong><br>${edupoint.school}, ${edupoint.time}<br><strong>${edupoint.percentage}</strong></p>`;


    let symbol = document.createElement('div');
    symbol.innerHTML = `<strong class="material-symbols-outlined tag">${edupoint.tag}</strong>`;

    let outerDiv = document.createElement('div');
    outerDiv.classList.add('tline');

    let innerDiv = document.createElement('div');
    innerDiv.classList.add('edu-content');
    innerDiv.innerHTML = content;

    outerDiv.append(symbol);
    outerDiv.append(innerDiv);

    return outerDiv;

}
