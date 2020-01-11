function Node(data) {
        this.value = data
        this.next = null
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    add(data) {
        if (!this.head) {
            this.head = new Node(data)
            this.tail = this.head
            this.length++
        } else if (this.head && !this.tail) {
            this.tail = new Node(data)
            this.head.next = this.tail
            this.length++
        } else {
            this.tail.next = new Node(data)
            this.tail = this.tail.next
            this.length++
        }
    }

    remove(data) {
        let currentNode = this.head

        while (currentNode){
            if (currentNode === this.head && currentNode.value === data){
                this.head = this.head.next
            } else if (currentNode.next === this.tail && this.tail.value === data){
                currentNode.next = null
                this.tail = currentNode
            } else if (currentNode.next.value === data){
                currentNode.next = currentNode.next.next
            } else {
                currentNode = currentNode.next
            }
        }
    }
}

let list = new LinkedList()

list.add(5)
list.add(6)
list.add(7)
list.add(8)
list.add(9)
// list.remove(6)
// list.remove()

console.log(list)
