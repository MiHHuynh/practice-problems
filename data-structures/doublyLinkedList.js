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
  let removed = this.head;
  if (!this.length) {
    return undefined;
  }
  else if (this.length === 1) {
    this.head = null;
    this.tail = null;
  }
  else {
    this.head = this.head.next;
    this.head.prev = null;
  }
  this.length--;
  return removed;
}

// This internal/helper function should find a node at a specified index in a DoublyLinkedList. It should return the found node.
DoublyLinkedList.prototype.__get = function(idx) {
  if (idx < 0 || idx > this.length-1) {
    return null;
  }
  let midpoint = Math.floor((this.length-1) / 2);
  var current;
  if (idx > midpoint) {
    current = this.tail;
    for (let i = this.length-1; i > idx; i--) {
      current = current.prev;
    }
  }
  else if (idx <= midpoint) {
    current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
  }
  return current;
}

// This function should accept an index and a value and update the value of the node in the DoublyLinkedList at the index with the new value. It should return true if the node is updated successfully, or false if an invalid index is passed in.
DoublyLinkedList.prototype.set = function(idx, val) {
  if (idx < 0 || idx > this.length-1) {
    return false;
  }
  var target = this.__get(idx);
  target.val = val;
  return true;
}

// This internal/helper function should insert a node at a specified index in a DoublyLinkedList. It should return true if the index is valid, and false if the index is invalid (less than 0 or greater than the length of the list).
DoublyLinkedList.prototype.__insert = function(idx, val) {
  if (idx < 0 || idx > this.length-1) {
    return false;
  }
  var newNode = new Node(val);
  var target = this.__get(idx);
  newNode.prev = target.prev;
  newNode.next = target;
  target.prev.next = newNode;
  target.prev = newNode;
  this.length++;
  return true;
}

// This function should remove a node at a specified index in a DoublyLinkedList. It should return the removed node if the index is valid, or undefined if the index is invalid.
DoublyLinkedList.prototype.remove = function(idx) {
  if (idx < 0 || idx > this.length-1) {
    return undefined;
  }
  var target = this.__get(idx);
  target.prev.next = target.next;
  target.next.prev = target.prev;
  this.length--;
  return target;  
}

// This function should reverse all of the nodes in a DoublyLinkedList, and should return the list.
DoublyLinkedList.prototype.reverse = function() {
  
}
