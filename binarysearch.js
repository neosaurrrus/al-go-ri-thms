function binarySearch(numArray, key){
    var middleIndex = Math.floor(numArray.length/2)
    var middleElement = numArray[middleIndex];

    if(middleElement ===  key) return true;
    else if(middleElement < key && numArray.length > 1 ) {
        return binarySearch(numArray.splice(middleIndex, numArray.length),key)
    } 
    else if(middleElement > key && numArray.length > 1 ) {
        return binarySearch(numArray.splice(0, middleIndex),key)
    }
    else return false;
};
console.log(binarySearch([5,7,12,36,39,42,56,71], 56));
