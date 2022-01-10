let num=require("readline-sync")
var num1=num.questionInt("how many times you want to play the game")
var random_num=(Math.floor(Math.random()*10)+1)
console.log(random_num)
for (var i=1;i<=num1;i++){
    var guess=num.questionInt("enter your guess number")
    if (guess== random_num){
        console.log("your guess is correct")
        break
    }
    else{
        console.log("your guess is not correct")
    }
}