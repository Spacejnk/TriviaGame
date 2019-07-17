
// create variables for correctAnswer, wrongAnswer and unAnswered set to zero
var correctAnswer = 0;
var wrongAnswer = 0;
var unAnswered = 0;

// random color Totally Trivial Trivia  
var colors = ["blue", "white", "red"]
var currentColor = 0
var lis = document.querySelectorAll(".rc")

function changeColor() {
  --currentColor
  if (currentColor < 0) currentColor = colors.length -1
  for (var i = 0; i < lis.length; i++) {
    lis[i].style.color = colors[(currentColor +i) % colors.length]
  }
}
setInterval(changeColor, 1000);

// set timer --- wrap timer in on-click function  
$("#hideDiv").click( function(){
var timeleft = 10;
var downloadTimer = setInterval(function(){
  document.getElementById("timer").innerHTML = timeleft + " seconds";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("timer").innerHTML = "Finished!";
    // line 38 var ifUnAnswered
    clearInterval(ifUnAnswered());
    }
  }, 1000); 

// Hide results until game over
$(document).ready(function() {
    setTimeout(function(){
    $('#thisDiv').fadeIn();
    }, 14000);
    });
});

// hide start div when click
$("#hideDiv").click( function(){
    var x = document.getElementById("hideDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
});

 // ifUnAnswered
 var ifUnAnswered = function checkFunc() {

    if (!$(".answer:checked").length < 4 ) {
        unAnswered = 4 - $(".answer:checked").length;
        $("#unAnswered").text(unAnswered);
    } 
} 

// Increment wins and losses
$(document).ready(function(){
    $('.answer').change(function(){
      if(this.value === "correct") {
          correctAnswer++;
        $("#correctAnswer").text(correctAnswer);
      } else if(this.value === "wrong"){
        wrongAnswer++;
        $("#wrongAnswer").text(wrongAnswer);
      } 
    });
 });




  




















