

// Questionare
// =====================================
// create an array that holds the questions with answeres.
	$(".doneButton").hide();
	$(".backButton").hide();
	$("#start-button").on("click",start);

	var questions = [{
		question: "First artificial satellite sent in space was?",
		choices: ["Sputnik 1", "Sputnik 2", "Explorer 1", "Explorer 2"],
		correctAnswer: "Sputnik 1"
	}, {question: "On what date did MTV make it's debut ?",
		choices: ["July 4, 1981", "January 1, 1981", "August 1, 1981", "October 31, 1981"],
		correctAnswer: "August 1, 1981"	
	}, {question: "What is the population of Brazil?",
		choices: ["145 million", "199 million", "182 million", "205 million"],
		correctAnswer: "205 million"
	}, {question: "Which TV-show is more popular?",
		choices: ["Game of Thrones", "The man in the high castle", "The Son", "Robot Man"],
		correctAnswer: 	"Game of Thrones"
	}, {question: "Which of these was NOT a member of the original Thirteen Colonies?",
		choices: ["New York", "Delaware", "Maine", "Georgia"],
		correctAnswer: "Maine"	
	}]; 

	var answerToQuestion;
	var correctAnswers;
	var wrongAnswers;
	var unanswered;
	var checked = null;
	var sec=10;
	var milisec = 0;
	var intervalId;

	
	function start (){
		// how to auto hide/close the alert message!
		$("#start-button").hide();
		clearInterval(intervalId);
		intervalId = setInterval (sec,1000);

		//alert("Trivial Game is starting, you have 30 seconds to answer to each question");
		//alert ("3");
		//alert ("2");
		//alert ("1");
		questionShown();
		clockRunning ();
	}

	function questionShown() {

		for (var i = 0; i<questions.length; i++) {

			
			// $(".quiz").html("<h1>" + questions[i].question + "</h1>");
			$(".quiz").append("<form>" + 
								"<h1>" + questions[i].question + "</h1>",
								"<input type='radio' name='chooseone' value='1'<p>" + "   " + questions[i].choices[0] + "</p>",
								"<input type='radio' name='chooseone' value='1'<p>" + "   " + questions[i].choices[1] + "</p>",
								"<input type='radio' name='chooseone' value='1'<p>" + "   " + questions[i].choices[2] + "</p>",
								"<input type='radio' name='chooseone' value='1'<p>" + "   " + questions[i].choices[3] + "</p>",
								+ 
							  "</form>");
			$(".doneButton").show();

		}

		
		chosenAnswer();
		
		//$(".quiz").empty();

	}



	function chosenAnswer () {
		for (var i = 0; i<questions[i].choices.length; i++){
			if (checked == true){
				answerToQuestion = questions[i].choices.checked.value;
				console.log(answerToQuestion);
				if (answerToQuestion == questions[i].correctAnswer){
					correctAnswers ++;
				} else {
					wrongAnswers ++;
				}
			} else if (checked == null) {
				unanswered ++;
			}
		}

		

	}

	function done() {

		$(".doneButton").hide();
		
		$(".quiz").html("<h1> " + correctAnswers + "</h1>");
		$(".quiz").html("<h1> " + wrongAnswers + "</h1>");
		$(".quiz").html("<h1> " + unanswered + "</h1>");

	}

	$(".doneButton").on("click",done);

	function clockRunning(){
		
		intervalId = setInterval(decrement, 100);
	}


    function decrement() {
      //sec --;
      milisec ++;
      $("#demo").html("<h2> Time Remaining : " + " " + sec + " " +"Seconds" + "</h2>");

      if (sec === 0) {
      	sec = "00"
        stop();
        alert("Time Up!");
        done();
      }

      if (milisec ===10) {
      	milisec == "00"
      	milisec = 0;
      	sec --;
      }
    }


    function stop() {

      clearInterval(intervalId);
      
    }

