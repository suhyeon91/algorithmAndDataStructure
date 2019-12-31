class Queue{
    constructor(arr){
        this.arr = arr || [];
    }

    getBuffer(){
        return this.arr.slice();
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

function queueAcessNthTopNode(queue, n){
    let bufferArr = queue.getBuffer();
    if(n <= 0) throw 'error';

    let bufferQueue = new Queue(bufferArr);

    while(--n){
        bufferQueue.dequeue();
    }
    return bufferQueue.dequeue();
}

function queueSearch(queue, element){
    let bufferArr = queue.getBuffer();

    let bufferQueue = new Queue(bufferArr);

    while(!bufferQueue.isEmpty()){
        if(bufferQueue.dequeue() === element){
            return true;
        }
    }
    return false;
}