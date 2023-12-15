const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {

  constructor(value = null) {
  this.value = value;
  this.next = null;
  }

  getUnderlyingList() {
    return this;
  }

  enqueue(value) {
    const lastChild = this._searchLastChild(this);

    if (lastChild.value === null) {
      lastChild.value = value;
    } else {
      this._addChild(lastChild, value);
    }

  }

  _addChild(lastChild, value) {
    lastChild.next = new Queue(value);
  }

  _searchLastChild(child) {
    if(child.next === null) return child;
    else return this._searchLastChild(child.next);
  }

  dequeue() {
    const valueTop = this.value;
    if (this.next === null) this.value = null;
    else {
      this.value = this.next.value;
      this.next = this.next.next;
    }
    return valueTop;
  }
}

module.exports = {
  Queue
};
