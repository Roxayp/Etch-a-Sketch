// create a 16x16 grid
// const container = document.getElementById("grid-container");

// for (let i = 0; i < 16; i++) {
//     const row = document.createElement("div");
//     row.classList.add("row");

//     for (let j = 0; j < 16; j++) {
//         const cell = document.createElement("div");
//         cell.classList.add("cell");
//         row.appendChild(cell);
//     }

//     container.appendChild(row);
// }

function makeGrid() {
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;
    const container = document.getElementById("grid-container");

    for (let i = 0; i < height; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < width; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }

        container.appendChild(row);
    }
    document.getElementById("btnClear").style.display = "inline";
    document.getElementById("btnCreate").style.display = "none";
}
// create a button that clears the grid and asks the user for a new grid size
function clearGrid() {
    const container = document.getElementById("grid-container");
    document.getElementById("inputHeight").value = "1";
    document.getElementById("inputWidth").value = "1";
    container.innerHTML = "";

    document.getElementById("btnClear").style.display = "none";
    document.getElementById("btnCreate").style.display = "inline";
}
// create a function that changes the color of the grid when the mouse hovers over it
// Done in CSS


// create a button that changes the color of the grid to a chosen color on click
const colorPicker = document.getElementById("colorPicker");
const cells = document.getElementsByClassName("cell");

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function() {
            cells[i].style.backgroundColor = colorPicker.value;
        });
    }



// create a button that changes the color of the grid to a black and white gradient

// create a button that changes the color of the grid to a rainbow gradient

