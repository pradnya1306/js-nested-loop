var i=1;
str=""
while (i<=5){
    var j=1;
    while (j<=i){
       str=str+j
       j++
    }
    str=str+"\n"
    i++
}
console.log(str)

// 1
// 12
// 123
// 1234
// 12345