function isPalindromeRecursive(word){
    return isPalindromeRecursiveHelper(word, 0, word.length - 1);
}

function isPalindromeRecursiveHelper(word, startIndex, endIndex){
    if(startIndex >= endIndex){
        return true;
    }
    if(word.charAt(startIndex) !== word.charAt(endIndex)){
        return false;
    } else{
        return isPalindromeRecursiveHelper(word, startIndex + 1, endIndex - 1);
    }
}
