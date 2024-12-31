let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


function resetGame() {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerHTML = ""; 
    });
    turn0 = true; 
    msgContainer.classList.add("hide"); 
}

function newGame() {
    resetGame();
  }

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", newGame);

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked")
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();

    });
});

const showWinner = (winner) => {
    msg.innerHTML = ` Player ${winner} wins`;
    msgContainer.classList.remove("hide");
}
const checkWinner = () => {
    winPatterns.forEach((pattern) => {
        let box1 = boxes[pattern[0]].innerText;
        let box2 = boxes[pattern[1]].innerText;
        let box3 = boxes[pattern[2]].innerText;

        if (box1 === box2 && box2 === box3 && box1 !== "") {
            console.log(`Player ${box1} wins!`);
            boxes.forEach((box) => {
                box.disabled = true;
            });
            showWinner(box1);
        }
    })
}

