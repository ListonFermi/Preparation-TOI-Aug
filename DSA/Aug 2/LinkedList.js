class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(val) {
    const node = new Node(val);
    if (this.head) {
      node.next = this.head;
      this.head.prev = node;
    } else {
      this.tail = node;
    }
    this.head = node;
    this.size++;
  }

  append(val) {
    const node = new Node(val);
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
    } else {
      this.head = node;
    }
    this.tail = node;
    this.size++;
  }

  reverse() {
    
  }

  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.val);
      curr = curr.next;
    }
  }
}

const list = new LinkedList();
list.append(1); // List: 1
list.append(2); // List: 1 -> 2
list.append(3); // List: 1 -> 2 -> 3

list.reverse(); // List should now be: 3 -> 2 -> 1

list.print(); // Output: 3 2 1
