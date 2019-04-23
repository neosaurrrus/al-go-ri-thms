// function bubbleSort(array){ //Nested Loops. Each time, the last element(+1) doesnt need to be sorted so I decreases which means less loops.
//     for(i=array.length; i>0;i--){
//         for(j=0; j<i;j++){
//             if(array[j] > array[j+1]){
//                 var nextValue = array[j+1];
//                 array[j+1] = array[j];
//                 array[j] = nextValue;
//             };
//         };
//     console.log(array)
//     };
// return array;
// };

// console.log(bubbleSort([12,13,12,12,12]));



function bubbleSort(arr){
    let end = arr.length - 1
    let start = 0
    while (start !==end){
        for (element in arr) {
            element = Number(element)
            let next = element+1
            console.log(element, next)
       
            console.log(next)
            console.log(arr[next])
            if (arr[element] > arr[next]) {
                console.log("swapping" , element, next)
                [arr[element], arr[next]] = [arr[next], arr[element]]
            }
        }

        if (start === arr.length - 1) return arr
        end--
        start++
    }
    return arr
}

console.log(bubbleSort([6,5,2,4,3,2,7,88,3,1]))
