class Team {
  constructor() {
    this.persons = {
      Bowman: {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      Daemon: {
        name: 'Демон',
        type: 'Daemon',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
    };
  }

  * [Symbol.iterator]() {
    const properties = Object.entries(this);
    for (let count = -1; count <= properties.length; count += 1) {
      yield properties[count];
    }
  }
}
const person = new Team();
console.log(person);
