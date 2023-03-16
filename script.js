const container = document.querySelector('.container');
container.setAttribute('style', 'display: flex; align-items: center; flex-direction: column;')
let color = 'black';

function makeGrid(size){
    const board = document.querySelector('.board');
    board.setAttribute('style',
                        `display: grid; height: 250px; width: 250px; grid-template-columns: repeat(${size},1fr); grid-template-rows: repeat(${size},1fr)`);
    amount = size * size;
    for (let i = 0;i < amount;i++){
        let squares = document.createElement('div');
        squares.addEventListener('mouseenter', colorSquare);
        squares.addEventListener('mouseleave', colorSquare);
        squares.setAttribute('style','background-color: white');                                                                   
        board.insertAdjacentElement("beforeend", squares);
    }
}

function inputGridSize(amount){
    if (amount >= 1  || amount <= 30){
        makeGrid(amount);
    } else {
        alert('Invalid Amount of Squares');
    }
}

const input = document.querySelector('.inputSlider');

function handleUpdate(){
    inputGridSize(this.value);
}

input.addEventListener('change', handleUpdate);
input.addEventListener('mousemove', handleUpdate);

function colorSquare(){
    if (color === 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard(){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}