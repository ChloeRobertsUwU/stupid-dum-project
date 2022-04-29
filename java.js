const choices = ["rock","paper","scissors"]

function game() {
    for(let i = 0; i <= 5; i++){
        playRound();
    }
}

function computerplay() {
    playRound();

}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    console.log(computerSelection);
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner)

}

function playerChoice() {
    let input = prompt('type rock paper or fart')
    while(input == null){
        input = prompt("pick one of the words shithead")
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
       input = prompt("UwU")
       input = input.toLowerCase();
       check = validateInput;
       
    }
console.log(input);
    
    
}

function computerChoice() {
    return choices[Math.floor(Math.random()*3)]
}


function validateInput(choice) {
    return choices.includes(choice);

}

function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return 'tie';
    } else if(
    (choiceP === "rock" && choiceC == "scissors") || 
    (choiceP === "paper" && choiceC == "rock") || 
    (choiceP === "scissors" && choiceC == "paper")){
        return 'player';
    } else{
        return 'computer'
    }
}
        
    
    
    

game();