var i=1
var k=1
str=""
while (i<=4){
    j=1
    while(j<=i){
        str=str+k
        j=j+1
        k=k+1
    }
    str=str+"\n"
    i=i+1
}
console.log(str)