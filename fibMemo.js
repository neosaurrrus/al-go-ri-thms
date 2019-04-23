function fibMemo (index, cache){
    cache = cache || []; //if cache doesnt exist make it
    if (cache[index]) return cache[index]; //if cache at the index exists, retrieve it
    else {
        if (index < 3) return 1;
        else {
            cache[index] = fibMemo(index -1, cache) + fibMemo(index - 2, cache)
        }
    }
    return cache[index];
}
console.log(fibMemo(4));