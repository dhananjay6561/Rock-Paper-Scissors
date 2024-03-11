
      const choices = document.querySelectorAll('.choice');
      const result = document.querySelector('.result');

      choices.forEach(choice => {
        choice.addEventListener('click', () => {
          const playerChoice = choice.id;
          const computerChoice = getComputerChoice();
          const winner = decideWinner(playerChoice, computerChoice);
          displayResult(winner, playerChoice, computerChoice);
        });
      });

      function getComputerChoice() {
        const choicesArray = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choicesArray.length);
        return choicesArray[randomIndex];
      }

      function decideWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
          return 'tie';
        } else if (
          (playerChoice === 'rock' && computerChoice === 'scissors') ||
          (playerChoice === 'scissors' && computerChoice === 'paper') ||
          (playerChoice === 'paper' && computerChoice === 'rock')
        ) {
          return 'player';
        } else {
          return 'computer';
        }
      }

      function displayResult(winner, playerChoice, computerChoice) {
        if (winner === 'tie') {
          result.textContent = `It's a tie! Both players chose ${playerChoice}.`;
        } else {
          result.textContent = `${winner.charAt(0).toUpperCase() + winner.slice(1)} wins!`;
          result.textContent += ` ${playerChoice} beats ${computerChoice}.`;
        }
      }
    