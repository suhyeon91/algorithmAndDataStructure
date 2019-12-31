function checkDuplicate(arr){
    let set = new Set(arr);
    return set.size < arr.length;
}

function uniqueList(arr1, arr2){
    let unique = new Set(arr1.concat(arr2));
    return Array.from(unique);
}