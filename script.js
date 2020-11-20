


//document.getElementById("scisBtn").addEventListener("click", function(){
  //  playRound("scissors",computerPlay());
    
//} );

const prmpt = document.querySelector("#prompt");
const buttons = document.querySelectorAll('div.buttons button');
const playerPoints = document.querySelector('#pScore');
const computerPoints = document.querySelector('#cScore');
const round = document.querySelector("#round");
let playerCount = 0;
let computerCount = 0;
startGame();

function startGame() {
    buttons.forEach(button => {
      button.addEventListener('click', getPlayerChoice);
    });
  }
  
  
  
  function getPlayerChoice(e) {
    playerSelection = (e.target.value)
    playRound(playerSelection, computerPlay());
  }
  

function computerPlay(){
    let choices =[ "rock","paper","scissors"];
    let  index = Math.floor(Math.random() *  3);
    return choices[index];
}

function playRound(playerSelection,computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let message = "";

    if (player == computer)
    {
        message = "It is a Tie!";
    }
    else
    {
        if (player =="paper")
        {
            if(computer == "scissors")
            { 
                message = "You lose! Scissors beat Paper";
                computerPoints.textContent = computerCount++;
            }
            else if(computer == "rock")
            {
                message = "You win! Paper beats Rock";
                playerPoints.textContent = playerCount++; 
            }
        
        }
        else if (player == "scissors")
        {
            if(computer == "paper")
            { 
                message = "You win! Scissors beat Paper";
                playerPoints.textContent = playerCount++;  
            }
            else if(computer == "rock")
            {
                message = "You lose! Rock beats Scissors";
                computerPoints.textContent = computerCount++;
            }
        }
        else if (player == "rock")
        {
            if(computer == "paper")
            { 
                message = "You lose! Paper beats Rock";
                computerPoints.textContent = computerCount++;
            }
            else if(computer == "scissors")
            {
                message = "You win! Rock beats Scissors";
                playerPoints.textContent = playerCount++;  
            }
        
        }
    }

    prmpt.textContent = message;
    let roundCount = parseFloat(playerCount) + parseFloat(computerCount);
    round.textContent = "Round: " + roundCount;
    checkWinner();

}


function checkWinner(){
 
    if(playerCount == 5 && computerCount == 5)
    {
        prmpt.textContent = "The game is a tie! Nobody wins ";
        location.reload()
    }
    else if(playerCount == 5)
    {
        prmpt.textContent = "You have won!! ";
        prmpt.textContent += "The score is "+playerCount+" to "+computerCount;
        prmpt.textContent += ". Congradulations !!";
        location.reload()

    }
    else if (computerCount == 5)
    {
        prmpt.textContent = "Ha Ha. You have Lost!! ";
        prmpt.textContent += "The score is "+computerCount+" to "+playerCount;
        prmpt.textContent += ". Better luck next time";
        location.reload()
    }

}

