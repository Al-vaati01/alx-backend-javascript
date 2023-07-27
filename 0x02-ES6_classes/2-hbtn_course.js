export default class HolbertonCourse {
  constructor(_name, _length, _students) {
    if (typeof _name === 'string') {
      this.setName(_name);
    } else {
      throw TypeError('Name must be string');
    }
    if (typeof _length === 'number') {
      this.setLength(_length);
    } else {
      throw TypeError('Length must be a number');
    }
    this.setStudents(_students);
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    this.name = newName;
  }

  getLength() {
    return this.length;
  }

  setLength(newLength) {
    this.length = newLength;
  }

  getStudents() {
    return this.students;
  }

  setStudents(newStudents) {
    this.students = newStudents;
  }
}
