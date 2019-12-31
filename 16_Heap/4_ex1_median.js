import MinHeap from './2_minBinaryHeap.js';
import MaxHeap from './3_maxBinaryHeap.js';

class MedianHeap{
    constructor(){
        this.minHeap = new MinHeap();
        this.maxHeap = new MaxHeap();
    }

    push(value){
        if(value > this.median()){
            this.minHeap.add(value);
        } else{
            this.maxHeap.add(value);
        }

        if(this.minHeap.size() - this.maxHeap.size() > 1){
            this.maxHeap.add(this.minHeap.poll());
        }

        if(this.maxHeap.size() - this.minHeap.size() > 1){
            this.minHeap.add(this.maxHeap.poll());
        }
    }

    median(){
        if(this.minHeap.size() === 0 && this.maxHeap.size() === 0){
            return Number.NEGATIVE_INFINITY;
        } else if(this.minHeap.size() === this.maxHeap.size()){
            return (this.minHeap.peek() + this.maxHeap.peek())/2;
        } else if(this.minHeap.size() > this.maxHeap.size()){
            return this.minHeap.peek();
        } else if(this.minHeap.size() < this.maxHeap.size()){
            return this.maxHeap.peek();
        }
    }
}

export default MedianHeap