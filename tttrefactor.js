
$(window).load( function () {
 	

	var playerCounter = 0
	var xWins = 0
	var oWins = 0
	//Sets square based on player turn//
	$('#board').click(function(event){ 
		if($(event.target).html() !== "&nbsp;"){
			alert("This square is already played!")
		}
		else if(playerCounter%2 === 0){
			$(event.target).html('X');
			$(event.target).attr('id', 'X');
			playerCounter ++;
			checkWinner();
		} else {
			$(event.target).html('O');
			$(event.target).attr('id', 'O');
			playerCounter ++;
			checkWinner();
		}
		turnDisplay();		
		});	
	//Alerts winner and counts number of match wins//
	var winnerAlert = function(player){
			if(player === 'X'){
				alert("Player X wins!")
				xWins ++;
			} else if(player === 'O'){
				alert("Player O wins!") //working here****
				oWins ++;
			} else {
				alert("Its a tie!")
			}
		resetBoard();
	}
	//Checks board against winning functions after each turn//
	var checkWinner= function(){
	// var moves = [];
			var $moves = $('.box').html();//jQuery****

		// for(i=0; i<setPositions.length; i++){
		// 	moves.push(setPositions[i].innerHTML)
		// 	}
			if($moves.eq(0) === 'X' && $moves.eq(1) === 'X' && $moves.eq(2) === 'X');
			winnerAlert('X');
			// } else if(moves[0] === 'O'&& moves[1] === 'O'&& moves[2] === 'O'){
			// winnerAlert('O');
			// } else if(moves[3] === 'X' && moves[4] === 'X' && moves[5] === 'X'){
			// winnerAlert('X');	
			// } else if(moves[3] === 'O' && moves[4] === 'O' && moves[5] === 'O'){
			// winnerAlert('O');
			// } else if(moves[6] === 'X' && moves[7] === 'X' && moves[8] === 'X'){
			// winnerAlert('X');	
			// } else if(moves[6] === 'O' && moves[7] === 'O' && moves[8] === 'O'){
			// winnerAlert('O');
			// } else if(moves[0] === 'X' && moves[3] === 'X' && moves[6] === 'X'){
			// winnerAlert('X');	
			// } else if(moves[0] === 'O' && moves[3] === 'O' && moves[6] === 'O'){
			// winnerAlert('O');
			// } else if(moves[1] === 'X' && moves[4] === 'X' && moves[7] === 'X'){
			// winnerAlert('X');	
			// } else if(moves[1] === 'O' && moves[4] === 'O' && moves[7] === 'O'){
			// winnerAlert('O');
			// } else if(moves[2] === 'X' && moves[5] === 'X' && moves[8] === 'X'){
			// winnerAlert('X');	
			// } else if(moves[2] === 'O' && moves[5] === 'O' && moves[8] === 'O'){
			// winnerAlert('O');
			// } else if(moves[0] === 'X' && moves[4] === 'X' && moves[8] === 'X'){
			// winnerAlert('X');	
			// } else if(moves[0] === 'O' && moves[4] === 'O' && moves[8] === 'O'){
			// winnerAlert('O');
			// } else if(moves[2] === 'X' && moves[4] === 'X' && moves[6] === 'X'){
			// winnerAlert('X');	
			// } else if(moves[2] === 'O' && moves[4] === 'O' && moves[6] === 'O'){
			// winnerAlert('O');
			
			
	}	

	//Modular function for clearing board, upon winning condition or 
	//when manual reset is initiated.
	var resetBoard = function(){
		var $boxes = $('.box')
		$boxes.each(function(i){
					$boxes.eq(i).html("&nbsp;")
					$boxes.eq(i).attr("id", "");
				});
			playerCounter = 0
		}
	//Function to display current turn
	var turnDisplay = function(){
		var $display = $('.turn')//jQuery****
		if(playerCounter%2 === 0){
			$display.html('Go player X!');
		} else if(playerCounter%2 !== 0){
			$display.html('Go player O!');
		} 
	}
	// var scoreBoard = function() {
	// 	var score = div.score;
	// 	if(playerCounter%2 === 0){
	// 		score.innerHTML = 'test'
	// 	} else {
	// 		score.innerHTML = oWins
	// 	}
	// }
	//Manual reset button event
	$('.reset').click(function(event){//jQuery****
		resetBoard();
		});

});


