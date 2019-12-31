//버블정렬: 전체 배열을 순회하면서 항목이 다른 항목보다 큰 경우 두 항목을 교환

function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

var bubbleSort = function(array) {
    var length = array.length;
    var i, j, temp;
    for (i = 0; i < length - 1; i++) { // 순차적으로 비교하기 위한 반복문
      for (j = 0; j < length - 1 - i; j++) { // 끝까지 돌았을 때 다시 처음부터 비교하기 위한 반복문
        if (array[j] > array[j + 1]) { // 두 수를 비교하여 앞 수가 뒷 수보다 크면
          temp = array[j]; // 두 수를 서로 바꿔준다
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  };
  