class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.length++
  }

  get(pos) {
    if (!this.items[pos - 1]) {
      return 'Error: OutOfBounds'
    }
    else {
      return this.items[pos - 1]
    }
  }

  max() {

    if (this.items.length === 0) {
      return new Error("EmptySortedList")
    } else {
      return Math.max(...this.items)
    }

  }

  min() {
    if (this.items.length === 0) {
      return new Error("EmptySortedList")
    } else {
      return Math.min(...this.items)
    }
  }

  sum() {

    if (this.items.length === 0) {
      return 0
    } else {
      return this.items.reduce((a, b) => a + b, 0)
    }


  }

  avg() {
    return (this.items.reduce((a, b) => a + b, 0)) / this.items.length

  }
}

module.exports = SortedList
