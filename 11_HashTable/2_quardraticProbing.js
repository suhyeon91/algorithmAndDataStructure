class HashTable{
    constructor(size){
        this.size = size;
        this.keys = this.initArray(size);
        this.values = this.initArray(size);
        this.limit = 0;
    }

    put(key, value){
        if(this.limit >= this.size) throw 'hash table is full';

        var hashedIndex = this.hash(key), squareIndex = 1;

        //이차탐사
        while(this.keys[hashedIndex] !== null){
            hashedIndex += Math.pow(squareIndex, 2);

            hashedIndex = hashedIndex % this.size;
            squareIndex++;
        }

        this.keys[hashedIndex] = key;
        this.values[hashedIndex] = value;
        this.limit++;
    }

    get(key){
        var hashedIndex = this.hash(key), squareIndex = 1;

        while(this.keys[hashedIndex] !== key){
            hashedIndex += Math.pow(squareIndex, 2);
            
            hashedIndex = hashedIndex % this.size;
            squareIndex++;
        }

        return this.values[hashedIndex];
    }

    hash(key){
        //키가 정수인지 확인
        if(!Number.isInteger(key)) throw 'must be Integer';
        return key % this.size;
    }

    initArray(size){
        var array = [];
        for(var i = 0; i < size; i++){
            array.push(null);
        }
        return array;
    }

}