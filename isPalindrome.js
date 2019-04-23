function isPalindrome(string){
   string = string.toLowerCase();  //make the string all lower case for ease
   letterArr = Array.from(string);  //make an array out of the string
   validArr = Array.from("abcdefghijklmnopqrstuvwxyz"); //make an array of all lower case letters
   var cleanLetterArr = [];         //where we will make a cleansed version of the letters arr without non-A-Z stuff
   letterArr.forEach(letter => {    //for each element of the letters array
       if (validArr.indexOf(letter) > -1) cleanLetterArr.push(letter); //if it exists in validArr, push it to the cleanLetterArr
   });
   console.log(cleanLetterArr); 
  
  
//  Version 1 
//    var palindrome = true;    //string is a palindrome unless  proved otherwise
//    const midpoint = Math.floor(cleanLetterArr.length / 2) //we only need to check till half way...
//    console.log(midpoint);
//    for (var i=0; i<midpoint;i++){ //from 0 to midpoint
//         let endpoint = (cleanLetterArr.length-(i+1)); //endpoint is the 'opposite' of i
//         if (letterArr[i] !== cleanLetterArr[endpoint]){ //if the endpoint doesnt = i then it cant be a palindrome...
//             palindrome = false                          // Aww...
//         };
//     };
//     return palindrome //return true or false;      

if (cleanLetterArr.join('') === cleanLetterArr.reverse().join('')) return true;
else return false;
};

console.log(isPalindrome("Madam I'm Adam"));


