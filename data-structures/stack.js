// A stack is a commonly-used data structure in computer science. From Wikibooks (https://en.wikibooks.org/wiki/Data_Structures/Stacks_and_Queues):

// First implement a constructor function for a Node. Each node should have a value property and a next property. Value should be whatever is passed to the function and next should default to null.
function Node(val) {
  this.value = val;
  this.next = null; // points to the node below it
}

function Stack() {
  // Your stack should be implemented with the following properties

  // first - this should point to the node at the top of the stack
  // last - this should point to the node at the bottom of the stack
  // size - this should be the number of nodes in the stack

  this.first = null;
  this.last = null;
  this.size = 0;
}

// push - takes in a node and puts it at the top of the stack. Should return the new size of the stack.
Stack.prototype.push = function(val) {
  var newNode = new Node(val);
  if (!this.first) { // stack is empty
    this.first = newNode;
    this.last = newNode;
  }
  else {
    this.first.next = newNode;
    this.first = newNode;
  }
  return ++this.size;
}

// pop - removes the node at the top of the stack and returns the value of that node. 
Stack.prototype.pop = function() {
  // need to account for stack of size 0 or 1
  // need to reassign this.first after popping off last one
  let removed = this.first;
  this.first = this.first.next;
  this.size--;
  return removed.value;
}

// peek - returns the first value in the stack
Stack.prototype.peek = function() {
  return this.first.value;
}

// print - This function console.log's all the values in the stack.
Stack.prototype.print = function() {
  let current = this.
}