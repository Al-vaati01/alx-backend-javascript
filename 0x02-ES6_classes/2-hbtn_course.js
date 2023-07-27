export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw TypeError('Name must be string');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw TypeError('Length must be a number');
    } if (typeof students === 'string') {
      this._students = students;
    } else {
      throw TypeError('Must be array of strings');
    }
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    if (newName === '') {
      return;
    }
    this.name = newName;
  }
}
