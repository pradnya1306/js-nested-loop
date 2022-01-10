str=""
var i=1
while(i<=5){
    h =5-i
    var b=1  
    while(b<=h){
        str=str+" "
        b++
    }
    var j=5
    while(j>=h+1){
      str=str+j
      j--
    }
    str=str+"\n"
    i++   
}
console.log(str)
//     5
//    54
//   543
//  5432
// 54321