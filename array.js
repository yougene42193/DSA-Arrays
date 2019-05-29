'use strict';
const memory = require('./memory');

let Memory = new memory();

class Array {
  constructor() {
    this.length = 0;
    this.capacity = 0;
    this.ptr = Memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this.capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    Memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = Memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of Memory');
    }
    Memory.copy(this.ptr, oldPtr, this.length);
    Memory.free(oldPtr);
    this.capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return Memory.get(this.ptr + index);
  }

  pop() {
    if (this.length === 0) {
      throw new Error('Index error');
    }
    const value = Memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (this.length >= this.capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    Memory.set((this.ptr = index), value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    Memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }
}

Array.SIZE_RATIO = 3;

module.exports = Array;

function main() {
  Array.SIZE_RATIO = 3;

  let arr = new Array();

  console.log(arr);
  // What is the length, capacity and memory address of your array?
  //arr.push(3);
  // Array {length: 1, capacity: 3, ptr: 0}
  /*arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);*/
  // Array {length: 6, capacity: 12, ptr: 3}
  // pushing 19 cause the array to reallocate due to 15 making the array full
  // the new length became 4 after pushing 19
  // the memory address(ptr) was moved to 3
  //arr.pop();
  //arr.pop();
  //arr.pop();
  // the 10, 45 and 19 are removed from the array while the
  // memory address and capacity stay the same
  arr.push("tauhida");
  // results in 0 in length, capacity and ptr
  // not a number
  // _resize() allocates to a new position in the memory and recreates the capacity.
  // memory address is moved to a bigger capacity
}

main();

