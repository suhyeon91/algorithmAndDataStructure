import MinHeap from './2_minBinaryHeap.js';
import MaxHeap from './3_maxBinaryHeap.js';
import MedianHeap from './4_ex1_median.js';

var mh1 = new MinHeap();
mh1.add(1);
mh1.add(10);
mh1.add(5);
mh1.add(100);
mh1.add(8);

console.log(mh1);

console.log("=====================================");


var mh2 = new MaxHeap();
mh2.add(1);
mh2.add(10);
mh2.add(5);
mh2.add(100);
mh2.add(8);

console.log(mh2.items.length);
console.log(mh2.poll());
console.log(mh2.items.length);
console.log(mh2.poll());
console.log(mh2.items.length);
console.log(mh2.poll());
console.log(mh2.items.length);
console.log(mh2.poll());
console.log(mh2.items.length);
console.log(mh2.poll());

console.log("=================MedianHeap====================");


var medianHeap = new MedianHeap();

medianHeap.push(12);
console.log(medianHeap.median());
medianHeap.push(2);
console.log(medianHeap.median());
medianHeap.push(23);
console.log(medianHeap.median());
medianHeap.push(13);
console.log(medianHeap.median());

console.log("================getKthSmallestElement=====================");

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

var arr = [12, 3, 13, 4, 2, 40, 23];

//한번에 왜 안나오지?
getKthSmallestElement(arr, 1);
getKthSmallestElement(arr, 2);
getKthSmallestElement(arr, 6);



console.log("================getKthBiggestElement=====================");

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

var arr = [12, 3, 13, 4, 2, 40, 23];

//한번에 왜 안나오지?
getKthBiggestElement(arr, 1);
getKthBiggestElement(arr, 2);
getKthBiggestElement(arr, 6);