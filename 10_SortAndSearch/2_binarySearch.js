function binarySearch(arr, n){
    let lowIndex = 0, highIndex = arr.length - 1;
    while(lowIndex <= highIndex){
        let midIndex = Math.floor((lowIndex + highIndex) / 2);

        if(arr[midIndex] > n){
            highIndex = midIndex;
        } else if(arr[midIndex] < n){
            lowIndex = midIndex;
        } else{
            return midIndex;
        }
    }
    return -1;
}