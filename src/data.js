/**
 * @param {"az" | "za"} sortBy
 * @returns
  */
export const orderByName = (filteredData, sortBy) => {
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
export const getFilteredData = (data, house, sortBy = null) => {
  let filteredData = [];
  switch (house) {
    case "Gryffindor":
      filteredData = data.characters.filter(
        (character) => character.house && character.house.includes("Gryffindor")
      );
      break;
    case "Slytherin":
      filteredData = data.characters.filter(
        (character) => character.house && character.house.includes("Slytherin")
      );
      break;
    case "Ravenclaw":
      filteredData = data.characters.filter(
        (character) => character.house && character.house.includes("Ravenclaw")
      );
      break;
    case "Hufflepuff":
      filteredData = data.characters.filter(
        (character) => character.house && character.house.includes("Hufflepuff")
      );
      break;
  }

  if (sortBy) {
    filteredData = orderByName(filteredData, sortBy);
  }

  return filteredData;
};

export const calculationHuman = (data) => {
  let speciesResult = data.characters.filter(
    (character) => character.species && character.species.includes("Human")
  );
  let percentage = (speciesResult.length * 100) / data.characters.length;
  return Math.floor(percentage);
};

export const calculationSex = (data) => {
  let sexResult = data.characters.filter(
    (character) => character.gender && character.gender.includes("Female")
  );
  let percentageFemale = (sexResult.length * 100) / data.characters.length;
  return Math.floor(percentageFemale);
};

export const calculationSexM = (data) => {
  let sexResultMale = data.characters.filter(
    (character) => character.gender && character.gender.includes("Male")
  );
  let percentageMale = (sexResultMale.length * 100) / data.characters.length;
  return Math.floor(percentageMale);
};

export const calculationAncestry = (data) => {
  let ancestryResult = data.characters.filter(
    (character) => character.ancestry && character.ancestry.includes("Muggle")
  );
  let percentageAncestry = (ancestryResult.length * 100) / data.characters.length;
  return Math.floor(percentageAncestry);
};


export const filterBooks = (data) => {
  let resultBook = data.books.filter((book) => book);
  return resultBook;
};
