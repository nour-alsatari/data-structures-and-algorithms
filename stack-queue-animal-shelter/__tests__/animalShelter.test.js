"use strict";

const AnimalShelter = require("../animalShelterClass");

describe("animal shelter", () => {

  it("Can enqueue animals", () => {
    const animalsh = new AnimalShelter();
    animalsh.enqueue("dog");
    console.log(animalsh);
    expect(animalsh.dogsQueue.front.value).toEqual("dog");
  });

  it("Can dequeue dogs", () => {
    const animalsh = new AnimalShelter();
    animalsh.enqueue("dog");
    animalsh.enqueue("cat");

   let dequeued=  animalsh.dequeue('dog');
    expect(dequeued).toEqual("dog");
  });

  it("Can dequeue cats", () => {
    const animalsh = new AnimalShelter();
    animalsh.enqueue("dog");
    animalsh.enqueue("cat");

   let dequeued=  animalsh.dequeue('cat');
    expect(dequeued).toEqual("cat");
  });


  it("return null if dequeue something other than cats or dogs", () => {
    const animalsh = new AnimalShelter();
    animalsh.enqueue("dog");
    animalsh.enqueue("cat");

   let dequeued=  animalsh.dequeue('dolphin');
    expect(dequeued).toBeNull();
  });

  it("return sorry this is only for dogs and cats if enqueue something other than dogs or cats", () => {
    const animalsh = new AnimalShelter();
    let x = animalsh.enqueue("dolphin");

   let dequeued=  animalsh.dequeue('dolphin');
    expect(x).toEqual("sorry this is only for dogs and cats")
  });
 

});