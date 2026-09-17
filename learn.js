 const score = {
        player: 0,
        computer: 0
      };
//reset the score to 0 for both player and computer.
      function restscore() {
        score.player = 0;
        score.computer = 0;
        localStorage.setItem('score', JSON.stringify(score));
        console.log("Score reset. Player: 0, Computer: 0");
      };
//load the score from local storage if it exists and if not, initialize it to 0 for both player and computer.

       const savedScore = localStorage.getItem('score');
        if (savedScore) {
          const parsedScore = JSON.parse(savedScore);
          score.player = parsedScore.player;
          score.computer = parsedScore.computer;
        }
        else {
            score.player = 0;
            score.computer = 0;
        }


//play the game and update the score based on the result of the game.
      function playGame(playerMove) 
      {

        computerMove = pickComputerMove();
        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.';
          } else if (computerMove === 'scissors') {
            result = 'You lose.';
          }
          
        } else if (playerMove === 'rock') 
        {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.';
          } else if (computerMove === 'scissors') {
            result = 'You win.';
          }
        
        }
        if (result === 'You win.') {
          score.player++;
        } else if (result === 'You lose.') {
          score.computer++;
        }
        localStorage.setItem('score', JSON.stringify(score));
        console.log(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
        console.log(`Score - Player: ${score.player}, Computer: ${score.computer}`);
        return result;
      }

//pick a random move for the computer.
      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }
        return computerMove;
    }