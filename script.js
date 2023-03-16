const board = document.querySelector('.board');
board.setAttribute('style',
                    'display: grid; height: 500px; width: 500px; grid-template-columns: repeat(16,1fr); grid-template-rows: repeat(16,1fr)');
for (let i = 0;i < 256;i++){
    let squares = document.createElement('div');
    squares.setAttribute('style','background-color: black');
    squares
    board.insertAdjacentElement("beforeend", squares);
}