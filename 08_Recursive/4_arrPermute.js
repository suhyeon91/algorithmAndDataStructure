function swap(arr, index1, index2){
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function permute(arr, startIndex, endIndex){
    if(startIndex === endIndex){
        console.log(arr);
    } else{
        for(var i = startIndex; i < endIndex + 1; i++){
            swap(arr, startIndex, i);
            permute(arr, startIndex + 1, endIndex);
            swap(arr, startIndex, i);
        }
    }

}

function permuteExecute(strArray){
    permute(strArray, 0, strArray.length - 1);
}