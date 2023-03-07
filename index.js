const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info")
const newGamebtn = document.querySelector(".btn");

let currentPlayer; 
let gameGrid;

const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


function initGame() {
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    newGamebtn.classList.remove("active");
    gameInfo.innerHTML = `Current player -  ${currentPlayer}`
}
initGame()

function swapTurn () {
    if(currentPlayer ==="X") {
        currentPlayer = "0"
    }else{
        currentPlayer = "X"
    }
        //UI Update
        gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

function handleClick(index) {
    if(gameGrid[index] === "") {
        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
       
        // swap karo turn ko 
        swapTurn();

        //check koi jeet toh nahi gya
        checkGameOver();
    }
}


boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index)
    })
})
newGameBtn.addEventListener("click", initGame);