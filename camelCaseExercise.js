//Camel Case Exercise
// For this challenge you will be converting a string into camel case format.
/*
have the function CamelCase(str) take the str parameter being passed and return it in proper camel case format where the first letter of each word is capitalized (excluding the first letter). The string will only contain letters and some combination of delimiter punctuation characters separating each word.
For example: if str is "BOB loves-coding" then your program should return the string bobLovesCoding.
*/


//Sample 1
function CamelCase(str) { 
    // code goes here
    //use toLowerCase to change everything to lower case
    //use split with \W+ to target delimiters at special characters (+ to go through the whole string)
    let newStr = str.toLowerCase().split(/\W+/);
  
    //loop through the newStr from index 1 (to skip first letter) and cap the first letter of subsequent words after the spaces
    //substring is to concat the remaining char to the resulting capitalised letters
    console.log(newStr); //checking progress. Can be removed
    for (let i = 1; i < newStr.length; i++) {
      newStr[i] = newStr[i][0].toUpperCase() + newStr[i].substring(1);
    }
    console.log(newStr); //checking progress. Can be removed

    //concat the words together
    let camelStr = newStr.join(""); 
    
    //return to be called by function
    return camelStr; 
  }
     
  // // keep this function call here 
  console.log("The result is " + CamelCase("cats AND*Dogs-are Awesome"));


//sample 2
  const camelCaseConvert = function(stringInput){
    stringInput = stringInput.replace(/^[\W_]+|[\W_]+$/g,"");
    stringInput = stringInput.split(/[\W_]+/g);

    for (let i = 0; i < stringInput.length; i++){
        stringInput[i] = stringInput[i].toLowerCase();
        if (i !== 0){
            stringInput[i] = stringInput[i][0].toUpperCase() + stringInput[i].substring(1);
        }
    }

    return stringInput.join("");
}

console.log("The result is " + camelCaseConvert(" __-  This  is***$@$*% an example String--__"));
