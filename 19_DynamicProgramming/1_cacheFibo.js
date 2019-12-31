let cache = {};
function fiboBest(n){
    if(n <= 1) return n;
    if(cache[n]) return cache[n];

    return (cache[n] = fiboBest(n - 1) + fiboBest(n - 2));
}

fiboBest(10)