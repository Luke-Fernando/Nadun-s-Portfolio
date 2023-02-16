$(document).ready(function () {
  var windowWidth = $(window).width();

  if (windowWidth > 768) {
    $("#lecture-dropdown-container").hide();
    $("#nav-links-list").show();
  } else {
    $("#lecture-dropdown-container").hide();
    $("#nav-links-list").hide();
  }

  function navMobile() {
    $("#lecture-dropdown-container").hide();
    $("#nav-links-list").hide();
  }

  function navPC() {
    $("#lecture-dropdown-container").hide();
    $("#nav-links-list").show();
  }

  function hambergurClick() {
    $(".ham-menu").click(function () {
      $("#nav-links-list").slideToggle(500);
    });
  }

  function lectureDropSlide() {
    $("#lecture-dropdown-container").slideToggle(500);
  }

  function navMobileOrPc() {
    if (windowWidth < 768) {
      navMobile();
      console.log(windowWidth);
    } else {
      navPC();
      console.log(windowWidth);
    }
  }

  function navScreenChange() {
    windowWidth = $(window).width();
    console.log(windowWidth);
  }

  hambergurClick();
  $(window).resize(function () {
    navScreenChange();
    navMobileOrPc();
  });
  function lectureDropdownFunc() {
    $(".lecture-link").hover(function () {
      if (windowWidth > 768) {
        lectureDropSlide();
      }
    });
    $(".lecture-link").click(function () {
      if (windowWidth < 768) {
        lectureDropSlide();
      }
    });
  }

  lectureDropdownFunc();
});
