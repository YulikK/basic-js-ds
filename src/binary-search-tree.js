const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    let newNode = new Node(data);
    if (this._root === null) {
        this._root = newNode;
    } else this._addNode(this._root, newNode);
  }

  _addNode(node, newNode) {
    if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
        } else this._addNode(node.left, newNode);
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else this._addNode(node.right, newNode);
      }
  }


  has(data) {
    return this._search(this._root, data) !== null;
  }

  find(data) {
    return this._search(this._root, data);
  }

  _search(node, data) {
    if (node === null) {
        return null;
    } else if (data < node.data) {
        return this._search(node.left, data);
    } else if (data > node.data) {
        return this._search(node.right, data);
    } else {
        return node;
    }
}

  remove(data) {
    this._root = this._removeNode(this._root, data);
  }

  _removeNode(node, data) {
    if (node === null) {
        return null;
    } else if (data < node.data) {
        node.left = this._removeNode(node.left, data);
        return node;
    } else if (data > node.data) {
        node.right = this._removeNode(node.right, data);
        return node;
    } else {
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }
        if (node.left === null) {
            node = node.right;
            return node;
        } else if(node.right === null) {
            node = node.left;
            return node;
        }
        let newNode = this._findMinNode(node.right);
        node.data = newNode.data;
        node.right = this._removeNode(node.right, newNode.data);
        return node;
    }
}

  min() {
    const minNode = this._findMinNode(this._root);
    return minNode !== null ? minNode.data : null;
  }

  _findMinNode(node) {
    if (node.left === null)
        return node;
    else
        return this._findMinNode(node.left);
  }

  max() {
    const maxNode = this._findMaxNode(this._root);
    return maxNode !== null ? maxNode.data : null;
  }

  _findMaxNode(node) {
    if (node.right === null)
        return node;
    else
        return this._findMaxNode(node.right);
  }
}

module.exports = {
  BinarySearchTree
};