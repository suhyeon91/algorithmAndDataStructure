//시간복잡도: O(n^2)
//공간복잡도: O(1)

function findTwoSome(arr, sum){
    for(let i = 0, arrLen = arr.length; i< arrLen; i++){
        for(let j = i + 1; j < arrLen; j++){
            if(arr[i] + arr[j] === sum){
                return true;
            }
        }
    }
    return false;
}


//시간복잡도, 공간복잡도: O(n)
function findTwoSomeStore(arr, sum){
    let store = {};
    for(let i = 0, arrLen = arr.length; i< arrLen; i++){
        if(!store[arr[i]]){
            return true;
        }else{
            store[sum - arr[i]] = arr[i];
        }
    }
    return false;
}