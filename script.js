const container = document.getElementById('container');

function createGrid() {

    const numberOfRows    = 4;
    const numberOfColumns = 4;

    for(let i = 1; i <= numberOfRows; i++) {

        const row = document.createElement('div');
        row.classList.add('row');
        row.setAttribute('id', `row_${i}`);

        for (let j = 1; j <= numberOfColumns; j++) {
            
            const column = document.createElement('div');
            column.classList.add('column');
            column.setAttribute('id', `column_${i}_${j}`);

            row.appendChild(column);
        }

        container.appendChild(row);
    }
}

createGrid();