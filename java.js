const choices = ["rock","paper","scissors"]

function computerplay() {
    playRound();

}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
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
    
    
}

function computerChoice() {
    return choices[Math.floor(Math.random()*3)]
}


function validateInput(choice) {
    return choices.includes(choice);

}
computerplay();