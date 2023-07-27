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
      if (Array.isArray(students) && students.every((student) => typeof student === 'string')) {
        this._students = students;
      } else {
        throw new TypeError('students must be a array of strings');
      }
    }

    get name() {
      return this._name;
    }

    set name(n) {
      if (typeof n === 'string') {
        this._name = n;
      } else {
        throw TypeError('Name must be string');
      }
    }

    get length() {
      return this._length;
    }

    set length(l) {
      if (typeof l === 'number') {
        this._length = l;
      } else {
        throw TypeError('Length must be a number');
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
