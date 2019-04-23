function reverseWords(str){
var result = '';
var strArray = str.split(' ');
var reversedWordsArray= [];

strArray.forEach(word =>{
    var reversedWord = '';
        for (var i = word.length -1 ; i >=0; i--){
            reversedWord+=word[i];
        }
    reversedWordsArray.push(reversedWord);
});
console.log (reversedWordsArray);


return reversedWordsArray
};

console.log(reverseWords("This is a Robot"));