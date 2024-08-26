// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   prepend(val) {
//     const node = new Node(val);
//     if (this.head) {
//       node.next = this.head;
//       this.head.prev = node;
//     } else {
//       this.tail = node;
//     }
//     this.head = node;
//     this.size++;
//   }

//   append(val) {
//     const node = new Node(val);
//     if (this.tail) {
//       this.tail.next = node;
//       node.prev = this.tail;
//     } else {
//       this.head = node;
//     }
//     this.tail = node;
//     this.size++;
//   }

//   print() {
//     let curr = this.head;
//     let res = "";
//     while (curr) {
//       res += curr.val + " ";
//       curr = curr.next;
//     }
//     console.log(res);
//   }

//   reverse() {
//     let curr = this.head,
//       temp;

//     while (curr) {
//       temp = curr.next;
//       curr.next = curr.prev;
//       curr.prev = temp;

//       curr = temp;
//     }

//     temp = this.head;
//     this.head = this.tail;
//     this.tail = temp;
//   }

//   detectCycle() {
//     let slow = this.head;
//     let fast = this.head;

//     while (fast && fast.next) {
//       slow = slow.next;
//       fast = fast.next.next;

//       if (slow == fast) {
//         return true;
//       }
//     }
//     return false;
//   }

//   deleteMiddle() {
//     let slow = this.head;
//     let fast = this.head;

//     while (true) {
//         slow = slow.next
//         fast = fast.next.next

//         if(!fast)

//     }
//   }
// }

// const list = new LinkedList();
// list.prepend(30);
// list.prepend(20);
// list.prepend(10);

// list.append(40);
// list.append(50);
// list.append(60);

// console.log(list);
// list.reverse();
// console.log(list.detectCycle());
// list.print();
