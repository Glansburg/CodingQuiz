// query selectors for javascript to communicate with HTML
var timeE1 = document.getElementById("seconds")
var startBtn = document.getElementById("Start")
var instructionsContainer = document.getElementById("instruction-container")
var quizQuestionsContainer = document.getElementById("quiz-questions")
var quizChoiceContainer = document.getElementById("quizChoices")
var choice1 = document.getElementById("choice1")
var choice2 = document.getElementById("choice2")
var choice3 = document.getElementById("choice3")
var choice4 = document.getElementById("choice4")
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
choice1.textContent = currentChoice.choice[0]
choice2.textContent = currentChoice.choice[1]
choice3.textContent = currentChoice.choice[2]
choice4.textContent = currentChoice.choice[3]
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

