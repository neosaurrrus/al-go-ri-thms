function harmlessRandomNote(noteText, magazineText){
    var noteArr = noteText.split(" ");     //split the words in the string into an array
    var magazineArr = magazineText.split(" "); //see above
    var magazineObj = {}; //create an object to contain counts of each word

    magazineArr.forEach(word => {   //for every word in the magazine
        if (!magazineObj[word]) magazineObj[word] = 0 //if magazineObj doesnt have the word as property. Make it a property equaling 0
            magazineObj[word]++;                     //add 1 to the magazineObj.word
    });
    console.log(magazineObj.cat);
    var noteIsPossible = true;      //we say the note is possible unless...

    noteArr.forEach(word =>{
        if (magazineObj[word]) { //if you can find the word in the magazine...
            magazineObj[word]--;      //subject 1 from the count
            if (magazineObj[word]<0) noteIsPossible = false; //if the count is negative, the note cant be made
        }
        else noteIsPossible = false; // if you cant fid the word in the magazine, the word cant be made
    });

    console.log(`Number of: ${magazineObj.cat}`);
return noteIsPossible;  
};
harmlessRandomNote("this cat", "this is a cat cat cat");    