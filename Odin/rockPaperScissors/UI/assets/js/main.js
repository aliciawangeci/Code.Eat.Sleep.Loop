
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

function computerPlay(){
  let options = ["rock", "paper", "scissors"];
  let num = Math.floor(Math.random() * 3);
  return options[num];
}

const PaperRockScissors = (PlayerSelection, computerSelection) => {
    if (PlayerSelection == "rock" && computerSelection == "rock"){
      return "It's Tie";
    } else if (PlayerSelection == "paper" && computerSelection == "paper") {
      return "It's Tie";
    } else if (PlayerSelection == "scissors" && computerSelection == "scissors") {
      return "It's Tie";
    } else if (PlayerSelection == "rock" && computerSelection == "paper") {
      return "You Lose! Paper Covers Rock";
    } else if (PlayerSelection == "rock" && computerSelection == "scissors") {
      return "You win! Rock blunts scissors";
    } else if (PlayerSelection == "paper" && computerSelection == "rock") {
      return "You win! Paper covers rock";
    } else if (PlayerSelection == "paper" && computerSelection == "scissors") {
      return "You Lose! Scissors cut paper";
    } else if (PlayerSelection == "scissors" && computerSelection == "rock") {
      return "You Lose! Rock blunts scissors";
    } else if (PlayerSelection == "scissors" && computerSelection == "paper") {
      return "You Win! Scissors cut paper";
    } else {
      return "Somethings mysterious might have happened. RePlay!";
    }
  }

function Play(e){
  let computerResults = computerPlay();
  let results = PaperRockScissors(e.target.id, computerResults);
  document.querySelector(".computerResults").innerHTML = computerResults;
  document.querySelector(".playerResults").innerHTML = e.target.id;
  document.querySelector(".results").innerHTML = results;
}

rockBtn.addEventListener('click', Play);
paperBtn.addEventListener('click', Play);
scissorsBtn.addEventListener('click', Play);