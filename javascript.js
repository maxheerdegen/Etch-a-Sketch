const container = document.querySelector(".container");

for (let index = 1; index <= (16 * 16); index++) {
    const square = document.createElement("div");
    square.style.width = "40px"
    square.style.height = "40px"
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    })
    container.appendChild(square);
}
