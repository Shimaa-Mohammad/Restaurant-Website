
// Navbar 
var navItems=document.querySelector(".nav-links")
var openNav=document.getElementById("open")
var closeNav=document.getElementById("close")

openNav.addEventListener('click',toggleMenu)
closeNav.addEventListener('click',toggleMenu)
function toggleMenu() {
    navItems.classList.toggle("active");
    openNav.classList.toggle("active");
    closeNav.classList.toggle("active");
}



var buttons = document.querySelectorAll('.menu-buttons button');
var menuItems = document.querySelectorAll('.menu-card');

buttons.forEach(button => {
    button.addEventListener('click', function () {

        let buttonRecipe = button.getAttribute('data-name');
        menuItems.forEach(item => {
            let nameCategory = item.getAttribute('data-category');
            if (buttonRecipe === 'all-receipes') {
                item.style.display = 'flex';
            }

            else if (nameCategory === buttonRecipe) {
                item.style.display = 'flex';
            }
            else {
                item.style.display = 'none';
            }
        })
    })
})


// events


document.addEventListener('DOMContentLoaded', function () {
    // Swiper initialization for Events section
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 5,
        loop: true,
        speed: 900,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        },
        pagination: {
            el: ' .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: ' .swiper-button-next',
            prevEl: ' .swiper-button-prev',
        },
    });



    const swiperGellery = new Swiper('.swiperGellery', {
        direction: 'horizontal',

        spaceBetween: 5,
        loop: true,
        speed: 900,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        breakpoints: {
            "320": {
                "slidesPerView": 1,
                "spaceBetween": 40
            },
            "768": {
                "slidesPerView": 3,
                "spaceBetween": 10
            },
            "1200": {
                "slidesPerView": 5,
                "spaceBetween": 10
            }
        },
        pagination: {
            el: '.swiperGellery .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiperGellery .swiper-button-next',
            prevEl: '.swiperGellery .swiper-button-prev',
        },
    });
});