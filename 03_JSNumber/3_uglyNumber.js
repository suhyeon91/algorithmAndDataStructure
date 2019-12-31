function divider(number, divisor){
    while(number % divisor === 0){
        number /= divisor;
    }
    return number;
}

function isUgly(number){
    number = divider(number, 2);
    number = divider(number, 3);
    number = divider(number, 5);

    return number === 1;
}

function arrUglyNumbers(n){
    var arrUgly = [];

    for(var i = 1; i <= n; i++){
        if(isUgly(i)){
            arrUgly.push(i);
        }
    }
    return arrUgly;
}