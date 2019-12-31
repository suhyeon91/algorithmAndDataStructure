function baseDecToBin(n){
    var binaryString = "";

    function baseDecToBinHelper(n){
        if(n < 2){
            binaryString += n;
            return;
        } else {
            baseDecToBinHelper(Math.floor(n / 2));
            baseDecToBinHelper(n % 2);
        }
    }
    baseDecToBinHelper(n);
    return binaryString;
}