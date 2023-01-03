var name = "naman";
var empty = "";
for (i = name.length - 1; i >= 0; i--) {
  empty = empty + name[i];
}
if ((name = empty)) {
  console.log("Yes");
} else {
  console.log("No");
}
