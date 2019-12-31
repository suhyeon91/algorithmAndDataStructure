function isPrimeNumber(number){
    if(number <= 1){
        return false;
    }
    if(number <= 3){
        return true;
    }

    if(number % 2 === 0 || number % 3 === 0){
        return false;
    }

    for(var i = 5; i*i <= number; i+=6){
        if(number % i === 0 || number % (i+2) === 0){
            return false;
        }
    }
    
    return true;
}

function arrPrimeNumbers(n){
    var arr = [];
    for(var i = 0; i< n; i++){
        if(isPrimeNumber(i)){
            arr.push(i);
        }
    }
    return arr;
}