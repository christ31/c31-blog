// It's show time
// Thanks to Aaron Farrar https://codepen.io/afarrar/pen/JRaEjP
function showTime(){
  var date = new Date();
  var h = date.getHours(); // 1 - 12
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59

  var width = window.innerWidth;
  var height = window.innerHeight;

  var session = "AM";
  var light = "🌞";  

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October","November", "December"];
  
  if(h == 0){
    h = 12;
    session = "AM";
  }
  
  if(h >= 12){
    session = "PM";
  }

  if(h > 12){
    h = h - 12;
  }

  if((h>5 && h<12) && session == "PM"){
    light = "🌙";
  } else if((h==12 || h<5) && session == "AM"){
    light = "🌙";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + " " + session;

  var year = date.getFullYear();
  var day = date.getUTCDate();
  var month = monthNames[date.getMonth()];

  var fulldate = day + " " + month + " " + year;

  // document.getElementById("MyClockDisplay").innerText = date+time;
  document.getElementById("MyClockDisplay").textContent = time;
  
  setTimeout(showTime, 50);
  
}

showTime();