function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

// This function should insert a node in a binary tree.
BinarySearchTree.prototype.insertIteratively = function(val) {
  var newNode = new Node(val);
  var currentNode = this.root;
  if (!currentNode) {
    this.root = newNode;
  }
  else {
    while (currentNode) {
      if (currentNode.value > newNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      }
      else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      }
    }
  }
  return this;
}

// This function should insert a node in a binary tree.
BinarySearchTree.prototype.insertRecursively = function(val) {
  
}

// This function should find a node in a binary tree. It should return the node if found, otherwise return undefined.
BinarySearchTree.prototype.findIteratively = function() {

}

// This function should find a node in a binary tree. It should return the node if found, otherwise return undefined.
BinarySearchTree.prototype.findRecursively = function() {

}

// This function should convert a binary search tree into an array of nodes from smallest to largest.
BinarySearchTree.prototype.toArray = function() {

}

// This function should search through each node in the binary search tree using pre-order depth first search and return an array containing each node's value.
BinarySearchTree.prototype.DFSPreOrder = function() {
  
}

// This function should search through each node in the binary search tree using in-order depth first search and return an array containing each node's value.
BinarySearchTree.prototype.DFSInOrder = function() {
  
}

// This function should search through each node in the binary search tree using post-order depth first search and return an array containing each node's value.
BinarySearchTree.prototype.DFSPostOrder = function() {
  
}

// This function should search through each node in the binary search tree using breadth first search and return an array containing each node's value.
BinarySearchTree.prototype.BreadthFirstSearch = function() {
  
}

// This function should remove a node from a binary search tree. Your remove function should be able to handle removal of the root node, removal of a node with one child and removal of a node with two children. The function should return the node removed.
BinarySearchTree.prototype.remove = function() {
  
}