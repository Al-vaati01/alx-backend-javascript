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
    }
    this._students = students;
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    this.name = newName;
  }

  getLength() {
    return this._length;
  }

  setLength(newLength) {
    this._length = newLength;
  }

  getStudents() {
    return this._students;
  }

  setStudents(newStudents) {
    this._students = newStudents;
  }
}
