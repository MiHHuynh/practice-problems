// - Write a constructor function for a Node
//     - it should have a value property which is assigned to a value passed as a parameter to the 
// constructor function
//     - it should have a next property initialized to null

function Node(val) {
  this.value = val;
  this.next = null; // the next value to be dequeued / the value that was added to the queue after the current node
}


// - Write a constructor function for a Queue
//     - it should have a size property initialized to 0   
//     - it should have a first property initialized to null
//     - it should have a last property initialized to null

function Queue() {
  this.first = null;
  this.last = null;
  this.size = 0;
}

// enqueue
// This function adds the value to the end of the queue. This should be an O(1) operation and return the new size of the queue.
Queue.prototype.enqueue = function(val) {
  var newNode = new Node(val);
  if (!this.size) {
    this.first = newNode;
    this.last = newNode;
  }
  else if (this.size === 1) {
    this.first.next = newNode;
    this.last = newNode;
  }
  else {
    this.last.next = newNode;
    this.last = newNode;
  }
  return ++this.size;
}

// dequeue
// This function removes the value at the beginning of the queue. This should be an O(1) operation and return the value removed. Note: The tests for dequeue rely on enqueue working
Queue.prototype.dequeue = function() {
  let removed = this.first;
  this.first = this.first.next;
  this.size--;
  return removed.value;
}

// peek - This function returns the first value in the queue.
Queue.prototype.peek = function() {
  return this.first.value;
}