class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(value) {
        this.queue.push(value);
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    length() {
        return this.queue.length;
    }

    print() {
        console.log(this.queue.join(' '));
    }
}


//ES5 version

// function Queue() {
//     this.queue = [];
// }
//
// Queue.prototype.enqueue = function(value) {
//     this.queue.push(value);
// };
// Queue.prototype.dequeue = function() {
//     return this.queue.shift();
// };
// Queue.prototype.peek = function() {
//     return this.queue[0];
// };
// Queue.prototype.length = function() {
//     return this.queue.length;
// };
// Queue.prototype.print = function() {
//     console.log(this.queue.join(' '));
// };

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // => 1 2 3