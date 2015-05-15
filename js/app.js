
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Start ---*/
  	  
      var guessCounter = 0;
      var hiddenNumber = Math.ceil(Math.random()*100);
      console.log(hiddenNumber);

    /*--- Checking to see if user is hot or cold ---*/
  	
     $('#guessButton').click(function (event) {

        event.preventDefault(); 
        var userGuess = $('#userGuess').val();
        userGuessAsInput = parseInt(userGuess);
        var guessDiff = Math.abs(hiddenNumber - userGuessAsInput);
        $('input#userGuess').val("");
        guessCounter++;
        $('#count').text(guessCounter);

        if (isNaN(userGuessAsInput)==true) {
          alert("Please enter a number");
        } else if (userGuessAsInput === hiddenNumber) {
            document.getElementById("feedback").innerHTML = ("BINGO! You are a winner. Please play again.");
        } else if (guessDiff > 0 && guessDiff <= 5) { 
            document.getElementById("feedback").innerHTML = ("Hot.");
            $('#guessList').append('<li>' + userGuessAsInput + '</li>');
        } else if (guessDiff > 5 && guessDiff <= 10) {
            document.getElementById("feedback").innerHTML = ("Hotter.");
            $('#guessList').append('<li>' + userGuessAsInput + '</li>');
        } else if (guessDiff > 10 && guessDiff <= 15) {
            document.getElementById("feedback").innerHTML = ("Warmer.");
            $('#guessList').append('<li>' + userGuessAsInput + '</li>');
        } else if (guessDiff > 15 && guessDiff <= 20) {
            document.getElementById("feedback").innerHTML = ("Luke Warm.");
            $('#guessList').append('<li>' + userGuessAsInput + '</li>');
        } else if (guessDiff > 20 && guessDiff <= 25) {
            document.getElementById("feedback").innerHTML = ("Cold.");
            $('#guessList').append('<li>' + userGuessAsInput + '</li>');
        } else {
            document.getElementById("feedback").innerHTML = ("Freezing.");
            $('#guessList').append('<li>' + userGuessAsInput + '</li>');
        }
      
      });

    /*--- New Game Button ---*/

      $('.new').click(function () {

        location.reload();

      });



});


