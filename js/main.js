/*******       All swiper      *********/
var swiper = new Swiper(".myAllSwiper", {
    speed: 1500,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
  });
  var swiper2 = new Swiper(".allSwiper", {
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

/*******       rooms swiper      *********/
var swiper = new Swiper(".myRoomsSwiper", {
    speed: 1500,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
        delay: 1000,
       
      },
  });
  var swiper2 = new Swiper(".roomsSwiper", {
    spaceBetween: 10,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

/*******       facilities swiper      *********/
var swiper = new Swiper(".myFacilitiesSwiper", {
    speed: 1500,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
        delay: 1000,
       
      },
  });
  var swiper2 = new Swiper(".facilitiesSwiper", {
    spaceBetween: 10,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });




  
