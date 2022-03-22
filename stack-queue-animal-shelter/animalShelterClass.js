// a queue

class Animal {
    constructor(specie) {
       this.specie = specie
       this.next = null 
     }
   }

class AnimalShelter {
    constructor (){
        this.first = null
        this.last = null
        this.size = 0
    }

    isEmpty() {
        return !this.size
      }

      enqueue(animal) {
        const newNode = new Animal(animal)
   
        if (this.isEmpty()) {
          this.first = newNode
          this.last = newNode
        }
        else {
          this.last.next = newNode
          this.last = newNode
        }
        this.size++
        return this 
      }

      dequeue() {

        
        const animalToBeRemoved = this.first
   
        if (this.first === this.last) {
          this.last = null
        }
        this.first = this.first.next
        this.size--
        if (animalToBeRemoved.specie == 'dog' || animalToBeRemoved.specie == 'cat')
        return animalToBeRemoved
        else return null
      }
}

module.exports = AnimalShelter;