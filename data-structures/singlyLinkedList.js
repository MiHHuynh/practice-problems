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

// Another implementation:
// You’re given the pointer to the head node of a linked list, an integer to add to the list and the position at which the integer must be inserted. Create a new node with the given integer, insert this node at the desired position and return the head node. A position of 0 indicates head, a position of 1 indicates one node away from the head and so on. The head pointer given may be null meaning that the initial list is empty.
// function insert(head, data, position) {
//     var newNode = new Node(data);
//     if (!head || position === 0) {
//         newNode.next = head;
//         head = newNode;
//     }
//     else {
//         let current = head;
//         for (let i = 1; i < position; i++) {
//             if (!current.next) {
//                 current.next = newNode;
//                 return head;
//             }
//             current = current.next;
//         }
//         newNode.next = current.next;
//         current.next = newNode;        
//     }
//     return head;
// }


// This function should remove a node at a specified index in a SinglyLinkedList. It should return the removed node. if the index is valid, or undefined if the index is invalid.
SinglyLinkedList.prototype.remove = function(idx) {
  if (idx < 0 || idx > this.length-1) {
    return undefined;
  }
  var target = this.__get(idx);
  var prev = this.__get(idx-1);
  prev.next = target.next;
  this.length--;
  return target;

  // Without __get:
  // var target = this.head;
  // var prev;
  // for (let i = 0; i < idx; i++) {
  //   if (i === idx-1) {
  //     prev = target;
  //   }
  //   target = target.next;
  // }
  // prev.next = target.next;
  // this.length--;
  // return target;
}


// This function should reverse all of the nodes in a SinglyLinkedList, and should return the list.
SinglyLinkedList.prototype.reverse = function() {

}






