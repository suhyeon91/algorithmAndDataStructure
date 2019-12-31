import Heap from './1_binaryHeap.js';

class MaxHeap extends Heap {
    constructor(){
        super();
    }

    add(item){
        this.items[this.items.length] = item;
        this.bubbleUp();
        console.log(this.items);
    }

    poll(){
        let item = this.items[0];
        this.items[0] = this.items[this.items.length - 1];
        this.items.pop();
        this.bubbleDown();
        return item;
    }

    bubbleDown(){
        let index = 0;
        while(this.leftChild(index) && (this.leftChild(index) > this.items[index] || this.rightChild(index) > this.items[index])){
            let biggerIndex = this.leftChildIndex(index);
            if(this.rightChild(index) && this.rightChild(index) > this.items[biggerIndex]){
                biggerIndex = this.rightChildIndex(index);
            }
            this.swap(index, biggerIndex);
            index = biggerIndex;
        }
    }

    bubbleUp(){
        let index = this.items.length - 1;
        while(this.parent(index) && this.parent(index) < this.items[index]){
            this.swap(this.parentIndex(index), index);
            index = this.parentIndex(index);
        }
    }
}

export default MaxHeap