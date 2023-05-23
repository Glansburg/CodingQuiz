// timer
var timeE1 = document.getElementById("seconds")
var startBtn = document.getElementById("Start")
var instructionsContainer = document.getElementById("instruction-container")
var quizQuestionsContainer = document.getElementById("quiz-questions")
var test = document.getElementById("test")
var questionIndex = 0;

var timeLeft = 75

var timer

function startGame() {
    countdown()
    getQuestion()
}


  
function getQuestion() {
    var currentQuestion = questions[questionIndex] 
    test.textContent = currentQuestion.question
    instructionsContainer.setAttribute("class", "hidden")
    quizQuestionsContainer.removeAttribute("class")
}

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

