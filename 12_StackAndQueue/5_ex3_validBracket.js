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


function validBracket(barcket){
    let stack = new Stack();
    
    for(let i = 0, len = barcket.length; i < len; i++){
        if(barcket.charAt(i) === "("){
            stack.push("(");
        }else{
            if(stack.isEmpty()){
                return false;
            }else{
                stack.pop();
            }
        }
    }
    return stack.isEmpty();
}