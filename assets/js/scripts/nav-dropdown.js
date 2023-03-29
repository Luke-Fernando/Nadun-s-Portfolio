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

  function clickAwayToClose() {
    $(document).click(function (e) {
      if (!$(e.target).closest(".lecture-link").length) {
        console.log("NOT-OK-NAV");
        $("#lecture-dropdown-container").slideUp(500);
      }
    });

    // $(document).click(function (e) {
    //   if (
    //     !$(e.target).closest("#nav-links-list").length ||
    //     !$(e.target).closest(".ham-menu").length
    //   ) {
    //     console.log("NOT-OK-NAVNav");
    //     $("#nav-links-list").slideUp(500);
    //   }
    // });
  }
  clickAwayToClose();
  // $(document).click(function (e) {
  //   if (!$(e.target).closest(quickUpdatesContainer).length) {
  //     console.log("NOT-OK");
  //     quickUpdates.slideUp(500);
  //   }
  // });
});
