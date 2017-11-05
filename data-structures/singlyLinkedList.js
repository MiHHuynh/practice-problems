function Node(val) {
  this.val = val;
  this.next = null;
}

// ES2015 / ES6 Class
// class Node() {
//   constructor(val, next) {
//     this.val = val;
//     this.next = next || null;
//   }
// }

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

// ES2015 / ES6 Class
// class SinglyLinkedList() {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
// }

SinglyLinkedList.prototype.push = function(val) {
  var newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = this.head;
  }
  else {
    this.tail.next = newNode;
    this.tail = this.tail.next;
  }
  this.length++;
  return this;
}

SinglyLinkedList.prototype.pop = function() {
  if (!this.length) {
    return undefined;
  }
  if (this.length === 1) {
    let removed = this.head;
    this.head = null;
    this.tail = null;
    this.length--;
    return removed;
  }
  var prev = this.head;
  var current = this.head.next;
  while (prev !== current) {
    if (current) {
      current = current.next;
    }
    if (!current) {
      let removed = prev.next;
      this.tail = prev;
      this.tail.next = null;
      this.length--;
      return removed;
    }
    prev = prev.next;
  }
}

SinglyLinkedList.prototype.shift = function() {
  if (!this.length) {
    return undefined;
  }
  let removed = this.head;
  this.head = this.head.next;
  if (this.length === 1) {
    this.tail = null;
  }
  this.length--;
  return removed.val;
}

SinglyLinkedList.prototype.unshift = function(val) {
  var newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.length++;
  if (this.length === 1) {
    this.tail = this.head;
  }
  return this;
}

SinglyLinkedList.prototype.set = function(idx, val) {

}

SinglyLinkedList.prototype.__get = function(position) {

}
