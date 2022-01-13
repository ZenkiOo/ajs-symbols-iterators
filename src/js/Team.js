export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    if (!this.members.has(char)) {
      this.members.add(char);
    } else {
      throw new Error('Pers allready exist');
    }
  }

  addAll(...chars) {
    chars.forEach((char) => {
      this.members.add(char);
    });
  }

  toArray() {
    return [...this.members];
  }

  [Symbol.iterator]() {
    let index = -1;
    const data = this.toArray();

    return {
      next: () => ({ value: data[++index], done: !(index in data) }),
    };
  }
}
