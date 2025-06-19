let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector(".new-game");
let winnerMsg = document.querySelector(".msg");
let turnO = true;
let title = document.querySelector(".title");
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = () => {
    turnO = "true";
    enableBoxes();
    newGameBtn.classList.add("hide");
    winnerMsg.classList.add("hide");
}
boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText = "O";
            box.style.color = "red";
            turnO = false;
        } else{
            box.style.color = "blue";
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText  = "";
    }
}

const showWinner = (winner) => {
    winnerMsg.innerText = `Winner is ${winner}`;
    newGameBtn.classList.remove("hide");
    winnerMsg.classList.remove("hide");
}
const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val === pos2val && pos2val == pos3val){
                winnerMsg.innerText = `winner is ${pos1val}`;
                disableBoxes();
                showWinner(pos1val);
            }
        }
    }
};

newGameBtn.addEventListener("click", () => {
    resetgame();
});

resetBtn.addEventListener("click", () => {
    resetgame();
})
