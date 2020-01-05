class Stack {
    constructor() {
        this.storage = [];
    }

    push(item) {
        this.storage.push(item);
    }

    pop() {
        return this.storage.pop();
    }

    peek() {
        return this.storage[this.storage.length-1];
    }

    isEmpty() {
        return this.storage.length === 0;
    }

    printContents() {
        this.storage.forEach(elem => console.log(elem));
    }
}

const stack = new Stack()

stack.push(7)
// stack.printContents()

const newObj = {
    name: "Derek",
    age: ""
}
console.log(Object.keys(newObj))
console.log(Object.keys(newObj))

//if we dont have access to the native JS array, lets build it using a string as storage

// class NoArrayStack {
//     constructor() {
//         this.storage = "";
//     }
//
//     push(val) {
//         this.storage = this.storage.concat("***", val)
//     }
//
//     pop() {
//         return
//     }
//
//     peek() {
//         return this.storage[this.storage.length-1];
//     }
//
//     isEmpty() {
//         return this.storage.length === 0;
//     }
//
//     printContents() {
//         this.storage.forEach(elem => console.log(elem));
//     }
// }