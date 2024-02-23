var date = new Date();
var time = ":" + date.getMinutes() + ":" + date.getSeconds();
// console.log(time);
var h = date.getHours();
var fr = "";
if (h > 11) {
    h -= 12;
    fr = "PM";
}
else {
    fr = "AM";
}
time = h + time + " " + fr;
console.log(time);
