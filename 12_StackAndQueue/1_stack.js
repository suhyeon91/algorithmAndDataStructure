class Stack{
    constructor(arr){
        this.arr = arr || [];
    }

    getBuffer(){
        return this.arr.slice();
    }

    isEmpty(){
        return this.arr.length === 0;
    }

    //마지막에 추가된 항목을 들여다보는것
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


function stackAccessNthTopNode(stack, n){
    let bufferArr = stack.getBuffer();
    if(n <= 0) throw 'error';

    let bufferStack = new Stack(bufferArr);

    while(--n){
        bufferStack.pop();
    }
    return bufferStack.pop();
}

function stackSearch(stack, element){
    let bufferArr = stack.getBuffer();
    let bufferStack = new Stack(bufferArr);

    while(!bufferStack.isEmpty()){
        if(bufferStack.pop() === element){
            return true;
        }
    }
    return false;
}