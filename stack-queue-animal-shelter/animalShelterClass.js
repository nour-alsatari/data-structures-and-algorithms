const Queue = require("../stack-and-queue/queue");

class AnimalShelter {
  constructor() {
    this.catsQueue = new Queue();
    this.dogsQueue = new Queue();
  }


  enqueue(animal) {
    if (animal == "cat") {
      const newCat = this.catsQueue.enqueue(animal);
    } else if (animal == "dog") {
      const newDog = this.dogsQueue.enqueue(animal);
    } else {
      return "sorry this is only for dogs and cats";
    }
  }

  dequeue(pref) {
    if (pref == "cat") {
      this.catsQueue.dequeue();
      return pref;
    } else if (pref == "dog") {
      this.catsQueue.dequeue();
      return pref;
    } else {
      return null;
    }
  }
}

let shelter = new AnimalShelter();
shelter.enqueue("dog");
console.log(shelter.dequeue("cat"));
module.exports = AnimalShelter;
