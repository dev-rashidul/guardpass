// JavaScript for Safety Slider

$('.safety-slider').owlCarousel({
    loop:true,
    margin:50,
    nav:false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    },
    navText: [' <i class="fa-solid fa-chevron-left"></i>', ' <i class="fa-solid fa-chevron-right"></i>']

})
// JavaScript for Testimonial Slider

$('.testimonial-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    items:1,
    navText: [' <i class="fa-solid fa-chevron-left"></i>', ' <i class="fa-solid fa-chevron-right"></i>']
})