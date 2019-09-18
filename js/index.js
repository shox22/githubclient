var wrapper = document.querySelector(".wrapper");
var text = document.querySelector(".text");

var textCont = text.textContent;
text.style.display = "none";

for (var i = 0; i < textCont.length; i++) {
  (function(i) {
    setTimeout(function() {
      var texts = document.createTextNode(textCont[i])
      var span = document.createElement('span');
      span.appendChild(texts);

      span.classList.add("wave");
      wrapper.appendChild(span);

    }, 75 * i);
  }(i));
}





 function showCurrentTime(){
 var currDate = new Date();
 var hours = currDate.getHours();
 var minutes = currDate.getMinutes();
 var seconds = currDate.getSeconds();
 if (minutes <= 9) {
  minutes = "0" + minutes;
 }
 if (seconds <= 9) {
  seconds = "0" + seconds;
 }
 document.Clock.timer.value = hours + ":" + minutes + ":" + seconds;
 setTimeout("showCurrentTime()", 1000);
}
showCurrentTime();

var currDay = new Date();
var dayTime = currDay.getHours();
if (dayTime <= 21) {
 document.write("<img src='day.jpg'>");
} else {
 document.write("<img src='night.jpg'>");
}

var todayDate = new Date();
var currYear = todayDate.getFullYear();
var currMonth = todayDate.getMonth()+1;
var currDay = todayDate.getDate();
document.write("16.09.2019 ");
document.write(currDay + "-" + currMonth + "-" + currYear);
var currYear = todayDate.getFullYear();



$(document).ready(function(){

  var stickyElement = $(".sticky"),
      stickyClass = "sticky-pin",
      stickyPos = stickyElement.offset().top,
      stickyHeight;


  stickyElement.after('<div class="jumps-prevent"></div>');
  function jumpsPrevent() {
    stickyHeight = stickyElement.innerHeight();
    stickyElement.css({"margin-bottom":"-" + stickyHeight + "px"});
    stickyElement.next().css({"padding-top": + stickyHeight + "px"});
  };
  jumpsPrevent();


  $(window).resize(function(){
    jumpsPrevent();
  });

  function stickerFn() {
    var winTop = $(this).scrollTop();

    winTop >= stickyPos ?
      stickyElement.addClass(stickyClass):
      stickyElement.removeClass(stickyClass) //Boolean class switcher.
  };
  stickerFn();


  $(window).scroll(function(){
    stickerFn();
  });

});




