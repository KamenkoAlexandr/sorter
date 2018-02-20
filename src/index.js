class Sorter {
  constructor() {
    this.arr = [];
    this.compareFunction = undefined;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
      return this.arr[index];
  }

  get length() {
      return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {

      function compareNumeric(a, b) {
          if (a > b) return 1;
          if (a < b) return -1;
      }

    var helpArray = [];

    indices.sort(compareNumeric);

    for (var i = 0; i < indices.length; i++) {
      helpArray.push(this.arr[indices[i]]);
    }

    if (this.compareFunction)
      helpArray.sort(this.compareFunction);
    else
      helpArray.sort(compareNumeric);


    for (var i = 0; i < helpArray.length; i++) {
      this.arr[indices[i]] = helpArray[i];
    }

    return this.arr;
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
