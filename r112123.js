

// var i=1;
// str=""
// while(i<=5){
//     var b=1;
//     while(b<=5-i){
//        str=str+" "
//        b=b+1
//     }
//     var j=1;
//     while(j<=i){
//         str=str+i
//         j=j+1
//     }
//     str=str+"\n"
//     i++
// }
// console.log(str)



var i=1;
str=""
while(i<=5){
    var b=1;
    while(b<=5-i){
       str=str+" "
       b=b+1
    }
    var j=1;
    while(j<=i){
        str=str+j
        j=j+1
    }
    str=str+"\n"
    i++
}
console.log(str)