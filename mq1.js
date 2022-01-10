
//  convert ascii value to character
let n=require("readline-sync");
let choose_ascii=(n.questionInt("enter number: "));
var ascii_char=97+choose_ascii
for (var i=97;i<ascii_char;i++) {
    var h=(String.fromCharCode(i));
    console.log(h)
}

// convert  character  to ascii value 
// let n=require("readline-sync");
// var string = n.question('Enter a character: ');
// const result = string.charCodeAt();

// console.log(`The ASCII value is: ${result}`);

// let n=require("readline-sync");
// var string1 = n.questionInt('Enter a ascii values: ');
// let char = String.fromCharCode(string1);
// console.log(char)