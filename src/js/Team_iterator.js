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

  [Symbol.iterator]() {
    const properties = Object.entries(this);
    let count = -1;
    return {
      next() {
        count += 1;
        const result = {
          done: count >= properties.length,
          value: properties[count],
        };
        return result;
      },
    };
  }
}
const person = new Team();
for (const team of person) {
  console.log(team[1]);
}
