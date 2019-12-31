class DoubleLinkedNode{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    isEmpty(){
        return this.size === 0;
    }

    insertAtHead(value){
        if(!this.head){
            this.head = new DoubleLinkedNode(value);
            this.tail = this.head;
        } else{
            let temp = new DoubleLinkedNode(value);
            temp.next = this.head;
            this.head.prev = temp;
            this.head = temp;
        }
        this.size++;
    }

    insertAtTail(value){
        if(!this.tail){
            this.tail = new DoubleLinkedNode(value);
            this.head = this.tail;
        } else{
            let temp = new DoubleLinkedNode(value);
            temp.prev = this.tail;
            this.tail.next = temp;
            this.tail = temp;
        }
        this.size++;
    }

    deleteAtHead(){
        debugger;
        let toReturn = null;

        if(this.head){
            toReturn = this.head.data;

            if(this.tail === this.head){
                this.tail = null;
                this.head = null;
            } else{
                this.head = this.head.next;
                this.head.prev = null;
            }
        }
        this.size--;
        return toReturn;
    }

    deleteAtTail(){
        let toReturn = null;

        if(this.tail){
            toReturn = this.tail.data;

            if(this.tail === this.head){
                this.tail = null;
                this.head = null;
            } else{
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
        }
        this.size--;
        return toReturn;
    }

    findStartAtHead(value){
        let currentHead = this.head;
        if(currentHead.data === value){
            return true;
        }

        while(currentHead.next){
            if(currentHead.data === value){
                return true;
            }
            currentHead = currentHead.next;
        }

        return false;
    }

    findStartAtTail(value){
        let currentTail = this.tail;
        if(currentTail.data === value){
            return true;
        }

        while(currentTail.prev){
            if(currentTail.data === value){
                return true;
            }
            currentTail = currentTail.prev;
        }
        return false;
    }
}