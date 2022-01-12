function addRow() {
    let grid = document.querySelector('.container');
    let newRow = document.createElement('div');
    let getRow = document.getElementsByClassName('row');
    let getCol = document.querySelectorAll('.col');
    
    console.log(getCol);
    newRow.classList.add('row');

    if (getRow.length == 0) {
        let newCol = document.createElement('div');
        newCol.classList.add('col');
        newCol.textContent = "Column"
        newCol.setAttribute('onclick', 'clickChange(this)')
        newRow.appendChild(newCol);
        grid.appendChild(newCol);
    }
    else {
        for (let i = 0; i < getCol.length / getRow.length; i++) {
            let newCol = document.createElement('div');
            newCol.classList.add('col');
            newCol.setAttribute('onclick', 'clickChange(this)')
            newCol.textContent = "Column"
            newRow.appendChild(newCol);
        }
    }

    grid.appendChild(newRow);

    console.log(grid)
}


function deleteRow() {
    let grid = document.querySelector('.container');
    let rows = document.getElementsByClassName('row');
    
    if(rows.length > 0)
        rows[rows.length - 1].remove();

    console.log(grid);
}

function addColumn() {
    let grid = document.querySelector('.container');
    let rows = document.getElementsByClassName('row');
    let col = document.getElementsByClassName('col');
    let newRow = document.createElement('div');
    
    if(col.length == 0) {
        newRow.classList.add('row');
        let newCol = document.createElement('div');
        newCol.classList.add('col');
        newCol.setAttribute('onclick', 'clickChange(this)')
        newCol.textContent = "Column"
        newRow.appendChild(newCol);
        grid.appendChild(newRow);
    } else {
        for (let i = 0; i < rows.length; i++) {
            let newCol = document.createElement('div');
            newCol.classList.add('col');
            newCol.setAttribute('onclick', 'clickChange(this)')
            newCol.textContent = "Column";
            rows[i].appendChild(newCol);
        }
    }

    console.log(grid);
}

function removeColumn() {
    let grid = document.querySelector('.container');
    let rows = document.getElementsByClassName('row');

    if (rows.length > 0) {
        for (let i = 0; i < rows.length; i++) {
            let col = rows[i].getElementsByClassName('col');
            if(col.length > 0) {
                col[col.length - 1].remove();
            } 
        }
    }

    console.log(grid)
}

function clickChange(clickColor) {
    let selectColor = document.getElementById('colorOption');
    let cellColor = selectColor.options[selectColor.selectedIndex].value;
    let getCol = document.querySelector('.col');

    console.log(selectColor);
    console.log(cellColor);

    clickColor.style.backgroundColor = cellColor;
}

function fillWhite() {
    let getCol = document.querySelectorAll('.col');
    let selectColor = document.getElementById('colorOption2');
    let cellColor = selectColor.options[selectColor.selectedIndex].value;

    for (let i = 0; i < getCol.length; i++) {
        if(getCol[i].style.backgroundColor == "") {
            getCol[i].style.backgroundColor = cellColor;
            console.log(getCol[i]);
        } else
            continue;
    }
}

function fillColor() {
    let getCol = document.querySelectorAll('.col');
    let selectColor = document.getElementById('colorOption3');
    let cellColor = selectColor.options[selectColor.selectedIndex].value;

    console.log(cellColor);

    for (let i = 0; i < getCol.length; i++) {
        getCol[i].style.backgroundColor = cellColor;
        console.log(getCol[i]);
    }
}