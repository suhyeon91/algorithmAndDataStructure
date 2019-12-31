function buildBadMatchTable(str){
    let tableObj = {}, strLength = str.length;

    for(let i = 0; i< strLength; i++){
        tableObj[str[i]] = strLength - 1 - i;
    }

    if(!tableObj[str[strLength - 1]]){
        tableObj[str[strLength - 1]] = strLength;
    }

    return tableObj;
}

buildBadMatchTable('data');
buildBadMatchTable('struct');
buildBadMatchTable('roi');
buildBadMatchTable('jam');

function boyerMoore(str, pattern){
    let badMatchTable = buildBadMatchTable(pattern);
    let offset = 0, patternLastIndex = pattern.length - 1, 
    scanIndex = patternLastIndex, maxOffset = str.length - pattern.length;

    while(offset <= maxOffset){
        scanIndex = 0;
        while(pattern[scanIndex] === str[scanIndex + offset]){
            if(scanIndex === patternLastIndex){
                return offset;
            }
            scanIndex++;
        }
        let badMatchString = str[offset + patternLastIndex];
        if(badMatchTable[badMatchString]){
            offset += badMatchTable[badMatchString];
        } else{
            offset += 1;
        }
    }
    return -1;
}

boyerMoore('jellyjam', 'jelly');
boyerMoore('jellyjam', 'jelly');
boyerMoore('jellyjam', 'sam');