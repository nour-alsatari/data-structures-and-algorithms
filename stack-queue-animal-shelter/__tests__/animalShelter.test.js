"use strict";

const AnimalShelter = require("../animalShelterClass");

describe("testing linked list", () => {

  it("Can enqueue animals", () => {
    const animalsh = new AnimalShelter();
    animalsh.enqueue("dog");
    expect(animalsh.first.specie).toEqual("dog");
  });

  it("Can dequeue animals", () => {
    const animalsh = new AnimalShelter();
    animalsh.enqueue("dog");
    animalsh.enqueue("cat");

    animalsh.dequeue();
    expect(animalsh.last.specie).toEqual("cat");
  });

 

});