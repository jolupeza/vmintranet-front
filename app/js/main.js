"use strict";

/*******************************************************
function verifyMedia () {
  if (window.matchMedia("(max-width: 991px)").matches) {

  } else {
    console.log('Mi viewport es mayor o igual a 992px');
  }
}
/*******************************************************/

;(function ($) {
  let $window = $(window);

  $(function () {
    $window.on('scroll', () => {
      // checkScroll();
    });

    setBgDashboard();

    $('.page-content, .page-sidebar').on('touchmove', false);

    //$window.on('resize',  function () {
    //  verifyMedia();
    //});
  });

  let setBgDashboard = () => {
    let imageParent = $('.Dashboard__figure'),
        imageTag = imageParent.find('img'),
        image = imageTag.attr('src');

    imageParent.css('background-image', `url("${image}")`);
  }
})(jQuery);

