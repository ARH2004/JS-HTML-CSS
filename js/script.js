//swiper start
if (window.screen.width > 768) {
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-right',
            prevEl: '.swiper-button-left',
        },
    });
} else {
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-right',
            prevEl: '.swiper-button-left',
        },
    });
}
//swiper end

//maps start
//Выдало ошибку:RefererNotAllowedMapError, нужно проверить настройки реферера вашего ключа API в Cloud Console.
//Использую другой метод, т.к первый оказался платным(
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

window.initMap = initMap;
//maps end

//Smooth scroll to press an element with a class promo__arrow start
const getClickPromo = document.getElementById('get-one-click')
const smoothScrollInfo = document.getElementById('one-click')
smoothScrollInfo.addEventListener('click', (el) => {
    el.preventDefault()
    getClickPromo.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })
})
//Smooth scroll to press an element with a class promo__arrow end

//Animation of the header start
const animItems = document.querySelectorAll('._anim-items')
if (animItems.length > 0) {
    const animOnScroll = (() => {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }

            if ((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add(`_active`)
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active')
                }
            }
        }
    })
    window.addEventListener('scroll', animOnScroll)
    const offset = ((el) => {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollY || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    })
    setTimeout(() => {
        animOnScroll()
    }, 200)
}
//Animation of the header end
