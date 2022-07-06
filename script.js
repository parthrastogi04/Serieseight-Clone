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

window.addEventListener("scroll",function(){
  var sc=window.scrollY;
  if(sc>2000){
    this.document.querySelector('.skateboard').style.marginLeft=(sc-3300)+"px";
  }
})
window.addEventListener("scroll",function(){
  var sc=window.scrollY;

  if(sc>430){
    document.querySelector('.video-wrap').style.width=Math.min(sc-390,100)+"%";
  }
  else{
    document.querySelector('.video-wrap').style.width="65%";
  }
})

