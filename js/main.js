$(function () {
    $(document).scroll(function () {
      var $nav = $("#mainNav");
      $nav.toggleClass('navbar-shrink', $(this).scrollTop() > $nav.height());
    });
  });
