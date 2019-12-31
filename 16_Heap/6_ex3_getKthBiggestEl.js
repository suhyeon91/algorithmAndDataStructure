import MaxHeap from './3_maxBinaryHeap.js';

function getKthBiggestElement(arr, k){
    var maxHeap = new MaxHeap();

    for(let i = 0, arrLength = arr.length; i< arrLength; i++){
        maxHeap.add(arr[i]);
    }

    for(let i = 0; i< k; i++){
        maxHeap.poll();
    }

    return maxHeap.poll();
}