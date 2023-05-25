// query selectors for javascript to communicate with HTML
var timeE1 = document.getElementById("seconds")
var startBtn = document.getElementById("Start")
var instructionsContainer = document.getElementById("instruction-container")
var quizQuestionsContainer = document.getElementById("quiz-questions")
var quizChoiceContainer = document.getElementById("quizChoices")
var test = document.getElementById("test")
var tester = document.getElementById("tester")
var questionIndex = 0;
var choiceIndex = 0;


var timeLeft = 75

var timer

function startGame() {
    countdown()
    getQuestion()
    getChoice()
}


//Gets the question for quiz
function getQuestion() {
    var currentQuestion = questions[questionIndex] 
    test.textContent = currentQuestion.question
    instructionsContainer.setAttribute("class", "hidden")
    quizQuestionsContainer.removeAttribute("class")
}

function getChoice() {
var currentChoice = questions[choiceIndex]
tester.textContent = currentChoice.choice
instructionsContainer.setAttribute("class", "hidden")
quizChoiceContainer.removeAttribute("class")

}


//countdown timer for quiz
function countdown(){
   timer = setInterval(function(){
        timeLeft-- 
        document.querySelector("#seconds").textContent=timeLeft
        if (timeLeft === 0) {
            clearInterval(timer)
        }
    },1000 )  
  
}
startBtn.addEventListener("click", startGame)

