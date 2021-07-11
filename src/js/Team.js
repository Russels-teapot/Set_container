export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(person) {
    const length1 = this.members.size;
    this.members.add(person);
    const length2 = this.members.size;
    if (length1 === length2) {
      throw new Error('Боец уже добавлен');
    }
  }

  addAll(...persons) {
    for (const person of persons) {
      this.members.add(person);
    }
    return this.members;
  }

  toArray() {
    const arrOfMembers = [];
    for (const member of this.members) {
      arrOfMembers.push(member);
    }
    return arrOfMembers;
  }
}
