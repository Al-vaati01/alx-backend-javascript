export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string' && typeof length === 'number'
        && typeof students === 'string') {
      this._name = name;
      this._length = length;
      this._students = students;
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
