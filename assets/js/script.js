import { questions } from "./questions.mjs";

// let buttons = document.getElementsByClassName("buttons");
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const answerA = document.getElementById("A");
const answerB = document.getElementById("B");
const answerC = document.getElementById("C");
const answerD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const scoreDiv = document.getElementById("score");
const progress = document.getElementById("progress");

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 15;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// document.addEventListener("DOMContentLoaded", function () {
//     const buttons = document.getElementsByClassName('.buttons');

function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    answerA.innerHTML = q.choiceA;
    answerB.innerHTML = q.choiceB;
    answerC.innerHTML = q.choiceC;
    answerD.innerHTML = q.choiceD;
    console.log(q)
}

start.addEventListener("click", startQuiz)

function startQuiz() {
start.style.display = "none";
renderQuestion();
quiz.style.display = "block";
renderProgress();
renderCounter();
TIMER = setInterval(renderCounter, 1000);
}


function renderProgress() {
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++)
    {
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;
    }
};

function checkAnswer() {
    if(answer === questions[runningQuestion].correct){
        score++;
    } else {
        
    }
}