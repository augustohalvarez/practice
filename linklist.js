function Node(val){
    this.val = val;
    this.next = null;
}

function SinglyLinkedList(){
    this.head = null;
    this.tail = null;
    this.length = 0;
}
var myList = new SinglyLinkedList();

SinglyLinkedList.prototype.push = function(value) {
    if (this.length == 0) {
        this.head = new Node(value);
        this.tail = this.head;
    }
    else {
        var temp = new Node(value);
        this.tail.next = temp;
        this.tail = temp;
    }
    this.length++;

    return this;
}

SinglyLinkedList.prototype.pop = function() {
    if (this.length == 0) {
        return null;
    }
    else if (this.length === 1) {
        let temp = this.head;
        this.head = null;
        return temp;
    }
    else {
        for (var current = this.head; current.next !== this.tail; current = current.next) {

        }

        this.tail = current;
        current = current.next;
        this.tail.next = null;
        return current.val;
    }

    this.length--;
}

SinglyLinkedList.prototype.unshift = function (val) {
  if (this.length === 0) {
    this.head = new Node(val);
    this.tail = this.head;
  } else {
    let temp = this.head;
    this.head = new Node(val);
    this.head.next = temp;
  }
  this.length++;
  return this;
}

SinglyLinkedList.prototype.shift = function () {
  if (this.length === 0) {
    console.log('error, cannot remove from empty list');
    return null;
  } else {
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}


/*** Tests ***/

myList.push(5);
myList.push(15);
myList.push(20);
console.log(myList.shift());
// console.log(myList.head.val);
// console.log(myList.tail.val);
