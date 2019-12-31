function findSumBetter(arr, weight){
    var hashtable = {};

    for(var i = 0, arrLength = arr.length; i< arrLength; i++){
        var currentElement = arr[i];
        var difference = weight - arr[i];
        if(hashtable[currentElement] !== null){
            return [i, hashtable[currentElement]];
        }else{
            hashtable[difference] = i;
        }
    }
}l