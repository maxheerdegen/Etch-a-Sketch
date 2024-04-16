function chooseSquares() {
    let numberOfSquares = +prompt("Number of squares per side? (max. 100)")
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    setSquares(numberOfSquares);
}

function setSquares(numberOfSquares) {
    let squareMeasures = `${640/numberOfSquares}px`;

    for (let index = 1; index <= (numberOfSquares ** 2); index++) {
    const square = document.createElement("div");
    square.style.width = squareMeasures;
    square.style.height = squareMeasures;
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    })
    container.appendChild(square);
    }
}

const container = document.querySelector(".container");
setSquares(16);

