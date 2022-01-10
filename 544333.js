var i=5;
str=""
while (i>=1){
    var j=5;
    while (j>=i){
        str=str+i
        j--
    }
    str=str+"\n"
    i--
}
console.log(str)
// 5
// 44
// 333
// 2222
// 11111