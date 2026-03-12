let generalQuiz = [
{question:"Capital of India?",options:["Delhi","Mumbai","Chennai","Kolkata"],answer:0},
{question:"Largest planet?",options:["Earth","Mars","Jupiter","Saturn"],answer:2},
{question:"National animal of India?",options:["Lion","Tiger","Elephant","Leopard"],answer:1},
{question:"5 + 7 = ?",options:["10","11","12","13"],answer:2},
{question:"Sun is a?",options:["Planet","Star","Galaxy","Asteroid"],answer:1},
{question:"Water formula?",options:["H2O","CO2","O2","NaCl"],answer:0},
{question:"Fastest land animal?",options:["Lion","Cheetah","Tiger","Horse"],answer:1},
{question:"Largest ocean?",options:["Atlantic","Indian","Pacific","Arctic"],answer:2},
{question:"How many days in a week?",options:["5","6","7","8"],answer:2},
{question:"2 x 6 ?",options:["10","12","14","16"],answer:1},
{question:"Capital of USA?",options:["New York","Washington DC","Texas","Florida"],answer:1},
{question:"Rainbow has how many colors?",options:["5","6","7","8"],answer:2},
{question:"Opposite of hot?",options:["Warm","Cold","Cool","Ice"],answer:1},
{question:"Largest continent?",options:["Asia","Africa","Europe","Australia"],answer:0},
{question:"Bird that cannot fly?",options:["Eagle","Ostrich","Parrot","Crow"],answer:1},
{question:"3 + 9 ?",options:["10","11","12","13"],answer:2},
{question:"Gas plants use?",options:["CO2","Oxygen","Nitrogen","Helium"],answer:0},
{question:"Earth satellite?",options:["Sun","Mars","Moon","Venus"],answer:2},
{question:"10 / 2 ?",options:["4","5","6","7"],answer:1},
{question:"Largest mammal?",options:["Elephant","Blue Whale","Shark","Hippo"],answer:1},
{question:"India independence year?",options:["1947","1950","1930","1920"],answer:0},
{question:"Primary color?",options:["Red","Pink","Brown","Grey"],answer:0},
{question:"Square sides?",options:["3","4","5","6"],answer:1},
{question:"Earth shape?",options:["Flat","Round","Triangle","Square"],answer:1},
{question:"7 + 8 ?",options:["14","15","16","17"],answer:1}
];

let subjectQuiz = [
{question:"HTML stands for?",options:["Hyper Text Markup Language","High Text Machine Language","Hyperlinks Text Mark Language","None"],answer:0},
{question:"CSS used for?",options:["Styling","Programming","Database","Server"],answer:0},
{question:"JavaScript is?",options:["Programming Language","Database","Operating System","Compiler"],answer:0},
{question:"Tag for link?",options:["<a>","<link>","<href>","<url>"],answer:0},
{question:"Tag for image?",options:["<img>","<image>","<pic>","<src>"],answer:0},
{question:"JS used for?",options:["Interactivity","Cooking","Drawing","Music"],answer:0},
{question:"CSS stands for?",options:["Cascading Style Sheets","Creative Style System","Color Style Sheet","None"],answer:0},
{question:"HTML file extension?",options:[".html",".css",".js",".java"],answer:0},
{question:"JS output function?",options:["print()","console.log()","write()","show()"],answer:1},
{question:"CSS property for color?",options:["font","color","size","text"],answer:1},
{question:"JS variable keyword?",options:["var","int","string","float"],answer:0},
{question:"HTML heading tag?",options:["<h1>","<head>","<title>","<p>"],answer:0},
{question:"Paragraph tag?",options:["<p>","<para>","<text>","<pg>"],answer:0},
{question:"Line break tag?",options:["<br>","<break>","<lb>","<newline>"],answer:0},
{question:"CSS file extension?",options:[".css",".style",".design",".format"],answer:0},
{question:"JS used inside?",options:["<script>","<js>","<code>","<program>"],answer:0},
{question:"HTML list tag?",options:["<ul>","<li>","<list>","<ol>"],answer:1},
{question:"JS event example?",options:["onclick","onjump","onfly","onrun"],answer:0},
{question:"CSS align text?",options:["text-align","align-text","font-align","style-align"],answer:0},
{question:"JS array symbol?",options:["[]","{}","()","<>"],answer:0},
{question:"HTML table tag?",options:["<table>","<tab>","<tbl>","<grid>"],answer:0},
{question:"JS condition?",options:["if","when","case","switcher"],answer:0},
{question:"CSS property size?",options:["font-size","text-size","letter","font-style"],answer:0},
{question:"JS loop?",options:["for","repeat","cycle","again"],answer:0},
{question:"HTML form tag?",options:["<form>","<input>","<submit>","<button>"],answer:0}
];

let quizData=[];
let currentQuestion=0;
let score=0;
let selected=null;

function startQuiz(type){

document.getElementById("category").style.display="none";
document.getElementById("quiz").style.display="block";

quizData = type==="general" ? generalQuiz : subjectQuiz;

currentQuestion=0;
score=0;

loadQuestion();
}

function loadQuestion(){

selected=null;

let q=quizData[currentQuestion];

document.getElementById("question").innerText=q.question;

let optionsHTML="";

q.options.forEach((opt,index)=>{

optionsHTML+=`<button class="option" onclick="selectOption(this,${index})">${opt}</button>`;

});

document.getElementById("options").innerHTML=optionsHTML;

updateProgress();
}

function selectOption(btn,index){

let options=document.querySelectorAll(".option");

options.forEach(o=>o.classList.remove("selected"));

btn.classList.add("selected");

selected=index;
}

function nextQuestion(){

if(selected===null){
alert("Please select an option");
return;
}

if(selected===quizData[currentQuestion].answer){
score++;
}

currentQuestion++;

if(currentQuestion<quizData.length){
loadQuestion();
}
else{

document.getElementById("quiz").innerHTML=
`<h2>Your Score: ${score}/${quizData.length}</h2>
<button onclick="location.reload()">Restart</button>`;
}
}

function updateProgress(){

let progress=(currentQuestion/quizData.length)*100;

document.getElementById("progress-bar").style.width=progress+"%";
}