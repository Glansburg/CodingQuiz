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
var questionIndex = 0
var choiceIndex = 0


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
    questionsFormat.removeAttribute("class", "hidden")
    questionsFormat.setAttribute("id", "welcome-screen")
    quizQuestionsContainer.removeAttribute("class")
}

function getChoice() {
var currentChoice = questions[choiceIndex]
choice1.textContent = currentChoice.choice[0]
choice2.textContent = currentChoice.choice[1]
choice3.textContent = currentChoice.choice[2]
choice4.textContent = currentChoice.choice[3]
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







//function questionClick(event) {
    //var buttonEl = event.target;
  
    // if the clicked element is not a choice button, do nothing.
    //if (!buttonEl.matches('.choice')) {
      //return;
    //}
  //
    // check if user guessed wrong
    //if (buttonEl.value !== questions[currentQuestionIndex].answer) {
      // penalize time
  
      // display new time on page
  
      // display wrong message
   // } else {
      // display right message
    //}
  
    // move to next question
    //currentQuestionIndex++;
  
    // check if we've run out of questions
    //if (time <= 0 || currentQuestionIndex === questions.length) {
      //quizEnd();
    //} else {
      //getQuestion();
    //}
  //}



  // clear out any old question choices
  //c//hoicesEl.innerHTML = '';

  // loop over choices
  //for (var i = 0; i < currentQuestion.choices.length; i++) {
    // create new button for each choice
    //var choice = currentQuestion.choices[i];
    //var choiceNode = document.createElement('button');
    //choiceNode.setAttribute('class', 'choice');
    //choiceNode.setAttribute('value', choice);