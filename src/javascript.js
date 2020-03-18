(function press() {
    if ($(".toggle-menu i").attr("class") == "fa fa-align-justify") {
      $(".toggle-menu i").attr("class", "fa fa-align-justify fa-times");
      $(".header-nav").css("left", "240px");
      $(".nav-menu").addClass("openMenu");
      $(".nav-item li").css({ "opacity": "1", "padding-top": "25px" });
  }
    else {
      $(".toggle-menu i").attr("class", "fa fa-align-justify");
      $(".header-nav").css("left", "0px");
      $(".nav-menu").removeClass("openMenu");
      $(".nav-item li").css({ "opacity": "0", "padding-top": "500px" });
  }
})()