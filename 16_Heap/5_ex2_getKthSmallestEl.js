import MinHeap from './2_minBinaryHeap.js';

function getKthSmallestElement(arr, k){
    let minH = new MinHeap();
    for(let i = 0, length = arr.length; i< length; i++){
        minH.add(arr[i]);
    }

    for(let i = 0; i< k; i++){
        minH.poll();
    }
    
    return minH.poll();
}

