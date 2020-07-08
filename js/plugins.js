// Glider setup 

new Glider(document.querySelector('.glider'), {

    // options 
    // Mobile First 

    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    draggable: true,
    rewind: true, 

    responsive: [
        {
          // screens greater than >= 768px
          breakpoint: 1570,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 2,
            itemWidth: 250,
            draggable: true,
            duration: 0.25
          }
        }
      ]
}); 


// AOS  

AOS.init();