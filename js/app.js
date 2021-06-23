
userReady();

function  userReady(){
    alert(`This is a rock, paper & scissor game`);
    let playGame = true;
    if(playGame){
        while(playGame){
            playGame = confirm('Do you want to play?');
            if(playGame){
                gameFlow();          
            }else {
                alert('Thank you for playing');
                break;
            }
            }
    }else{
        alert('Maybe Later');
    }
}

function getUserChoice(){
    return prompt(`Enter Rock, paper or Scissor`)
}

function getComputerChoice(){
    const choices = ['rock', 'paper','scissor'];
    return choices[Math.floor(Math.random()*3)];
}

function checkWinner(userChoice, computerChoice){
    return userChoice === computerChoice ? "Game Tie":
    ((userChoice === 'rock' && computerChoice === 'scissor') || 
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissor' && computerChoice === 'paper')) ? 
    'User Wins' : 'Computer Wins';
}

function gameFlow(){
    const userChoice = getUserChoice()?.toLowerCase();
    const computerChoice = getComputerChoice()

    alert(`Computer chose: ${computerChoice}, You chose: ${userChoice} : ${checkWinner(userChoice,computerChoice)}`);

}