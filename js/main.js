const menuBtn = document.querySelector('.menu__btn')
const menuMobile = document.querySelector('.header__menu-list')

menuBtn.addEventListener('click', ()=> {
    menuMobile.classList.toggle('menu--open');
})

const swiperFeedback = new Swiper('.feedback__slider', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
});

const swiperCertificate = new Swiper('.certificates__slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
    },
});