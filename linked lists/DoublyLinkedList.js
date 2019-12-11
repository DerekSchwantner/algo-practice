
function Node(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.numberOfValues = 0;
    }

    add(data) {
        const node = new Node(data);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.numberOfValues++;
    }

    remove(data) {
        let current = this.head;
        while(current) {
            if(current.data === data) {
                if(current === this.head && current === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if(current === this.head) {
                    this.head = this.head.next;
                    this.head.previous = null;
                } else if(current === this.tail) {
                    this.tail = this.tail.previous;
                    this.tail.next = null;
                } else {
                    current.previous.next = current.next;
                    current.next.previous = current.previous;
                }
                this.numberOfValues--;
            }
            current = current.next;
        }
    }

    insertAfter(data, toNodeData) {
        let current = this.head;
        while(current) {
            if(current.data === toNodeData) {
                const node = new Node(data);
                if(current === this.tail) {
                    this.add(data);
                } else {
                    current.next.previous = node;
                    node.previous = current;
                    node.next = current.next;
                    current.next = node;
                    this.numberOfValues++;
                }
            }
            current = current.next;
        }
    }

    traverse(fn) {
        let current = this.head;
        while(current) {
            if(fn) {
                fn(current);
            }
            current = current.next;
        }
    }

    traverseReverse(fn) {
        let current = this.tail;
        while(current) {
            if(fn) {
                fn(current);
            }
            current = current.previous;
        }
    }

    length() {
        return this.numberOfValues;
    }

    print() {
        let string = '';
        let current = this.head;
        while(current) {
            string += `${current.data} `;
            current = current.next;
        }
        console.log(string.trim());
    }
}


let doublyLinkedList = new DoublyLinkedList()

doublyLinkedList.add(1);
doublyLinkedList.add(3);
doublyLinkedList.add(4);
doublyLinkedList.add(10);
doublyLinkedList.print()

//function for inserting node into sorted list, works in Hacker Rank but not in webstorm

function sortedInsert(head, data) {
    let newNode = new Node(data)
    let currentNode = head

    while (currentNode !== null){
        if (head.data > data){
            head.prev = newNode
            newNode.next = head
            head = newNode
            return head
        } else if (data < currentNode.data){
            newNode.next = currentNode
            newNode.prev = currentNode.prev
            currentNode.prev.next = newNode
            currentNode.prev = newNode
            return head
        } else if (currentNode.next === null && currentNode.data <= data) {
            currentNode.next = newNode
//                 newNode.prev = currentNode
//                 newNode.next = null
            return head
        } else {
            currentNode = currentNode.next
        }
    }
}

sortedInsert(doublyLinkedList.head, 5)
doublyLinkedList.print()


