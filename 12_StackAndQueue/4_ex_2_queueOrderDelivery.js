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

class Customer{
    constructor({name, order}){
        this.name = name;
        this.order = order;
    }
}

class Cashier{
    constructor(){
        this.customers = new Queue();
    }

    addOrder(customer){
        this.customers.enqueue(customer);
    }

    deliveryOrder(){
        let finishedCustomer = this.customers.dequeue();
        console.log(`${finishedCustomer.name} 고객님 ${finishedCustomer.order} 배달 준비가 완료되었습니다.`);
    }
}

