function modularExponentation(base, exponent, modular){
    if(modular === 1){
        return 0;
    }

    var val = 1;

    for(var i = 0; i< exponent; i++){
        val = (val * base) % modular;
    }
    return val;

}