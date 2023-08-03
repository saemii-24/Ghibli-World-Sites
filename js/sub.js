 /*youtube API*/
 let tag = document.createElement('script');
 tag.src = "https://www.youtube.com/iframe_api";
 let firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 let player;
 function onYouTubeIframeAPIReady() {
   player1 = new YT.Player('player1', {
     videoId: '70NhEBzLKU8',
     playerVars:{ 
      autoplay: true, 
      loop: true, 
      playlist : '70NhEBzLKU8' 
      }
   });
 }

 function onPlayerReady(event) {
   event.target.playVideo();
 }

 let done = false;
 function onPlayerStateChange(event) {
   if (event.data == YT.PlayerState.PLAYING && !done) {
     setTimeout(stopVideo, 6000);
     done = true;
   }
 }
 function stopVideo() {
   player.stopVideo();
 }

 /*youtube_popup*/
 const closePopup = document.getElementById("close");
 const openPopup = document.getElementById("play");
 const popup = document.querySelector('#movie_video .full_inner');
 
openPopup.addEventListener('click', function(){
  popup.classList.add('active');
  openPopup.innerText=('stop_circle');
 });

 closePopup.addEventListener('click', function(){
  popup.classList.remove('active');
  openPopup.innerText=('play_circle');
 });


 /*scrollbar*/
 const scrollBar = document.querySelector('#story_scroll');
 const synopsis = document.querySelector('#synopsis section');
 const circle = document.querySelectorAll('.circle');

 scrollBar.addEventListener('input', function() {
  let scrollValue = parseInt(scrollBar.value);
  synopsis.style.transform = `translateX(${-scrollValue*27.5}px)`;
  scrollBar.style.background = `linear-gradient(to right, #00B6FF ${scrollValue}%, #eeeeee ${scrollValue}%)`;

  if(scrollValue>=scrollBar.max){
    circle[3].classList.add('active');
    circle[2].classList.add('active');
    circle[1].classList.add('active');
  }else if(scrollValue>=scrollBar.max*0.66){
    circle[3].classList.remove('active');
    circle[2].classList.add('active');
    circle[1].classList.add('active');
  }else if(scrollValue>=scrollBar.max*0.33){
    circle[3].classList.remove('active');
    circle[2].classList.remove('active');
    circle[1].classList.add('active');
  }else{
    circle[3].classList.remove('active');
    circle[2].classList.remove('active');
    circle[1].classList.remove('active');
  }


});
