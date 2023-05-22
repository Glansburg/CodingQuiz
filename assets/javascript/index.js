// timer
var timeE1 = document.getElementById("seconds")
var startBtn = document.getElementById("Start")
startBtn.addEventListener("click", countdown)

var timeLeft = 75




var timer





//maybe change countdown to a function tomorrow?

var countdown = function() {
   timer = setInterval(function(){
        timeLeft-- 
        document.querySelector("#seconds").textContent=timeLeft
        if (timeLeft === 0) {
            clearInterval(timer)
        }
    },1000 )  
  
}


