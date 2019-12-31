function flattenDictionary(dictionary){
    var flattendDictionary = {};

    function flattenDictionaryHelper(dictionary, propName){
        if(typeof dictionary !== 'object'){
            flattendDictionary[propName] = dictionary;
            return;
        }

        for(var prop in dictionary){
            if(propName === ''){
                flattenDictionaryHelper(dictionary[prop], prop);
            }else{
                flattenDictionaryHelper(dictionary[prop], propName + '.' + prop);
            }
        }
    }

    flattenDictionaryHelper(dictionary, '');
    return flattendDictionary;
}