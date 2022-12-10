import { questions } from "./questions.mjs";

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const answerA = document.getElementById("A");
const answerB = document.getElementById("B");
const answerC = document.getElementById("C");
const answerD = document.getElementById("D");
const timeGauge = document.getElementById("counter");
const scoreDiv = document.getElementById("timeGauge");

const lastQuestion = questions.length - 1;
let runningQuestion = 0;

function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    answerA.innerHTML = q.choiceA;
    answerB.innerHTML = q.choiceB;
    answerC.innerHTML = q.choiceC;
    answerD.innerHTML = q.choiceD;
}

start.style.display = "none";
renderQuestion();
quiz.style.display = "block";
renderProgress();

function renderProgress() {
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++)
    {
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}