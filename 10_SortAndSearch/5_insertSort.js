//삽입정렬: 배열을 순차적으로 검색하면서 정렬되지 않은 항목들을 배열의 왼쪽으로 이동시킴
//이러한점은 선택정렬과 비슷

function insertSort(arr){
    let result = [...arr];

    for (let i = 1; i < result.length; i++) {
        let temp = result[i]; // 현재값 저장
        let aux = i - 1; // 정렬된 부분의 현재 인덱스

        // 좌측 값이 현재 값보다 클 때 swap
        while (aux >= 0 && result[aux] > temp) {
            result[aux + 1] = result[aux];
            aux--;
        }

        // 임시로 저장한 현재값을 정렬된 부분의 인덱스에 부여
        result[aux + 1] = temp;
    }

    return result;
}