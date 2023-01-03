var a=23;
var count = 0;
for(i=2;i<a;i++){
if(a%i==0)
count++;
break;
}
if(count)
console.log("No");
else
console.log("Yes");
