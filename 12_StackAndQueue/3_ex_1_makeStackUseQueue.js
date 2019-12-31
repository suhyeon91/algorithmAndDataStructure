class Queue{
    constructor(arr){
        this.arr = arr || [];
    }

    isEmpty(){
        return this.arr.length === 0;
    }

    peek(){
        return this.arr[0];
    }

    enqueue(value){
        return this.arr.push(value);
    }

    dequeue(){
        return this.arr.shift();
    }
}

class Stack{
    constructor(arr){
        this.arr = arr || [];
    }

    isEmpty(){
        return this.arr.length === 0;
    }

    peek(){
        return this.arr[this.arr.length - 1];
    }

    push(value){
        this.arr.push(value);
    }

    pop(){
        return this.arr.pop();
    }
}

class TwoStackQueue{
    constructor(){
        this.inbox = new Stack();
        this.outbox = new Stack();
    }

    enqueue(value){
        this.inbox.push(value);
    }

    dequeue(){0
        if(this.outbox.isEmpty()){
            while(!this.inbox.isEmpty()){
                this.outbox.push(this.inbox.pop());
            }
        }
        return this.outbox.pop();
    }
}

class QueueStack{
    constructor(){
        this.inbox = new Queue();
    }

    push(value){
        this.inbox.enqueue(value);
    }

    pop(){
        let size = this.inbox.arr.length - 1;
        let count = 0;
        let bufferQueue = new Queue();

        while(++conut <= size){
            bufferQueue.enqueue(this.inbox.dequeue());
        }
        let popped = this.inbox.dequeue();
        this.inbox = bufferQueue;
        return popped;
    }
}