// var i=5
// str=""
// while (i>=1){
//     var j=5
    
//     while (j>=1){
//         str=str+i
//        j--
//     }
//     str=str+"\n"
//     i--
// }
// console.log(str)
// 55555
// 44444
// 33333
// 22222
// 11111

str=""
for(var i=1;i<=5;i++){
    for (var j=1;j<=5;j++){
      str=str+i
    }
    str=str+"\n"
}
console.log(str)
11111
22222
33333
44444
55555