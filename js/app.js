
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
      console.log(hiddenNumber);

    /*--- Checking to see if user is hot or cold ---*/
  	
     $('#guessButton').click(function (event) {

        event.preventDefault(); 
        var userGuess = $('#userGuess').val();
        userGuessAsInput = parseInt(userGuess);
        var guessDiff = Math.abs(hiddenNumber - userGuessAsInput);

        if (isNaN(userGuessAsInput)==true) {
          alert("Please enter a number");
        } else if (userGuessAsInput === hiddenNumber) {
            alert("BINGO! You are a winner! Please play again.");
        } else if (guessDiff > 0 && guessDiff <= 5) { 
            alert("Hot");
        } else if (guessDiff > 5 && guessDiff <= 10) {
            alert("Hotter");
        } else if (guessDiff > 10 && guessDiff <= 15) {
            alert("Warmer");
        } else if (guessDiff > 15 && guessDiff <= 20) {
            alert("Luke warm");
        } else if (guessDiff > 20 && guessDiff <= 25) {
            alert("Cold");
        } else {
            alert("Freezing");
        }
      
      });

});


