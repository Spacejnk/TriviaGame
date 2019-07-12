// set timer
var timeleft = 5;
var downloadTimer = setInterval(function(){
  document.getElementById("timer").innerHTML = timeleft + " seconds";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
     document.getElementById("timer").innerHTML = "Finished!"
  }
}, 1000); 

// add jQuery text for All Done!
// create variables for correctAnswer, wrongAnswer and unAnswer set to zero
var correctAnswer = 0;
var wrongAnswer = 0;
var unAnswered = 0;


// Auto refresh  -- only added to if win++ block
var autoRefresh = setInterval(function(){
    $("").text();
}, 500);

// create a function variable and inside answerChecker add an if else to check if the player win or 
var answerChecker = function() {
    
    console.log();
    console.log();
    console.log();
// if I win while clicking .. alert name below or add a point to the board
    if (radioChoice === correctPick) {
        correctAnswer++;
        // Auto refresh 
        autoRefresh;
        alert('You won!');
        // add text to board with jQuery
        $("").text(correctAnswer);
        
         
         
         correctAnswer = 0;

// if I lose while clicking .. alert statement below or add a point the board 
    } else if  (radioChoice != correctPick) {
        wrongAnswer++;
        alert('You Lost!');
        // add text to board with jQuery
        $("").text(wrongAnswer);
         

        wrongAnswer = 0;

        } else if  (radioChoice != correctPick) {
            wrongAnswer++;
            alert('You Lost!');
            // add text to board with jQuery
            $("").text(unAnswered++);
             
    
            unAnswered = 0;
    
            };

    // while winning or losing just keep adding score to the board
    $("").text(correctAnswer);
    $("").text(wrongAnswer);
    $("").text(unAnswered);
    return;
};
// I want at some point to show the results after multiple choice answers
// jQuery function for 
$(document).ready(function () {
    // ready on reload or refresh   
       
        $("").text();
        
;
        
        $("").click(function () {
    // Alert and console function not working yet
            $("").text();
    
            answerChecker();
    
            // console.log();
            // alert();
        });
    
        $("").click(function () {
            $("").text();
    
            answerChecker();
    
            // console.log();
            // alert();
        });
    
    
        $("").click(function() {
            $("").text();
    
            answerChecker();
    
            // console.log();
            // alert();
        });
    
      
    });


















// Define some colors
var colors = [
    "red",
    "blue",
    "white"    
];

// Retrieve the words
var text = $(".rc").html().split(" ");

// Empty the elment
$(".rc").empty();

// Iterate over the words
$.each(text, function(i, word) {
    if(i != text.length) {
        word += " "; // Add space after word 
    }
    
     // Get random color
    var colorIndex = Math.floor(Math.random() * colors.length);
    
    $("<span>")
        .html(word)
        .css("color", colors[colorIndex])
        .appendTo($(".rc"));

        
});


var autoRefresh = setInterval(function(){
   
}, 500);





