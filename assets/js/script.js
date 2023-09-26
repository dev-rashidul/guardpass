// JavaScript for Carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    items:1,
    navText: [' <i class="fa-solid fa-chevron-left"></i>', ' <i class="fa-solid fa-chevron-right"></i>']
})