$(function () {
  $("#nav-open").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("#nav-content").removeClass("open").fadeOut(0);
    } else {
      $(this).addClass("active");
      $("#nav-content").fadeIn(300).addClass("open");
    }
  });
});

$(function(){
  $('#nav-content .category li a').each(function(){
      var $href = $(this).attr('href');
      if(location.href.match($href)) {
      $(this).addClass('active');
      } else {
      $(this).removeClass('active');
      }
  });
});
