function checkAnagram(str1, str2){
    let flag = true;
    //check they are the same length
    if (str1.length !== str2.length) return false;
    //Make an object count how many of each letter in Str1
    let str1Obj = {}
    Array.from(str1).forEach( letter => {
        if(str1Obj[letter]) str1Obj[letter]++
        else str1Obj[letter] = 1;
    })
    //For each letter in Str2, subtract 1 from the Str1 object. If it sees a negative number it cant be an anagram
    Array.from(str2).forEach(letter => {
        str1Obj[letter]--
        if (str1Obj[letter] === -1) flag = false
    })
    //if none of the above it must be an anagram
    return flag

}

console.log(checkAnagram("iceman", "cinema"))


