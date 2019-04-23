function twoSum(numArray, sum){
var result = [];

for (var i=0; i<numArray.length;i++){
    for(var j=(i+1); j<numArray.length;j++){
        if (numArray[i] + numArray[j] === sum){
            var cache = [numArray[i],numArray[j]];
            result.push(cache);
            console.log(result);
        };
    };
};
return result;
};

console.log(twoSum([1,6,4,5,3,3], 7));