//선택정렬: 가장 작은 항목을 찾아서 해당 항목을 배열의 현 위치에 삽입하는 방식
//시간복잡도: o(n^2);
//공간복잡도: o(1)

function selectionSort(arr){
    let min;

    for(let i = 0, iLen = arr.length - 1; i < iLen; i++){
        min = i;
        for(let j = i + 1; j < iLen + 1; j++){
            if(arr[min] > arr[j]){
                min = j;
            }
        }

        if(min !== i){
            let temp = arr[i]
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}