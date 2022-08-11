import data from "./data/harrypotter/data.js";

//filter characters for houses

const functionGryffindor = () => {
  return data.characters.filter(
    (character) => character.house && character.house.includes("Gryffindor")
  );};
const functionSlytherin = () => {
  return data.characters.filter(
    (character) => character.house && character.house.includes("Slytherin")
  );
  };
const functionRavenclaw = () => {
  return data.characters.filter(
    (character) => character.house && character.house.includes("Ravenclaw")
  );
};
const functionHufflepuff = () => {
  return data.characters.filter(
    (character) => character.house && character.house.includes("Hufflepuff")
  );
};
/**
 * @param {"az" | "za"} sortBy
 * @returns 
 */
const orderByName = (filteredData, sortBy) => {
  switch (sortBy) {
    case "za":
      return filteredData.sort(function (a, b) {
        return b.name.localeCompare(a.name);
      });
    case "az":
    default:
      return filteredData.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
  }
};
/**
 * 
 * @param {"Gryffindor" | "Slytherin" | "Ravenclaw" | "Hufflepuff"} house 
 * @param {"az" | "za"} sortBy 
 */
export const getFilteredData = (house, sortBy = null) => {
  let filteredData = [];
  switch (house) {
    case "Gryffindor":
      filteredData = functionGryffindor();
      break;
    case "Slytherin":
      filteredData = functionSlytherin();
      break;
    case "Ravenclaw":
      filteredData = functionRavenclaw();
      break;
    case "Hufflepuff":
      filteredData = functionHufflepuff();
      break;
  }
  if (sortBy) {
    filteredData = orderByName(filteredData, sortBy);
  }
  return filteredData;
};