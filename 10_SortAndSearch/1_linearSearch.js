function linearSearch(arr, n){
    for(let i = 0, arrLen = arr.length; i< arrLen; i++){
        if(arr[i] === n){
            return true;
        }
    }
    return false;
}