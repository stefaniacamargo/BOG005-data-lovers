import {functionGryffindor} from '../src/data.js';

const datosPrueba =[
  {
    name:"Euan Abercrombie",
    house:"Gryffindor",
    wands:null,
    patronus:null,
  },
]
describe('functionGryffindor', () => {
  it('is a function', () => {
    expect(typeof functionGryffindor).toBe('function');
  });
  it('returns `characters`', () => {
    expect(functionGryffindor(datosPrueba, "house")).toEqual('');
  });
});
console.log(datosPrueba)
