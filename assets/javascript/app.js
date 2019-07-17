// Define some colours
var colours = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple"    
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
     setTimeout(function() {
      $(colourIndex).reset();
      
    }, 500);
     var colourIndex = Math.floor(Math.random() * colours.length);

    $("<span>")
        .html(word)
        .css("color", colours[colourIndex])
        .appendTo($(".rc"));

       
});


// setTimeout(function() {
//   $(text).reset();
// }, 1000);



// add jQuery text for All Done!
// create variables for correctAnswer, wrongAnswer and unAnswer set to zero
var correctAnswer = 0;
var wrongAnswer = 0;
var unAnswered = 0;

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

    if (!$(".answer:checked").length < 3 ) {
        unAnswered = 3 - $(".answer:checked").length;
        $("#unAnswered").text(unAnswered);
        //alert("Not checked")
    } else {
        //alert("Checked");
    }
    
} // ifUnAnswered

////
// for loop to check if radio is unchecked


// for (var i=0; i<input.answer.length; i++)  {
// if (!$("input[name='answer']:checked"))  {

//     unAnswered = "input[name='answer'][i]";
//     unAnswered++;

// }
// }
/////

// Hide results until game over
$(document).ready(function() {
    setTimeout(function(){
    $('#thisDiv').fadeIn();
    }, 10000);
    });


$(document).ready(function(){
    $('.answer').change(function(){
      if(this.value === "correct") {
          correctAnswer++;
        $("#correctAnswer").text(correctAnswer);
        alert('You have selected the correct answer!');
      } else if(this.value === "wrong"){
        wrongAnswer++;
        $("#wrongAnswer").text(wrongAnswer);
        alert('You have selected the wrong answer!');

      } 
    });
    
  });




  




















