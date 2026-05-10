const plusBtn = document.querySelector(".fa-add");
const minusBtn = document.querySelector(".fa-minus");
const counter = document.querySelector(".add-minus h5");

let number = parseInt(counter.innerText);

plusBtn.addEventListener("click", () => {
    number++;
    counter.innerText = number;
});

minusBtn.addEventListener("click", () => {
    if (number > 0) {
        number--;
        counter.innerText = number;
    }
});

const mark = document.querySelector(".mark");

mark.addEventListener("click", () => {
    mark.classList.toggle("active");
});