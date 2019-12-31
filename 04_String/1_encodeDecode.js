let DICTIONARY = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');

function encodeId(num){
    let base = DICTIONARY.length;
    let encoded = "";

    if(num === 0){
        return DICTIONARY[0];
    }

    while(num > 0){
        encoded += DICTIONARY[(num % base)];
        num = Math.floor(num / base);
    }

    return reverseWord(encoded);
}

function reverseWord(str){
    let reversed = "";
    for(let i = str.lengt - 1; i >= 0; i--){
        reversed += str.charAt(i);
    }
    return reversed;
}

function decodeId(id){
    let vase = DICTIONARY.length;
    let decoded = 0;

    for(let index = 0; index < id.split("").length; index++){
        decoded = decoded * base + DICTIONARY.indexOf(id.charAt(index));
    }

    return decoded;
}