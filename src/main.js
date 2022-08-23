//Import functions//
import data from "./data/harrypotter/data.js";
import {
  calculationAncestry,
  calculationHuman,
  filterBooks,
  getFilteredData,
  calculationSex,
} from "./data.js";

let selectedHouse = "";
let sortBy = "";

const housesContainer = document.querySelector("#contentHouses");
const homePageRoot = document.querySelector("#homepage");
const dataPage = document.querySelector("#dataPage");
const dataBooks = document.querySelector("#dataBooks");

function init() {
  dataPage.remove();
  dataBooks.remove();
}

init();

//Event buttons//
document.querySelectorAll(".houses-images").forEach((btn) => {
  btn.addEventListener("click", function (event) {
    if (event.target.classList.contains("gryffindor")) {
      selectedHouse = "Gryffindor";
      housesContainer.style.backgroundColor = "#530505";
    }
    if (event.target.classList.contains("slytherin")) {
      selectedHouse = "Slytherin";
      housesContainer.style.backgroundColor = "#2B6B2F";
    }
    if (event.target.classList.contains("ravenclaw")) {
      selectedHouse = "Ravenclaw";
      housesContainer.style.backgroundColor = "#205D6F";
    }
    if (event.target.classList.contains("hufflepuff")) {
      selectedHouse = "Hufflepuff";
      housesContainer.style.backgroundColor = "#957401";
    }
    renderFilteredData();
  });
});

document.querySelector("#selector-alphabetic").addEventListener("change", function (event) {
    sortBy = event.currentTarget.value;
    renderFilteredData();
  });

document.querySelector("#pagHome").addEventListener("click", function () {
  dataPage.remove();
  dataBooks.remove();
  document.body.append(homePageRoot);
});

document.querySelector("#pagCalculation").addEventListener("click", function () {
    homePageRoot.remove();
    dataBooks.remove();
    document.body.append(dataPage);
    renderStatistics();
  });

document.querySelector("#pagBooks").addEventListener("click", function () {
  homePageRoot.remove();
  dataPage.remove();
  document.body.append(dataBooks);
  renderBooks();
});

// Create div //
export function renderFilteredData() {
  const cardSection = document.querySelector(".cards");
  const filteredData = getFilteredData(data, selectedHouse, sortBy);
  const cardList = document.createDocumentFragment();
  filteredData.forEach(function (character) {
    const cardElement = document.createElement("div");
    cardElement.className = "card-1";
    cardElement.innerHTML = `
            <h2>${character.name}</h2>
            <p>House: ${character.house}</p>
            <p>Wand: ${character.wand}</p>
            <p>Patronus: ${character.patronus}</p>
        `;
    cardList.appendChild(cardElement);
  });
  cardSection.replaceChildren(cardList);
}

export function renderStatistics() {
  const container = document.createElement("section");
  container.className = "statistics";
  container.innerHTML = `
    <h1>Some fun facts about the movie</h1>
    <div class="data-card">
    <p>*¿Did you know that the ${calculationHuman(data)}% of living beings are Humans?</p>
    <p>*The Muggle theme is quite critical in Harry Potter. ¿Did you know that in the entire saga only ${calculationAncestry(data)}% are Muggles?</p>
    <p>*In the entire saga only ${calculationSex(data)}% are women </p>
    <img src="./Images/d1728fec95a41a01c99aceead563c3bf.gif" class="img-statistics">
    </div>
  `;
  dataPage.replaceChildren(container);
}

export function renderBooks() {
  const root = dataBooks.querySelector('.data-list');
  const container = document.createDocumentFragment();
  const resultBook = filterBooks(data);
  resultBook.forEach(function (books) {
    const card = document.createElement("div");
    card.className = "card-books";
    card.innerHTML = `
    <img src="./Images/autora-removebg-preview.png" class="autora">
      <h2>${books.title}</h2>
      <p> ${books.releaseDay}</p>
      <p>${books.description}</p>
  `;
  container.appendChild(card);
  });
  root.replaceChildren(container);
}

document.querySelector("#discoverMagic").addEventListener("click", function () {
  document.querySelector("#contentHome").style.display = "none";
  housesContainer.style.display = "flex";
});
