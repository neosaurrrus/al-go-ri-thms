 // Ok the clever answer is return [...(new Set(arr))].length
//Lets figure it out using multiple pointers

function countUniqueValues(arr){
    let left = 0;
    let right = 1;
    let uniqueValues = 0
    console.log(uniqueValues)
   
    while (left <= arr.length-1){
        console.log(left + " " + right)
        if (arr[left] !== arr[right]) {
            uniqueValues++
        }
        console.log(uniqueValues)
        left = right
        right++
    }
return uniqueValues;
}

console.log(countUniqueValues([1,1,2,2,3,3]))


