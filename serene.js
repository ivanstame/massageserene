var responsiveSlider = function() {

var count = 0;
var viewableSliderWidth = document.getElementById("review-container").offsetWidth; //visible width of element in pixels
var longUL = document.querySelector('#review'); // Entire UL
var slidePane = longUL.querySelectorAll("li"); // Array of slide panes
var numSlides = longUL.querySelectorAll("li").length; // Length of LI array
var prev = document.getElementById("prev");
var next = document.getElementById("next");

window.addEventListener('resize', function() {
    viewableSliderWidth = document.getElementById("review-container").offsetWidth;
    });

function nextSlide(){



    if (count < numSlides - 2){
        slidePane[count + 2].style.zIndex = "1";
        slidePane[count + 2].style.left = viewableSliderWidth + "px";
    	slidePane[count].style.left = "-" + viewableSliderWidth + "px";
        slidePane[count].style.zIndex = "1";
        slidePane[count + 1].style.zIndex = "100";
        slidePane[count + 1].style.left = "0px";
        count++;
    } else if (count == numSlides - 2) {
        slidePane[count - 2].style.zIndex = "1";
        slidePane[count - 2].style.left = viewableSliderWidth + "px";
    	slidePane[count].style.left = "-" + viewableSliderWidth + "px";
        slidePane[count].style.zIndex = "1";
        slidePane[count + 1].style.zIndex = "100";
        slidePane[count + 1].style.left = "0px";
        count++;
    }   else {
        slidePane[count - 2].style.zIndex = "1";
        slidePane[count - 2].style.left = viewableSliderWidth + "px";
        slidePane[count].style.left = "-" + viewableSliderWidth + "px";
        slidePane[count].style.zIndex = "1";
        slidePane[count - count].style.zIndex = "100";
        slidePane[count  - count].style.left = "0px";
        count = 0;
    }

}


function prevSlide() {

    if (count == 0){
        slidePane[numSlides - 2].style.zIndex = "1";
        slidePane[numSlides - 2].style.left = "-" + viewableSliderWidth + "px";
    	slidePane[count].style.left = viewableSliderWidth + "px";
        slidePane[count].style.zIndex = "1";
        slidePane[numSlides - 1].style.zIndex = "100";
        slidePane[numSlides - 1].style.left = "0px";
        count = numSlides - 1;
    } else if (count <= numSlides -1 && count > 1) {
        slidePane[count - 2].style.zIndex = "1";
        slidePane[count - 2].style.left = "-" + viewableSliderWidth + "px";
    	slidePane[count].style.left = viewableSliderWidth + "px";
        slidePane[count].style.zIndex = "1";
        slidePane[count - 1].style.zIndex = "100";
        slidePane[count - 1].style.left = "0px";
        count--;
    }   else {
        slidePane[numSlides -1].style.zIndex = "1";
        slidePane[numSlides - 1].style.left = "-" + viewableSliderWidth + "px";
        slidePane[count].style.left = viewableSliderWidth + "px";
        slidePane[count].style.zIndex = "1";
        slidePane[count - 1].style.zIndex = "100";
        slidePane[count  - 1].style.left = "0px";
        count--;
    }


}


next.addEventListener("click", function() {
    nextSlide();
    });

prev.addEventListener("click", function() {
    prevSlide();
    });


};


const hiddenBar = function hideShowInfoBarOnScroll() {

    const infoBar = document.getElementById('sub-menu');
    const navBar = document.getElementsByTagName('nav');

    function hideBar(){

    var pos = document.documentElement.scrollTop;

    if (pos > 30) {
        infoBar.style.display = "none";
        navBar[0].style.position = "fixed";
        navBar[0].nextElementSibling.style.paddingTop = "calc(13.1vh + 30px)";
    	} else if (pos < 31) {
    	   infoBar.style.display = "flex";
           navBar[0].style.position = "static";
           navBar[0].nextElementSibling.style.paddingTop = "0";
    	}
    }

    window.onscroll = function() {hideBar()};

}

window.onload = function() {
responsiveSlider();
hiddenBar();
}
