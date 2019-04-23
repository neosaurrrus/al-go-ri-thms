//Sliding Window
//Working out Max sum of n consecutive integers
function countUniqueValues(arr, n){
    let max = 0
    let right = n-1
    let left = -1

    let window = arr.slice(0, n)
    console.log(window)

    let windowTotal = window.reduce((i, number) => {
        return number + i
    }, 0)
    console.log(windowTotal)
    while (arr[right]){
        console.log(windowTotal)
        left++
        right++
        windowTotal= windowTotal+arr[right]
        windowTotal = windowTotal-arr[left]
        if (windowTotal > max) max = windowTotal;
        console.log(max)
    }
   return max
}

console.log(countUniqueValues([1,2,3,3,4,3,4,3,2,6,5,1], 3))


