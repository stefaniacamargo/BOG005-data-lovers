import { orderByName, getFilteredData, calculationHuman} from '../src/data.js';

const dataPrueba =  {
  characters: [
    {
      "id": 2,
      "name": "Harry Potter",
      "wand": null,
      "patronus": null,
      "house": "Gryffindor",
    },
    {
      "id": 2,
      "name": "Stewart Ackerley",
      "birth": "between 1 September 1982and 31 August 1983",
      "death": null,
      "species": "Human",
      "ancestry": null,
      "gender": "Male",
      "hair_color": null,
      "eye_color": null,
      "wand": null,
      "patronus": null,
      "house": "Ravenclaw",
      "associated_groups": [],
      "books_featured_in": [4]
    },
    {
      "id": 267,
      "name": "Draco Malfoy",
      "birth": "5 June, 1980",
      "death": null,
      "species": "Human",
      "ancestry": "Pure-blood",
      "gender": "Male",
      "hair_color": "Silver-blonde",
      "eye_color": "Grey",
      "wand": "10\", Hawthorn, unicorn hair (formerly)",
      "patronus": "None",
      "house": "Slytherin",
      "associated_groups": [],
      "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
    },
    {
      "id": 367,
      "name": "Newton Scamander",
      "birth": "24 February 1897",
      "death": null,
      "species": "Human",
      "ancestry": "Pure-blood or Half-blood",
      "gender": "Male",
      "hair_color": "Red brown",
      "eye_color": "Blue",
      "wand": "Unknown length, wood and core",
      "patronus": null,
      "house": "Hufflepuff",
      "associated_groups": [
        "Scamander family",
        "Goldstein family",
        "Hogwarts School of Witchcraft and Wizardry",
        "Hufflepuff",
        "Albus Dumbledore",
        "British Ministry of Magic",
        "Department for the Regulation and Control of Magical Creatures",
        "Beast Division",
        "Order of Merlin"
      ],
      "books_featured_in": [1]
    },
  ],
}   

describe('Harry Potter filter data tests', () => {
  it('orderByName should be a function', () => {
    expect(typeof orderByName).toBe('function');
  });

  it('orderByName should order data from A-Z', () => {
    const filteredData = orderByName(dataPrueba.characters, 'az');
    expect(filteredData[0].name).toBe('Draco Malfoy');
  });

  it('orderByName should order data from Z-A', () => {
    const filteredData = orderByName(dataPrueba.characters, 'za');
    expect(filteredData[0].name).toBe('Stewart Ackerley');
  });

  it('orderByName should order data from A-Z when no parameter is provided', () => {
    const filteredData = orderByName(dataPrueba.characters);
    expect(filteredData[0].name).toBe('Draco Malfoy');
  });

  it('getFilteredData should be a function', () => {
    expect(typeof getFilteredData).toBe('function');
  });

  it('getFilteredData should return only Gryffindor', () => {
    const filteredData = getFilteredData(dataPrueba, 'Gryffindor');
    const isOnlyGryffindor = filteredData.every(character => character.house === 'Gryffindor');
    expect(isOnlyGryffindor).toBe(true);
  });

  it('getFilteredData should return only Slytherin',() => {
    const filteredData = getFilteredData(dataPrueba, 'Slytherin');
    const isOnlySlytherin = filteredData.every(character => character.house === 'Slytherin');
    expect(isOnlySlytherin).toBe(true);
  });

  it('getFilteredData should return only Hufflepuff',() => {
    const filteredData = getFilteredData(dataPrueba, 'Hufflepuff');
    const isOnlyHufflepuff = filteredData.every(character => character.house === 'Hufflepuff');
    expect(isOnlyHufflepuff).toBe(true);
  });

  it('getFilteredData should return only Ravenclaw',() => {
    const filteredData = getFilteredData(dataPrueba, 'Ravenclaw');
    const isOnlyRavenclaw = filteredData.every(character => character.house === 'Ravenclaw');
    expect(isOnlyRavenclaw).toBe(true);
  });

  it('calculationHuman should return only Human', () => {
    const filteredData = calculationHuman(dataPrueba, 'species');
    const isOnlyHuman = filteredData.every(character => character.species === 'Human');
    expect(isOnlyHuman).toBe(true);
  });
})


