function makeGrid(size){
    const board = document.querySelector('.board');
    board.setAttribute('style',
                        `display: grid; height: 500px; width: 500px; grid-template-columns: repeat(${size},1fr); grid-template-rows: repeat(${size},1fr)`);

    amount = size * size;
    for (let i = 0;i < amount;i++){
        let squares = document.createElement('div');
        squares.setAttribute('style','background-color: black');
        squares.addEventListener('mouseenter', () => squares.setAttribute('style',
                                                                            'background-color: white'));
        squares.addEventListener('mouseleave', () => squares.setAttribute('style',
                                                                            'background-color: white'));                                                                    
        board.insertAdjacentElement("beforeend", squares);
    }
}

function inputGridSize(amount){
    if (amount >= 1  || amount <= 100){
        makeGrid(amount);
    } else {
        alert('Invalid Amount of Squares');
    }
}

makeGrid(16);

const inputs = document.querySelector('.inputSlider');

inputs.forEach(input => input.addEventListener('change'));
inputs.forEach(input => input.addEventListener('mousemove'));