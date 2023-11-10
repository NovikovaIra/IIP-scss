import './node_modules/reset-css/sass/_reset.scss'; 
import './main.scss'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 0,
    // direction: 'horizontal',
    // loop: true,s
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      paginationClickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + 0 + (index + 1) + '</span>';
    }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-new',
      prevEl: '.swiper-button-prev-new',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    breakpoints: {
       
        1500: {
            slidesPerView: 1,
            spaceBetween: 0,
        }
    }
  });
  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  
  menuBtn.addEventListener('click', function(){
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');
  })
