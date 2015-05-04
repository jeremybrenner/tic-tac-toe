
window.addEventListener("load", function () {
 	

	var playerCounter = 0
	
	document.querySelector('#board').addEventListener("click", function(event){
		if(event.target.innerHTML !== "&nbsp;"){
			alert("This square is already played!")
		}
		else if(playerCounter%2 === 0){
			event.target.innerHTML = "X";
			// event.target.style.backgroundColor = 'blue';
			event.target.setAttribute("id", "X")
			playerCounter ++;
			checkWinner();
		} else {
			event.target.innerHTML = "O";
			// event.target.style.backgroundColor = 'red';
			event.target.setAttribute("id", "O")
			playerCounter ++;
			checkWinner();
		}
			
			
		});	

	var winnerAlert = function(player){
			if(player === 'X'){
				alert("Player X wins!")
			} else {
				alert("Player O wins!")
			}
		autoReset();
	}

	var checkWinner= function(){
	var moves = [];
	var setPositions = document.querySelectorAll('.box')
		for(i=0; i<setPositions.length; i++){
			moves.push(setPositions[i].innerHTML)
			}
			if(moves[0] === 'X' && moves[1] === 'X' && moves[2] === 'X'){
			winnerAlert('X');
			} else if(moves[0] === 'O'&& moves[1] === 'O'&& moves[2] === 'O'){
			winnerAlert('O');
			} else if(moves[3] === 'X' && moves[4] === 'X' && moves[5] === 'X'){
			winnerAlert('X');	
			} else if(moves[3] === 'O' && moves[4] === 'O' && moves[5] === 'O'){
			winnerAlert('O');
			} else if(moves[6] === 'X' && moves[7] === 'X' && moves[8] === 'X'){
			winnerAlert('X');	
			} else if(moves[6] === 'O' && moves[7] === 'O' && moves[8] === 'O'){
			winnerAlert('O');
			} else if(moves[0] === 'X' && moves[3] === 'X' && moves[6] === 'X'){
			winnerAlert('X');	
			} else if(moves[0] === 'O' && moves[3] === 'O' && moves[6] === 'O'){
			winnerAlert('O');
			} else if(moves[1] === 'X' && moves[4] === 'X' && moves[7] === 'X'){
			winnerAlert('X');	
			} else if(moves[1] === 'O' && moves[4] === 'O' && moves[7] === 'O'){
			winnerAlert('O');
			} else if(moves[2] === 'X' && moves[5] === 'X' && moves[8] === 'X'){
			winnerAlert('X');	
			} else if(moves[2] === 'O' && moves[5] === 'O' && moves[8] === 'O'){
			winnerAlert('O');
			} else if(moves[0] === 'X' && moves[4] === 'X' && moves[8] === 'X'){
			winnerAlert('X');	
			} else if(moves[0] === 'O' && moves[4] === 'O' && moves[8] === 'O'){
			winnerAlert('O');
			} else if(moves[2] === 'X' && moves[4] === 'X' && moves[6] === 'X'){
			winnerAlert('X');	
			} else if(moves[2] === 'O' && moves[4] === 'O' && moves[6] === 'O'){
			winnerAlert('O');
			}
			
	}	

	var autoReset = function(){
		var boxes = document.querySelectorAll('.box')
				for(i = 0; i < boxes.length; i++){
							boxes[i].innerHTML = "&nbsp;"
							boxes[i].setAttribute("id", "");
				}
			playerCounter = 0
		}
	
	var resetBoard = function(){
		var boxes = document.querySelectorAll('.box')
				for(i = 0; i < boxes.length; i++){
							boxes[i].innerHTML = "&nbsp;"
							boxes[i].setAttribute("id", "");
				}
			playerCounter = 0
		}


	document.querySelector('.reset').addEventListener("click", function(event){
		resetBoard();
		});

});


