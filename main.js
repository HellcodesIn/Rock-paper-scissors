//Extracting the elements
const ROCK = document.getElementById("rock");
const PAPER = document.getElementById("paper");
const SCISSORS = document.getElementById("scissors");
const YOU = document.querySelector("#player");
const AI = document.querySelector("#ai")
const RES = document.querySelector("#res");


//vars that change through out the program
let choices = ["Rock", "Paper", "Scissors"]
let youChoice;
let aiChoice;





//Event listeners
ROCK.addEventListener("click", () => {
  YOU.textContent = "You chose: Rock";
  youChoice = choices[0];
  setTimeout(aiDet, 3000)
})

PAPER.addEventListener("click", () => {
  YOU.textContent = "You chose: Paper";
  youChoice = choices[1];
  setTimeout(aiDet, 3000)
})

SCISSORS.addEventListener("click", () => {
  YOU.textContent = "You chose: Scissors";
  youChoice = choices[2];
  setTimeout(aiDet, 3000)
})


//a function to give aiChose it's value
function aiDet(){
  let imag1 = Math.random() * 2;
  let i = Math.round(imag1);
  aiChoice = choices[i]
  AI.textContent = "Ai Chose: " + aiChoice
  compare(youChoice, aiChoice)
}



//a function for comparing ai and you
function compare(c1, c2) {
  if (c1 == c2) {
    RES.textContent = "Its a tie!";
  }
  else if(c1 == choices[0]){
    if (c2 == choices[2]) {
      RES.textContent = "You won!";
    }
      else{
        RES.textContent = "You Lost!";
      }
    
  }
  
  else if(c1 == choices[1]){
    if(c2 == choices[0]){
      RES.textContent = "You Won!";
    }
    else{
      RES.textContent = "You Lost!";
    }
    
  }
  
  else if(c1 == choices[2])
  if (c2 == choices[1]) {
    RES.textContent = "You Won!";
  }
  else{
    RES.textContent = "You lost!"
  }
  
}
