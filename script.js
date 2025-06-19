    let boxes = document.querySelectorAll(".box");
    let resetBtn = document.querySelector("#reset-btn");
    let newGameBtn = document.querySelector(".new-game");
    let winnerMsg = document.querySelector(".msg");
    let turnO = true;
    let title = document.querySelector(".title");
    let count = 0;
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
        turnO = true;
        enableBoxes();
        newGameBtn.classList.add("hide");
        winnerMsg.classList.add("hide");
        count = 0;
    }
    boxes.forEach((box) =>{
        box.addEventListener("click",() => {
            if(turnO){
                box.innerText = "O";
                box.style.color = "red";
                turnO = false;
            } else{
                box.innerText = "X";
                box.style.color = "blue";
                turnO = true;
            }
            count++;
            box.disabled = true;
            checkWinner();

            if(count === 9){
                winnerMsg.innerText = "Draw";
                winnerMsg.classList.remove("hide");
                disableBoxes();
                count=0;
            }
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
            box.style.color = "";
        }
    }


    const checkWinner = () =>{
        for(let pattern of winPatterns){
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if(pos1val!="" && pos2val!="" && pos3val!=""){
                if(pos1val === pos2val && pos2val == pos3val){
                    disableBoxes();
                    showWinner(pos1val);
                }
            }
        }
    };

    const showWinner = (winner) => {
            winnerMsg.innerText = `Winner is ${winner}`;
            newGameBtn.classList.remove("hide");
            winnerMsg.classList.remove("hide");
    }
    newGameBtn.addEventListener("click", () => {
        resetgame();
    });

    resetBtn.addEventListener("click", () => {
        resetgame();
    });
