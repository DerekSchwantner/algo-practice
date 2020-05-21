// Given a tree, write a function to convert it into a circular doubly linked list from left to right by only modifying the existing pointers.
function Node(data) {
    this.data = data;
    this.next = null;
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.numberOfValues = 0;
    }