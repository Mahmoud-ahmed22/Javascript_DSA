// Linked List

class Node {
    constructor(data,next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Insert Last Node

    insertLast(data) {
        let node = new Node(data);
        let current;

        // if empty

        if(this.head == null) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    // Insert Index

    insertIndex(data, index) {
        // If out of range
        if (index < 0 || index > this.size) {
            console.log("Index is out of range. Range is from 0 to " + this.size);
            return;
        }

        // if first index

        if (index === 0) {
           this.insertFirst(data);
           return;
        }

        const node = new Node(data);
        let current, prev;

        current = this.head;
        let count = 0;

        while (count < index) {
            prev = current;
            current = current.next;
            count++
        }

        prev.next = node;
        node.next = current;

    }

    // Get Index

    getIndex(value) {
        let current = this.head;
        let count = 0;

        while(current) {
            if (count === value) {
                console.log(current);
            }

            count++;
            current = current.next;
        }

        return;
    }


    // Remove at Index

    removeAtIndex(index) {
        let current = this.head;
        let prev = current;
        let count = 0;

        // if empty

        if(index > 0 && index >= this.size) {
            console.log("Out of range");
            return;
        }
        
        if (index === 0) {
            this.head = current.next;
            current = null;
            return;
        }

        while(current) {

            if (count === index) {
                prev.next = current.next;
                current = null;
                return;
            }

            prev = current;
            current = current.next;
            count++;
        }

        this.size--;
        return;
    }

    // Print all data

    PrintAllData() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Clear Linkedlist

    clearList() {
        this.head = null;
        this.size = 0;
    }
}

const ll = new LinkedList();

ll.insertLast(300);
ll.insertLast(200);
ll.insertFirst(400);
ll.insertIndex(600,0);
ll.PrintAllData();
ll.removeAtIndex(3);
console.log("###################");
ll.PrintAllData();

ll.clearList();

ll.PrintAllData();