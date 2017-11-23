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
BinarySearchTree.prototype.insertRecursively = function(val, currentNode=this.root) {
  if (!currentNode) {
    currentNode = new Node(val);
    if (!this.root) {
      this.root = currentNode;
    }
  }
  else if (currentNode.value > val) {
    if (!currentNode.left) {
      currentNode.left = new Node(val);
    }
    else {
      return this.insertRecursively(val, currentNode.left);  
    }
  }
  else if (currentNode.value < val) {
    if (!currentNode.right) {
      currentNode.right = new Node(val);
    }
    else {
      return this.insertRecursively(val, currentNode.right); 
    }
  }
  return this;
}

// This function should find a node in a binary tree. It should return the node if found, otherwise return undefined.
BinarySearchTree.prototype.findIteratively = function(val) {
  var currentNode = this.root;
  while (currentNode) {
    if (val < currentNode.value) {
      currentNode = currentNode.left;
    }
    else if (val > currentNode.value) {
      currentNode = currentNode.right;
    }
    else {
      return currentNode;      
    }
  }
  return undefined;
}

// This function should find a node in a binary tree. It should return the node if found, otherwise return undefined.
BinarySearchTree.prototype.findRecursively = function(val, currentNode=this.root) {
  if (!currentNode) {
    return undefined;
  }
  else if (val < currentNode.value) {
    return this.findRecursively(val, currentNode.left);
  }
  else if (val > currentNode.value) {
    return this.findRecursively(val, currentNode.right);
  }
  else {
    return currentNode;
  }
}

// This function should convert a binary search tree into an array of nodes from smallest to largest.
BinarySearchTree.prototype.toArray = function(currentNode=this.root) {
  var result = [];
  if (!currentNode) {
    return result;
  }
  if (currentNode.left) {
    result = result.concat(this.toArray(currentNode.left));
  }
  
  result.push(currentNode.value);
  
  if (currentNode.right) {
    result = result.concat(this.toArray(currentNode.right));
  }
  return result;
}

// This function should search through each node in the binary search tree using pre-order depth first search and return an array containing each node's value.
BinarySearchTree.prototype.DFSPreOrder = function(currentNode=this.root, res=[], prevNode=null) {
  // start at root node
  if (!currentNode) return res;
  if (currentNode && currentNode.left) {
    // record value
    res.push(currentNode.value);
    prevNode = currentNode;
    // go to left. record if there is a value.
    return this.DFSPreOrder(currentNode.left, res, prevNode);
  }
  else if (!currentNode.left) {}
  // call recursively for all lefts until there is no more left to see
  // call recursively on the right
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