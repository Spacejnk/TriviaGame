// add jQuery text for All Done!
// create variables for correctAnswer, wrongAnswer and unAnswer set to zero
var correctAnswer = 0;
var wrongAnswer = 0;
var unAnswered = 0;

// set timer --- wrap timer in on-click function  
$("#hideDiv").click( function(){
var timeleft = 15;
var downloadTimer = setInterval(function(){
  document.getElementById("timer").innerHTML = timeleft + " seconds";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
     document.getElementById("timer").innerHTML = "Finished!"
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




$(document).ready(function () {
    var $radios = $('input:radio[name="optradio"]');
    $radios.change(function () {
      var $selected = $radios.filter(':checked');
      if ( $selected.val() === 'right' ) {
          correctAnswer++;
          alert("Right Answer!" );
          $("#correctAnswer").text(correctAnswer);
          } else if  ( $selected.val() === 'wrong' ) {
            wrongAnswer++
            alert("Wrong Answer!" );
            $("#wrongAnswer").text(wrongAnswer);
            } else if  ( $selected.val() == '' ) {
                alert(" " );
                }
      });
  });




















