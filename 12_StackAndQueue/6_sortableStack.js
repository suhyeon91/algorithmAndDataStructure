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

class SortableStack{
    constructor(size){
        this.size = size;

        this.mainStack = new Stack();
        this.sortedStack = new Stack();

        for(let i = 0; i < size; i++){
            this.mainStack.push(Math.floor(Math.random()*11));
        }
    }

    sortedStackDescending(){
        while(!this.mainStack.isEmpty()){
            let temp = this.mainStack.pop();
            while(!this.sortedStack.isEmpty && this.sortedStack.peek() < temp){
                this.mainStack.push(this.sortedStack.pop());
            }
            this.sortedStack.push(temp);
        }
    }
}