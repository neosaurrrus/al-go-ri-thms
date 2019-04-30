// function swap(arr, posA, posB){
//     [arr[posA], arr[posB]] = [arr[posB], arr[posA]]
// }

function insertionSort(arr){
   let sortedArr = [arr[0]]
   for (i=1; i<=arr.length-1; i++){
     
      let insertionElement = arr[i]

        for (let j=sortedArr.length-1; j>=0; j--){
           
            if (insertionElement > sortedArr[j]){
                if(j===sortedArr.length-1) sortedArr.push(insertionElement)
                else sortedArr.splice(j+1, 0, insertionElement)
                break
            }

            if (j===0){
                sortedArr.unshift(insertionElement)
                break
            }

        }
    }
    return sortedArr;
    console.log(sortedArr)
}
    

console.log(insertionSort([9,6,1,5,69,3,11,304,1,16,17,19,4]))

