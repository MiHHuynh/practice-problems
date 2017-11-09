function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

// This function should accept a value add a node to the end of the DoublyLinkedList with the given value. It should return the DoublyLinkedList.
DoublyLinkedList.prototype.push = function(val) {
  var newNode = new Node(val);
  if (!this.length) {
    this.head = newNode;
  }
  else {
    newNode.prev = this.tail;
    this.tail.next = newNode;
  }
  this.tail = newNode;
  this.length++;
  return this;
}

// This function should remove a node at the end of the DoublyLinkedList. It should return the node removed.
DoublyLinkedList.prototype.pop = function() {
  if (!this.length) {
    return undefined;
  }

  let removed = this.tail;
  if (this.length === 1) {
    this.tail = null;
    this.head = null;
  }
  else {
    this.tail.prev.next = null;
    this.tail = this.tail.prev;
  }
  this.length--;
  return removed;
}


// This function should accept a value and add a node to the beginning of the DoublyLinkedList with the given value. It should return the DoublyLinkedList.
DoublyLinkedList.prototype.unshift = function(val) {
  var newNode = new Node(val);
  if (!this.length) {
    this.tail = newNode;
  }
  else {
    this.head.prev = newNode;
    newNode.next = this.head;
  }
  this.head = newNode;
  this.length++;
  return this;
}

// This function should remove a node at the beginning of the DoublyLinkedList. It should return the node removed.
DoublyLinkedList.prototype.shift = function() {
  
}

// This internal/helper function should find a node at a specified index in a DoublyLinkedList. It should return the found node.
DoublyLinkedList.prototype.__get = function(idx) {
  
}

// This function should accept an index and a value and update the value of the node in the DoublyLinkedList at the index with the new value. It should return true if the node is updated successfully, or false if an invalid index is passed in.
DoublyLinkedList.prototype.set = function(idx, val) {
  
}

// This internal/helper function should insert a node at a specified index in a DoublyLinkedList. It should return true if the index is valid, and false if the index is invalid (less than 0 or greater than the length of the list).
DoublyLinkedList.prototype.__insert = function(idx, val) {
  
}

// This function should remove a node at a specified index in a DoublyLinkedList. It should return the removed node. if the index is valid, or undefined if the index is invalid.
DoublyLinkedList.prototype.remove = function(idx) {
  
}

// This function should reverse all of the nodes in a DoublyLinkedList, and should return the list.
DoublyLinkedList.prototype.reverse = function() {
  
}
