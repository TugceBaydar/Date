


//hh:mm:ss
//we always want 2 digits in each spot
//we dont want military time

function getTime() {

      var now = new Date();

      var hh = addZero(formatHours(now.getHours()));
      var mm = addZero(formatHours(now.getMinutes()));
      var ss = addZero(formatHours(now.getSeconds()));

      console.log(hh + ":" + mm + ":" + ss)

      setTimeout(function() {
        getTime();
      },1000)

}
function addZero(time) {
  if(time < 10) {
    return "0" + time;
  }else {
    return time;
  }
}

function formatHours(hours) {
  if(hours > 12) {
    return hours - 12 ;

  }else {
    return hours;
  }
}
getTime();
