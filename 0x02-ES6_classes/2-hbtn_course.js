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
      throw new TypeError('Length must be a number');
    } if (Array.isArray(students) && students.every((s) => typeof s === 'string')) {
      this._students = students;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get name() {
    return this._name;
  }

  set name(n) {
    this._name = n;
  }

  get length() {
    return this._length;
  }

  set length(l) {
    this._length = l;
  }

  get students() {
    return this.students;
  }

  set students(s) {
    this._students = s;
  }
}
