

$( document ).ready(function() {

     $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay: true,
        dots: true,
        autoplayTimeout: 5000,
        navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


});


$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});



// Horizontal scroller

const scrollerContent = document.querySelector('.scroller-content');
const scrollSpeed = 1;
let currentPos = 0;
let isAutoScrolling = true;

function scrollList() {
    if (isAutoScrolling) {
        currentPos += scrollSpeed;
        scrollerContent.style.transform = `translateX(-${currentPos}px)`;

        // Reset scroll position when it reaches the end
        if (currentPos >= scrollerContent.scrollWidth - scrollerContent.offsetWidth) {
            currentPos = 0;
        }
        
    }
}

function scrollLeft() {
    currentPos -= 50; // Adjust the scroll amount as needed
    if (currentPos < 0) {
        currentPos = 0;
    }
    scrollerContent.style.transform = `translateX(-${currentPos}px)`;
}

function scrollRight() {
    currentPos += 50; // Adjust the scroll amount as needed
    if (currentPos > scrollerContent.scrollWidth - scrollerContent.offsetWidth) {
        currentPos = scrollerContent.scrollWidth - scrollerContent.offsetWidth;
    }
    scrollerContent.style.transform = `translateX(-${currentPos}px)`;
}

document.getElementById('scroll-left-button').addEventListener('click', scrollLeft);
document.getElementById('scroll-right-button').addEventListener('click', scrollRight);

// Start the scrolling animation
setInterval(scrollList, 50); // Adjust interval for smoother animation

// // Pause auto scrolling when either button is clicked
// document.getElementById('scroll-left-button').addEventListener('click', () => {
//     isAutoScrolling = false;
// });
// document.getElementById('scroll-right-button').addEventListener('click', () => {
//     isAutoScrolling = false;
// });




//=================Carousel slider JS=======================//

//dropdown

function toggleDropdown(element) {
    element.classList.toggle("active");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('active')) {
                openDropdown.classList.remove('active');
            }
        }
    }
}

