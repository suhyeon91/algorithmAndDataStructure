//계수정렬: 값들을 비교하지 않기 때문에 O(k+n)시간안에 수행된다.
//계수정렬은 숫자에 대해서만 동작하며 특정범위가 주어져야한다.
//항목들을 교환하면서 정렬하는 대신에 배열들의 각 항목의 등장횟수를 센다.
// 각 항목의 등장횟수를 세고 해당 등장횟수를 이용하여 새로운 배열을 생성할 수 있다.
// 시간복잡도: O(k + n)
// 공간복잡도: O(k)

function countSort(arr){
    let hash = {}, countArr = [];
    for(let i = 0, len = arr.length; i < len; i++){
        if(!hash[arr[i]]){
            hash[arr[i]] = 1;
        }else{
            hash[arr[i]]++;
        }
    }

    for(let key in hash){
        for(let i = 0; i < hash[key]; i++){
            countArr.push(parseInt(key));
        }
    }
    return countArr;
}