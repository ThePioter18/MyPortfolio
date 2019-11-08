 // navigation starts

 $("#toggle").click(function(){
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

$("#resize ul li a").click(function(){
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

$(".close-btn").click(function(){
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

// navigation ends


// nav animation starts
var tl = new TimelineLite; 

tl.from("#brand", 0.6, {
    delay: 0.4,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
})
tl.staggerFrom("#menu li a", 0.6, {
    delay: 0.2, 
    opacity: 0, 
    ease: Expo.easeInOut
}, 0.2,);

// nav animation ends

new WOW().init();