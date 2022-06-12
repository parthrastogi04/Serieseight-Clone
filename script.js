window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);

function videoScroll() {

  if ( document.querySelectorAll('video[autoplay]').length > 0) {
    var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('video[autoplay]');

    for (var i = 0; i < videoEl.length; i++) {

      var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;

      if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }

    }
  }

}
var dir='right';


var dir='right';

function reset1(){
clearTimeout(my_time);
document.getElementById('i1').style.left= "500px";
document.getElementById('i1').style.top= "100px";
document.getElementById("msg").innerHTML="";
}

function disp(){
var step=5; // Change this step value
//alert(dir);

var y=document.getElementById('i1').offsetTop;
var x=document.getElementById('i1').offsetLeft;
if(x >= 1000 ){
dir = 'left';
}
if(x <= 500 ){
dir = 'right';
}

if(dir=='right'){x= x +step;}
else{x=x - step;}
document.getElementById('i1').style.left= x + "px"; // horizontal  movment
//////////////////////
}
function timer(){
disp();
var y=document.getElementById('i1').offsetTop;
var x=document.getElementById('i1').offsetLeft;
document.getElementById("msg").innerHTML="X: " + x  + " Y : " + y
my_time=setTimeout('timer()',10);
}
