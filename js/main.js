window.onload = function () {
  // 상단의 마이페이지리스트 기능
  const mypageBt = document.querySelector(".mypage-bt");
  const mypageList = document.querySelector(".mypage-list");
  mypageBt.addEventListener("mouseover", function () {
    mypageList.classList.toggle("showMypage");
  });
  // swiper ================
  // 프로모션 스와퍼기능
  const swPromotion = new Swiper(".sw-promotion", {
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      760: {
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: ".promotion .sw-next",
      prevEl: ".promotion .sw-prev",
    },
    pagination: {
      el: ".sw-promotion-pg ",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  // 쇼핑의 스와이퍼 기능적용
  const swShopping = new Swiper(".sw-shopping", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row",
    },
    navigation: {
      nextEl: ".shopping .sw-next",
      prevEl: ".shopping .sw-prev",
    },
    pagination: {
      el: ".sw-shopping-pg ",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    spaceBetween: 10,
    breakpoints: {
      900: {
        spaceBetween: 32,
        slidesPerView: 4,
        grid: {
          rows: 1,
        },
        slidesPerGroup: 3,
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 4,
        slidesPerGroup: 4,
        grid: {
          rows: 1,
        },
      },
    },
  });

  // 투어의 스와이퍼 기능적용
  const swTour = new Swiper(".sw-tour", {
    navigation: {
      nextEl: ".tour .sw-next",
      prevEl: ".tour .sw-prev",
    },
    pagination: {
      el: ".sw-tour-pg ",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // 모바일버전
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row",
    },

    breakpoints: {
      480: {
        spaceBetween: 32,
        slidesPerView: 3,
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
        1024: {
          spaceBetween: 32,
          slidesPerView: 3,
          slidesPerGroup: 2,
          grid: {
            rows: 1,
          },
        },
        1280: {
          spaceBetween: 26,
          slidesPerView: 3,
          slidesPerGroup: 3,
          grid: {
            rows: 1,
          },
        },
      },
    },
  });
  // 티켓 스와이퍼 적용
  const swTicket = new Swiper(".sw-ticket", {
    loop: true,
    breakpoints: {
      480: {
        spaceBetween: 32,
        slidesPerView: 2,
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 4,
      },
      navigation: {
        nextEl: ".ticket .sw-next",
        prevEl: ".ticket .sw-prev",
      },
      pagination: {
        el: ".sw-ticket-pg ",
        clickable: true,
      },
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    },
  });

  // live스와퍼
  const swLive = new Swiper(".sw-live", {
    breakpoints: {
      320: {
        spaceBetween: 12,
        slidesPerView: 2,
      },
      768: {
        spaceBetween: 32,
        slidesPerView: 3,
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 4,
  }}});
};
