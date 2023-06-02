// slick slider function for banner 
$(function () {
  $('.slick_slid').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: '<i class="fa-solid fa-chevron-right next"></i>',
    prevArrow: '<i class="fa-solid fa-chevron-left prv"></i>',
  });
})

  // slick slider function for feature item 
$(function () {
  $('.feature_item_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: '<i class="fa-solid fa-chevron-right feature_next"></i>',
    prevArrow: '<i class="fa-solid fa-chevron-left feature_prv"></i>',
  });
})

// slick slider function for partner logos 
$(function () {
  $('.partner_logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: '<i class="fa-solid fa-chevron-right partner_next"></i>',
    prevArrow: '<i class="fa-solid fa-chevron-left partner_prv"></i>',
  });
})

// light box js 
$(function(){
  lightbox.option({
    'resizeDuration': 10,
    'fadeDuration': 50,
    'wrapAround': false,
    'positionFromTop': 200,
    'showImageNumberLabel': false,
    'albumLabel':false
  })
})

// venobox function 

$(function(){
  new VenoBox({
    selector: ".venobox",
    maxWidth: "80%",
    autoplay: true
});
})

// Activition code for mixitup 

var containerEl = document.querySelector('.gallery_bdy');

var mixer = mixitup(containerEl);


