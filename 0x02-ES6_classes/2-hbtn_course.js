export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(n) {
    if (typeof n === 'string') {
      this._name = n;
    } else {
      throw new TypeError('Name must be string');
    }
  }

  get length() {
    return this._length;
  }

  set length(l) {
    if (typeof l === 'number') {
      this._length = l;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this.students;
  }

  set students(s) {
    if (Array.isArray(s) && s.every((student) => typeof student === 'string')) {
      this._students = s;
    } else {
      throw new TypeError('students must be a array of strings');
    }
  }
}
