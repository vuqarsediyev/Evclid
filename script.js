const swiper = new Swiper('.swiper-container', {

    slidesPerView: 1,
    
    pagination: {
    el: '.swiper-pagination',
    clickable: true
    },

    });


// tabs

let tabsBtn = document.querySelectorAll('.number__btn');
let tabsItem = document.querySelectorAll('.offer-body');

tabsBtn.forEach(function(element) {
    element.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn) {btn.classList.remove('number__btn--active')});
        e.currentTarget.classList.add('number__btn--active');

        tabsItem.forEach(function(element){element.classList.remove('offer-body--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('offer-body--active');
    })
})

///Accordion

new Accordion('.js-accordion-container');
  

// Searchbar


let closeBar = document.querySelector('.input-close-btn');
let searchForm = document.querySelector('.header__search-form');

document.querySelector('.header__search-btn').addEventListener('click', function() {

searchForm.classList.add('searchbar--active');

document.querySelector('.header__search-btn').classList.add('header__search-btn--hide');

});

closeBar.addEventListener('click', function() {
    
document.querySelector('.header__search-btn').classList.remove('header__search-btn--hide');

    searchForm.classList.remove('searchbar--active');
});



/// burger menu

let burger = document.querySelector(".burger");
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__link')

burger.addEventListener('click', function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll')
})

menuLinks.forEach(function (e) {
    e.addEventListener('click', function () {

        burger.classList.remove('burger--active');

        menu.classList.remove('header__nav--active');

        document.body.classList.remove('stop-scroll')
    })
})