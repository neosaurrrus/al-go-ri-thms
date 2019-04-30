//Unfinished


function joinArrays(arrArr){ 
    //merge any multiple arrays into one array
    let splitArr = []
   arrArr.forEach(arr => {
       splitArr.push(...arr)
   })
   return splitArr
}

function splitArray(arr){
    //turns every element in an array into a pair
    return arr.map(el => {
        return [el,]
    })
}

function pairArrays(arrArr){
    //turns an array of arrays into an array of array pairs
    let pairedArr = []
    console.log(arrArr.length)
    let i = 0
    while(i<=arrArr.length){
        let pairArr = [arrArr[i]]
        if ((i+1) < arrArr.length){pairArr.push(arrArr)}


        pairedArr.push([arrArr[i], arrArr[i+1]])
        i = i+2
    }
    return pairedArr
}

let unsortedArray = (joinArrays([[5, 17, 34,100], [3,1,9,55]] ));
let unmergedArray = splitArray(unsortedArray)

console.log(pairArrays(unmergedArray))


