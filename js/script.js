const btn = document.getElementById("btn-sider");
const aside = document.querySelector("aside");

btn.addEventListener("click", (e) => {
  e.stopPropagation();
  aside.classList.toggle("show");
  if (aside.classList.contains("show")) {
    btn.classList.remove("fa-bars");
    btn.classList.add("fa-times");
  } else {
    btn.classList.remove("fa-times");
    btn.classList.add("fa-bars");
  }
});

aside.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("click", () => {
  aside.classList.remove("show");
  btn.classList.remove("fa-times");
  btn.classList.add("fa-bars");
});
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  const header = accordion.querySelector(".accordion-header");

  header.addEventListener("click", (e) => {
    e.stopPropagation();

    accordions.forEach((item) => {
      if (item !== accordion) {
        item.classList.remove("active1");
      }
    });

    accordion.classList.toggle("active1");
  });
});

document.addEventListener("click", () => {
  accordions.forEach((item) => {
    item.classList.remove("active1");
  });
});

accordions.forEach((accordion) => {
  accordion.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});


const data = [
  {
    image: "../images/Rectangle 13121221128.png",
    name: "Jonathan Seth",
    job: "Founder, CEO, Com.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },

  {
    image: "../images/photo_2026-05-09_20-56-03.jpg",
    name: "Ammar Al-Mahoud",
    job: "Company manager",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },

  {
    image: "../images/photo_2026-05-09_20-56-19.jpg",
    name: "Ammar Al-Mahoud",
    job: "Web Developer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
  }
];

let current = 0;

const personImage = document.getElementById("personImage");
const personName = document.getElementById("personName");
const personJob = document.getElementById("personJob");
const personText = document.getElementById("personText");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function showPerson(index) {

  personImage.src = data[index].image;
  personName.textContent = data[index].name;
  personJob.textContent = data[index].job;
  personText.textContent = data[index].text;

}

nextBtn.addEventListener("click", () => {

  current++;

  if (current >= data.length) {
    current = 0;
  }

  showPerson(current);

});

prevBtn.addEventListener("click", () => {

  current--;

  if (current < 0) {
    current = data.length - 1;
  }

  showPerson(current);

});
