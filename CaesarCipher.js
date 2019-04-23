function caesarCipher(str,num){
let resultArr = [];
var strLowerCased = str.toLowerCase();
letterArr = Array.from("abcdefghijklmnopqrstuvwxyz");
strArr = Array.from(strLowerCased);
originalStrArr = Array.from(str);
strArr.forEach(letter => {
    console.log(letter)
    if (letter === " "){resultArr.push(" ")}
    else {
        let index = ((letterArr.indexOf(letter)+num) % 26);
        console.log(index)
        if (index < 0 ){index = 26 + index};
        resultArr.push(letterArr[index]);
    };
});

return resultArr.join('');
};

console.log(caesarCipher('zoo keeper',-40)) 

