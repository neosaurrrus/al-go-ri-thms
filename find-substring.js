function subStringCount(str, subStr){
    let count = 0
    Array.from(str).forEach( (letter,index) => {
        if (letter === subStr[0]){
            if (str.slice(index, index+subStr.length) === subStr) count++
        }
    })
    return count
}




console.log(subStringCount("meow meow meow", "meow"));

// console.log(slidingWindowSubStringCount("meow meow meow", "meow"));

