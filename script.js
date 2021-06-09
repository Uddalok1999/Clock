setInterval(displayClock, 500);
function displayClock(){
var time = new Date();
var hrs = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
var meridian
var year = time.getFullYear();
var month = time.getMonth()+1;
var dates = time.getDate();

if(hrs>12){
    hrs = hrs - 12;
    meridian = "PM";
}
else{
    meridian = "AM";
}
if(hrs==0){
    hrs = 12;
}
if(min<10){
    min = "0" + min;
}
if(sec<10){
    sec= "0" + sec;
}
if(month<10){
    month= "0" + month;
}
document.getElementById('clock').innerHTML= hrs+":"+min+":"+sec+" "+meridian;
document.getElementById('time').innerHTML= dates+"/"+month+"/"+year;
}
