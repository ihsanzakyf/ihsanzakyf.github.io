// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
  var image = document.querySelector(".half-image");
  var tooltip = document.querySelector(".tooltip");

  image.addEventListener("click", function () {
    var computedHeight = window
      .getComputedStyle(image)
      .getPropertyValue("height");

    if (computedHeight === "345px") {
      image.style.height = "auto";
      image.style.objectFit = "cover";
      tooltip.style.display = "none";
    } else {
      image.style.height = "345px";
      image.style.objectFit = "cover";
      tooltip.style.display = "block";
    }
  });
  $(".popup-link").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
    callbacks: {
      open: function () {
        $(".bg-transparent").css("z-index", "1");
      },
      close: function () {
        $(".bg-transparent").css("z-index", "10");
      },
    },
  });
});
