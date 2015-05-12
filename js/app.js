
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Start New Game ---*/

  	var hiddenNumber = Math.ceil(Math.random()*100);
    var userGuess = $('#userGuess').val();
    userGuessAsInput = parseInt(userGuess);
    var guessDiff = Math.abs(hiddenNumber - userGuessAsInput);

    /*--- Checking to see if user is hot or cold ---*/
  	
     $('#guessButton').click(function () {
        if (isNaN(userGuessAsInput)==true) {
          alert("Please enter a number");
        } else if (guessDiff <= 5) { 
            alert("hot");
        } else if (guessDiff <= 10) {
            alert("warm");
        } else 
          alert("cold");

    });

});


