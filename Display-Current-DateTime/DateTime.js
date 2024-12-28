var today = new Date();

var day = today.getDay();

var dayslist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log("Today is " + dayslist[day] + ".");

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

var prepand = (hour >= 12) ? "PM" : "AM";

if (hour === 0) {
    hour = 12; // Midnight
    prepand = 'AM';
} else if (hour === 12) {
    prepand = 'PM';
} else {
    hour = hour % 12; 
}

minute = minute < 10 ? '0' + minute : minute; 
second = second < 10 ? '0' + second : second; 
console.log("The current time is " + hour + ":" + minute + ":" + second + " " + prepand);