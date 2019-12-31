//병합정렬: 하위배열에 하나의 항목이 존재할 때 까지 배열을 하위배열로 나눈다.
//나눠진 하위 배열을 정렬된 순서로 연결(병합)한다.
//merge 함수는 양쪽 배열의 모든 항목을 정렬된 순서로 더해서 결과배열에 저장해야한다.
//각 배열의 인덱스를 생성해 이미 비교한 항목들을 추적해야한다.
//한 배열의 모든 항목을 다 사용한 뒤 남은 항목들을 결과 배열에 더한다.
//시간복잡도: O(nlog2(n))
//공간복잡도: O(n)

function merge(left, right){
    let result = [], leftIndex = 0, rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex++]);
        } else{
            result.push(right[rightIndex++]);
        }
    }

    let leftRemains = left.slice(leftIndex), rightRemains = right.slice(rightIndex);
    return result.concat(leftRemains, rightRemains);
}

function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }

    let midPoint = Math.floor((arr.length)/2),
        leftArr = arr.slice(0, midPoint),
        rightArr = arr.slice(midPoint);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}