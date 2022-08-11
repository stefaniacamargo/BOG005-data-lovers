
import { getFilteredData } from "./data.js";
let selectedHouse = "";
let sortBy = "";

//Event buttons//
document.querySelectorAll(".houses-images").forEach((btn) => {
  btn.addEventListener("click", function (event) {
    if (event.target.classList.contains("gryffindor")) {
      selectedHouse = "Gryffindor";
    }
    if (event.target.classList.contains("slytherin")) {
      selectedHouse = "Slytherin";
    }
    if (event.target.classList.contains("ravenclaw")) {
      selectedHouse = "Ravenclaw";
    }
    if (event.target.classList.contains("hufflepuff")) {
      selectedHouse = "Hufflepuff";
    }
    renderFilteredData();
  });
});

document.querySelector('#selector-alphabetic').addEventListener('change', function (event) {
  sortBy = event.currentTarget.value;
  renderFilteredData();
});

// Create div //

const cardSection = document.querySelector(".cards");

function renderFilteredData() {
  const filteredData = getFilteredData(selectedHouse, sortBy);
  const cardList = document.createDocumentFragment();
  filteredData.forEach(function (character) {
    const cardElement = document.createElement("div");
    cardElement.className = "card-1";
    cardElement.innerHTML = `
            <p>Name: ${character.name}</p>
            <p>House: ${character.house}</p>
            <p>Wand: ${character.wand}</p>
            <p>Patronus: ${character.patronus}</p>
        `;
    cardList.appendChild(cardElement);
  });
  cardSection.replaceChildren(cardList);
}
//Part of none and block
document.getElementById("contentsBtn").addEventListener("click", viewHouses)

function viewHouses(){
  document.getElementById('home').style.display = 'none';
  document.getElementById('houses').style.display='block';
}
