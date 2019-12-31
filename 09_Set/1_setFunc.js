function intersectSets(setA, setB){
    let intersection = new Set();

    for(let val of setB){
        if(setA.has(val)){
            intersection.add(val);
        }
    }
    return intersection;
}

function isSuperset(setA, subset){
    for(let val of subset){
        if(!setA.has(val)){
            return false;
        }
    }
    return true;
}

function unionSet(setA, setB){
    let union = new Set(setA);
    for(let val of setB){
        if(!union.has(val)){
            union.add(val);
        }
    }
    return union;
}

function differenceSet(setA, setB){
    let difference = new Set(setA);
    for(let val of setB){
        if(difference.has(val)){
            difference.delete(val);
        }
    }
    return difference;
}