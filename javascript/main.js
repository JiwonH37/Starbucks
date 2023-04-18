'use strict'

/*
search
*/

const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')
searchEl.addEventListener('click', function (){
    searchInputEl.focus()
})

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused')
    searchInputEl.setAttribute('placeholder', '통합검색')
})

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused')
    searchInputEl.setAttribute('placeholder','')
})

/*
Page Scroll
*/
const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top')
window.addEventListener('scroll', _.throttle(function () {
    if(window.scrollY > 500){
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        })

        // Show to-top button
        gsap.to(toTopEl, .2, {
            x : 0
        })
    }else{
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        })

        // Hide to-top button, 
        gsap.to(toTopEl, .2, {
            x : 100
        })
    }
}, 300))

// to top
toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0
    })
})
/*
fade in 
*/
const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    })
})

/*
slide element management
*/
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: {
        delay: 5000
    },
    loop: true
})

new Swiper('.promotion .swiper-container', {
    direction: 'horizontal',
    autoplay: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10, // slide 와 slide 사이 마진
    centeredSlides: true, //1번 슬라이드가 가운데
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
})

new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl:'.awards .swuper-prev',
        nextEl: '.awards .swiper-next'
    }
})
/*
promotion toggle
*/
const promotionEl =document.querySelector('.promotion')
const promotionToggleEL = document.querySelector(' .toggle-promotion')
let isHidePromotion = false
promotionToggleEL.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion
    if (isHidePromotion) {
        promotionEl.classList.add('hide')
    }else{
        promotionEl.classList.remove('hide')
    }
})

//floating element
function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
    gsap.to(
        selector,
        random(1.5, 2.5),
        {
            delay: random(0, delay),
            y: size,
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInOut
        }
    )
}

floatingObject('.floating1', 1, 15)
floatingObject('.floating2', 0.5, 15)
floatingObject('.floating3', 1.5, 20)


//Visibility
const spyEls = document.querySelectorAll("section.scroll-spy")
spyEls.forEach(function(spyEl){
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller())
})

const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()

