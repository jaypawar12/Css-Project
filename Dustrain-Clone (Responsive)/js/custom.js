// BANNER SIDER-Swiper JS

// Initialize Swiper

    var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


    // SERVICE SIDER

    // // Swiper JS   

    // Initialize Swiper
    // var swiper = new Swiper(".mySwiper", {
    //   slidesPerView: 1,
    //   spaceBetween: 10,
    //   loop:true,
    //   autoplay: 2000,
    //   speed: 800,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    //   breakpoints: {
    //     640: {
    //       slidesPerView: 2,
    //       spaceBetween: 20,
    //     },
    //     768: {
    //       slidesPerView: 3,
    //       spaceBetween: 30,
    //     },
    //     1024: {
    //       slidesPerView: 3,
    //       spaceBetween: 30,
    //     },
    //   },
    // });


    // COUNTER
    let count = document.querySelectorAll(".count")
    let arr = Array.from(count)

    arr.map(function (item) {
      let startnumber = 0

      function counterup() {
        startnumber++
        item.innerHTML = startnumber

        if (startnumber == item.dataset.number) {
          clearInterval(stop)
        }
      }

      let stop = setInterval(function () {
        counterup()
      }, 10)

    })
