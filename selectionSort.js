function swap(arr, posA, posB){
 
    [arr[posA], arr[posB]] = [arr[posB], arr[posA]]
}

function selectionSort(arr){
    let startingPointer = 0;
    for (let j = 0; j < arr.length ; j++){


        //store the first element as the smallest value youve seen so far.
       
        let minimumPointer = j

        //compare this item to the next item in the array until you find a smaller number
        for (let i = startingPointer+1; i < arr.length ; i++){
        //if a smaller number is found, designate that 
        //smaller number to be the new minimum
            if (arr[i] < arr[minimumPointer]) { minimumPointer = i }
        }


        //continue until the end of the array.
        //if the minimum is not the value you initially began with swap the two values.

        console.log(startingPointer, minimumPointer)
        if (minimumPointer !== startingPointer) { swap(arr, startingPointer, minimumPointer)}

        startingPointer++

        //repeat with next element till array is worked
    }

    return arr
}

console.log(selectionSort([6,5,2,4,3,2,7,88,3,1]))
