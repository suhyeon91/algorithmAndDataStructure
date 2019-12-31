function longestPrefix(str){
    let prefix = [];
    let maxPrefix = 0;

    prefix[0] = 0;
    for(let i = 1, iLength = str.length; i< iLength; i++){
        while(str.charAt(i) !== str.charAt(maxPrefix) && maxPrefix > 0){
            maxPrefix = prefix[maxPrefix - 1];
        }

        if(str.charAt(maxPrefix) === str.charAt(i)){
            maxPrefix++;
        }

        prefix[i] = maxPrefix;
    }
    return prefix;
}

console.log(longestPrefix('ababaca'));

function KMP(str, pattern){
    //접두사 표 만들기
    let prefixTable = longestPrefix(pattern);
    let patternIndex = 0, strIndex = 0;

    while(strIndex < str.length){
        if(str.chartAt(strIndex) !== pattern.charAt(patternIndex)){
            //경우 1: 두 문자가 다르다.
            if(patternIndex !== 0){
                //가능하면 접두사 표 사용
                patternIndex = prefixTable[patternIndex - 1];
            } else{
                //문자열 인덱스를 다음 문자열로 증가시킴
                strIndex++;
            }
        } else if(str.chartAt(strIndex) === pattern.charAt(patternIndex)){
            //경우 2: 두 문자가 같다.
            strIndex++;
            patternIndex++;
        }

        //패턴 발견
        if(patternIndex === pattern.length){
            return true;
        }
    }
    return false;
}