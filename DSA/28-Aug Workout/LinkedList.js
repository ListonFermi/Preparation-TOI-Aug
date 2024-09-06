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
      this.head.prev = node;
      node.next = this.head;
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

  

}


const list = new LinkedList();
list.prepend(1); // List: 1
list.append(2);  // List: 1 <-> 2
list.prepend(0); // List: 0 <-> 1 <-> 2
console.log(list)