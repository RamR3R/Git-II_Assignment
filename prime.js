var a = 23;
var count = 0;
for (i = 1; i <= a; i++) {
  if (a % i == 0) {
    count++;
  }
}
if (count == 2) {
  console.log("Yes");
} else {
  console.log("No");
}
