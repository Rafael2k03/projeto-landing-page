// Getting references to elements
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const leonardo = document.getElementById("leonardo");
const samantha = document.getElementById("samantha");
const bruna = document.getElementById("bruna");

// Function to scroll to the right
function scrollRight() {
    leonardo.style.display = "none";
    bruna.style.display = "flex";
    leftArrow.style.display = "flex";
    leftArrow.style.marginTop = "30%";
    rightArrow.style.display = "none";
}

// Function to scroll to the left
function scrollLeft() {
    leonardo.style.display = "flex";
    bruna.style.display = "none";
    rightArrow.style.display = "flex";
    leftArrow.style.display = "none";
}
