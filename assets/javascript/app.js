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

    if (!$("input[name='answer']:checked").length < 3 ) {
        unAnswered++;
        $("#unAnswered").text(unAnswered);
        alert("Not checked")
    } else {
        alert("Checked");
    }
    
} // ifUnAnswered


// Hide results until game over
$(document).ready(function() {
    setTimeout(function(){
    $('#thisDiv').fadeIn();
    }, 10000);
    });


$(document).ready(function(){
    $('input[name=answer]').change(function(){
      if($('input[name=answer]:checked').val() === "correct") {
          correctAnswer++;
        $("#correctAnswer").text(correctAnswer);
        alert('You have selected the correct answer!');
      } else if($('input[name=answer]:checked').val() === "wrong"){
        wrongAnswer++;
        $("#wrongAnswer").text(wrongAnswer);
        alert('You have selected the wrong answer!');

      } 
    });
    
  });




  




















