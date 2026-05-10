const sortBtn = document.querySelector(".Sort-by");
const popup = document.getElementById("filterPopup");

const options = document.querySelectorAll(".filter-option");

const companyCards = [
    document.getElementById("card1"),
    document.getElementById("card2"),
    document.getElementById("card3"),
    document.getElementById("card4"),
];

const peopleCards = [
    document.getElementById("card5"),
    document.getElementById("card6"),
    document.getElementById("card7"),
    document.getElementById("card8"),
];

const allCards = [...companyCards, ...peopleCards];



sortBtn.onclick = (e) => {
    e.stopPropagation();
    popup.classList.toggle("show");
};



popup.onclick = (e) => {
    e.stopPropagation();
};



document.onclick = () => {
    popup.classList.remove("show");
};



options.forEach(option => {

    option.onclick = () => {

        const filter = option.dataset.filter;


        if (filter === "all") {

            allCards.forEach(card => {
                card.style.display = "flex";
            });

        }


        else if (filter === "people") {

            companyCards.forEach(card => {
                card.style.display = "none";
            });

            peopleCards.forEach(card => {
                card.style.display = "flex";
            });

        }


        else if (filter === "companies") {

            peopleCards.forEach(card => {
                card.style.display = "none";
            });

            companyCards.forEach(card => {
                card.style.display = "flex";
            });

        }

    };

});
