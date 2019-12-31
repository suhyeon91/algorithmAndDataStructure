//퀵정렬: 기준점을 획득한 후 해당 기준점을 기준으로 배열을 나눈다. (왼쪽엔 기준점보다 작은쪽 오른쪽엔 기준점보다 큰쪽)
//해당 방법으로 모든 항목이 정렬될 때 까지 반복
//기준점은 배열의 중간값이 이상적이지만 계산하는데 선형 시간이 걸리므로 첫번째 값이나 마지막 값으로 기준점을 잡는다.
//재귀정렬
//시간복잡도: O(nlog2(n)), 최악의 경우 O(n^2)
//공간복잡도: O(log2(n))

function quickSort(arr){
	if(arr.length === 0) return [];
    let pivot = arr.shift();
    let left = [], right = [];
    for(let i = 0, len = arr.length; i< len; i++){
        if(arr[i] > pivot){
            right.push(arr[i]);
        }else{
            left.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}