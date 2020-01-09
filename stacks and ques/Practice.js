class Queue {
    constructor() {
        this.storage = []
    }

    enqueue(item){
        this.storage.push(item)
    }

    dequeue(){
        this.storage.shift()
    }

    peek(){
        return this.storage
    }
}


const q = new Queue()

q.enqueue(7)
q.enqueue(8)
q.enqueue(9)

console.log(q.storage)