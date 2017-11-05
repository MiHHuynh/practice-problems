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

SinglyLinkedList.prototype.__get = function(idx) {
  if (idx >= this.length || idx < 0) {
    return null;
  }
  var foundNode = this.head;
  for (let i = 0; i < idx; i++) {
    foundNode = foundNode.next;
  }
  return foundNode;
}

SinglyLinkedList.prototype.set = function(idx, val) {
  if (idx >= this.length || idx < 0) {
    return false;
  }
  var foundNode = this.__get(idx);
  foundNode.val = val;
  return true;

  // Without __get:
  // var current = this.head;
  // for (let i = 0; i < idx; i++) {
  //   current = current.next;
  // }
  // current.val = val;
  // return true;

}


// This internal/helper function should insert a node at a specified index in a SinglyLinkedList. It should return true if the index is valid, and false if the index is invalid (less than 0 or greater than the length of the list).
SinglyLinkedList.prototype.__insert = function(idx, val) {
  if (idx >= this.length || idx < 0) {
    return false;
  }
  var newNode = new Node(val);
  var current = this.head;
  for (let i = 1; i < idx; i++) {
    current = current.next;
  }
  newNode.next = current.next;
  current.next = newNode;
  return true;
}


// This function should remove a node at a specified index in a SinglyLinkedList. It should return the removed node. if the index is valid, or undefined if the index is invalid.
SinglyLinkedList.prototype.remove = function(idx) {
  
}


// This function should reverse all of the nodes in a SinglyLinkedList, and should return the list.
SinglyLinkedList.prototype.reverse = function() {

}






