const container     = document.getElementById('container');
const newGridButton = document.getElementById('newGrid');

let numberOfSquares = 4;
let isDrawing       = false;

newGridButton.addEventListener('click', askNumberOfSquares);

document.addEventListener('mousedown', () => {
    isDrawing = true;
});

document.addEventListener('mouseup', () => {
    isDrawing = false;
});

function createGrid() {

    const grid = document.createElement('div');
    grid.classList.add('grid');

    for(let i = 0; i < numberOfSquares; i++) {

        const row = document.createElement('div');
        row.classList.add('row');
        row.setAttribute('id', `row_${i + 1}`);

        for (let j = 1; j <= numberOfSquares; j++) {
            
            const column = document.createElement('div');
            column.classList.add('column');
            column.setAttribute('id', `column_${i + 1}_${j}`);

            row.appendChild(column);
        }

        grid.appendChild(row);
    }

    attachEventListener(grid, 'mouseover', changeBackgroundColor);

    container.appendChild(grid);
}

function removeGrid() {
    container.querySelector('div.grid').remove();
}

function askNumberOfSquares() {

    let newNumberOfSquares = 0;

    while (newNumberOfSquares !== null && (!+newNumberOfSquares || isNaN(+newNumberOfSquares) || +newNumberOfSquares < 0 || +newNumberOfSquares > 100)) {
        newNumberOfSquares = prompt("How many squares will the grid have on each side?\nMinimum: 0, maximum: 100.");
    }

    if (newNumberOfSquares === null) {
        return;
    }

    numberOfSquares = +newNumberOfSquares;

    removeGrid();
    createGrid();
}

function changeBackgroundColor(event) {
    if (isDrawing) {
        const color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        event.target.style.backgroundColor = color;
    }
}

function attachEventListener(element, eventType, callback) {
    element.addEventListener(eventType, callback);
}

createGrid();