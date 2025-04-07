import { machineThinking } from "./computer.js";
import { userAgainstMachine } from "./rules.js";

const allOptions = {
    1: "rock",
    2: "paper",
    3: "scissors"
};

let userOp = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const btnAgain = document.getElementById("btn-again");

btnAgain.addEventListener("click", () => {
    handleOptions(0, "reset");
    nextStep(1);
});

rock.addEventListener("click", () => {
    userOp = 1;
    startGame();
});

paper.addEventListener("click", () => {
    userOp = 2;
    startGame();
});

scissors.addEventListener("click", () => {
    userOp = 3;
    startGame();
});

function init(){
    if (document.cookie){
        document.cookie = `points=${Number(document.cookie.split("=")[1]) ?? 0}`;
    }
    else{
        document.cookie = `points=0`;
    }
    document.getElementsByClassName("score-v")[0].innerText = Number(document.cookie.split("=")[1]);
    if (innerWidth < 750 && innerWidth > 500){
        document.getElementById("btn-again").style.width = `${innerWidth / 3.75}px`;
    }
    else if(innerWidth < 500){
        document.getElementById("footer-modal").style.display = "block";
        document.getElementById("the-x-close").style.display = "none";
        document.getElementById("btn-again").style.width = `${innerWidth / 1.85}px`;
    }
    else{
        document.getElementById("footer-modal").style.display = "none";
        document.getElementById("btn-again").style.width = `${innerWidth / 5.65}px`;
    }

}

function addUltraMegaSuperShadow(id_html){
    const target = document.getElementById(id_html);
    const newDiv = document.createElement("div");
    const shadows = [document.createElement("div"), document.createElement("div"), document.createElement("div")];
    for (const e of shadows){
        e.classList.add(`s-${shadows.indexOf(e) + 1}`);
        newDiv.append(e);
    }
    newDiv.classList.add("mega-shadow");
    target.append(newDiv);
}

function nextStep(step = 1){
    if (step == 1){
        document.getElementsByClassName("step-2")[0].classList.add("no-show");
        document.getElementsByClassName("step-1")[0].classList.remove("no-show");
    }
    if (step == 2){
        document.getElementsByClassName("step-1")[0].classList.add("no-show");
        document.getElementsByClassName("step-2")[0].classList.remove("no-show");
        document.getElementById("machineOp").classList.add("animate__animated", "animate__fadeIn");
        document.getElementById("userOp").classList.add("animate__animated", "animate__fadeIn");

        // document.getElementById("result").style.width = "50%";
    }
}

function playAgain(){
    const megaShadows = document.getElementsByClassName("mega-shadow")[0];
    const machineOp = document.getElementById("machine");
    const userOp = document.getElementById("user");
    if (megaShadows?.parentNode == machineOp) machineOp.removeChild(megaShadows);
    if (megaShadows?.parentNode == userOp) userOp.removeChild(megaShadows);
    
    const machineOpDiv = document.getElementById("machineOp");
    machineOpDiv.classList.remove("rock", "paper", "scissors");
    machineOpDiv.children[0].src = ``;

    const userOpDiv = document.getElementById("userOp");
    userOpDiv.classList.remove("rock", "paper", "scissors");
    userOpDiv.children[0].src = ``;

    document.getElementsByClassName("win-lose")[0].innerText = "YOU";
}

function handleOptions(op, who){
    if (who == "machine"){
        const machineOpDiv = document.getElementById("machineOp");
        machineOpDiv.classList.add(allOptions[op]);
        machineOpDiv.children[0].src = `./images/icon-${allOptions[op]}.svg`
    }
    if (who == "user"){
        const userOpDiv = document.getElementById("userOp");
        userOpDiv.classList.add(allOptions[op]);
        userOpDiv.children[0].src = `./images/icon-${allOptions[op]}.svg`
    }
    if(who == "reset" && op == 0){
        playAgain();
    }
}

function startGame() {
    nextStep(2);
    const machineOp = machineThinking();
    handleOptions(machineOp, "machine");
    handleOptions(userOp, "user");
    const winLose = document.getElementsByClassName("win-lose")[0];
    const doesUserWin = userAgainstMachine(userOp, machineOp);

    winLose.innerText = doesUserWin && (userOp != machineOp) ? "YOU WIN" : userOp == machineOp ? "TIE" : "YOU LOSE";
    let points = Number(document.cookie.split("=")[1]);

    if (doesUserWin && (userOp != machineOp)){
        addUltraMegaSuperShadow("user");
        points++;
        document.getElementsByClassName("score-v")[0].innerText = points;
        document.cookie = `points=${points}`;
    }
    else{
        if (!(userOp == machineOp)) {
            addUltraMegaSuperShadow("machine");
            points = points == 0 ? points : (points - 1);
        }
        document.getElementsByClassName("score-v")[0].innerText = points;
        document.cookie = `points=${points}`;
    }
};






// START ENGINES
init();
nextStep();