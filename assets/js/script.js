//importing questions from questions file
import { questions } from "./questions.mjs";

//getting elements from the DOM
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const answerA = document.getElementById("A");
const answerB = document.getElementById("B");
const answerC = document.getElementById("C");
const answerD = document.getElementById("D");
const counter = document.getElementById("counter");
const timer = document.getElementById("timer");
const timeDisplay = document.getElementById("timedisplay");
const scoreDiv = document.getElementById("score");
const progress = document.getElementById("progress");
const playAgain = document.getElementById("play-again");
const user = document.getElementById("load-user");
const usern = document.getElementById("username");


//setting variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 15;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;
let username;


//function called to enter username and display message on quiz
document.getElementById("start").onclick = function(){
    username = document.getElementById("user-input").value;
    user.innerHTML = "Good luck " + username;
};


//event listener to start quiz
start.addEventListener("click", startQuiz);

//function called to start quiz
function startQuiz() {
start.style.display = "none";
usern.style.display = "none";
renderQuestion();
quiz.style.display = "block";
timer.style.display = "block";
user.style.display = "flex";
renderProgress();
renderCounter();
TIMER = setInterval(renderCounter, 1000);
}


//function to randomise questions
// let questionShuffle = function(questions){
//     let newPos;
//     let temp;
//     for (let i = questions.length - 1; i > 0; i--){
//         newPos = Math.floor(Math.random() * (i + 1));
//         temp = questions[i];
//         questions [i] = questions[newPos];
//         questions[newPos] = temp;
//     }
//     return questions;
// };


//function called to load questions
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    answerA.innerHTML = q.choiceA;
    answerB.innerHTML = q.choiceB;
    answerC.innerHTML = q.choiceC;
    answerD.innerHTML = q.choiceD;
}


//function called to load progress bar
function renderProgress() {
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++)
    {
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}


//function called to load timer
function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeDisplay.style.width = count * gaugeUnit + "px";
        count++;
    } else {
        count = 0;
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            clearInterval(TIMER);
            scoreRender();
        }
    }
}


//event listeners for answer options
answerA.addEventListener("click", checkAnswer);
answerB.addEventListener("click", checkAnswer);
answerC.addEventListener("click", checkAnswer);
answerD.addEventListener("click", checkAnswer);

//function called to check answer selected
function checkAnswer(event){
    const answer = event.target.id;     
    if (answer == questions[runningQuestion].correct){
        score++;
        answerIsCorrect();
    } else {
        answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
        questionShuffle();
    } else {
        clearInterval(TIMER);
        scoreRender();
    }
}


//function called for incorrect answer
function answerIsWrong (){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

//function called for correct answer
function answerIsCorrect (){
    document.getElementById(runningQuestion).style.backgroundColor = "#d4af37";
}


//function called for final score
function scoreRender(){
    scoreDiv.style.display = "block";
    playAgain.style.display = "flex";
    timer.style.display = "none";
    quiz.style.display = "none";
    quiz.classList.add('hide');
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 70) ? "../assets/images/firstplace.gif" :
              (scorePerCent >= 40) ? "../assets/images/secondplace.webp" :
              "../assets/images/thirdplace.gif";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}


//link for 'play-again' button to go back to the start
playAgain.onclick = () => {
    window.location.reload();
};