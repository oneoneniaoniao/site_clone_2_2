$(function () {
  //ハンバーガーメニュー
  $('#nav-open').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('#nav-content').removeClass('open');
      $("#title").removeClass("invisible");
    } else {
      $(this).addClass('active');
      $('#nav-content').addClass('open');
      $("#title").addClass("invisible");
    }
  });
});

const $windowWidth = window.innerWidth;
$(function () {
  if ($windowWidth >= 768) {
    $("#title").removeClass("invisible")
  }
})


$(function () {
  let $matched = false;
  $('#nav-content .category li a').each(function () {
    const $href = $(this).attr('href');
    if (location.href.match($href)) {
      $(this).addClass('active');
      $matched = true;
    } else {
      $(this).removeClass('active');
    }
  });
  if ($matched===false) {
    $("#home").addClass("active");
  }
});

$(function () {
  let $matched = false;
  $('#gnavPC .gnavPC-list li a').each(function () {
    const $href = $(this).attr('href');
    if (location.href.match($href)) {
      $(this).addClass('active');
      $matched = true;
    } else {
      $(this).removeClass('active');
    }
  });
  if ($matched===false) {
    $("#homePC").addClass("active");
  }
});