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

    let enabledSidebar = window.matchMedia("(min-width: 1300px)").matches ? true : false;
    setWidthContent(enabledSidebar);
    setWidthSidebar();

    setDisplaySidebar();

    toggleSidebar();

    $window.on('resize',  function () {
      let enabledSidebar = window.matchMedia("(min-width: 1300px)").matches ? true : false;

      setWidthContent(enabledSidebar);
      setDisplaySidebar();
    });
  });

  let setBgDashboard = () => {
    let imageParent = $('.Dashboard__figure'),
        imageTag = imageParent.find('img'),
        image = imageTag.attr('src');

    imageParent.css('background-image', `url("${image}")`);
  }

  let wViewport = () => {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }

  let setWidthContent = (enableSidebar) => {
    let widthSidebar = enableSidebar ? document.querySelector('.page-sidebar').clientWidth : 0,
        widthContent = wViewport() - widthSidebar;

    document.documentElement.style.setProperty('--width-content', `${widthContent}px`);
  }

  let setWidthSidebar = () => {
    let widthSidebar = document.querySelector('.page-sidebar').clientWidth;

    document.documentElement.style.setProperty('--width-sidebar', `${widthSidebar}px`);
  }

  let setDisplaySidebar = () => {
    let pageSidebar = document.querySelector('.page-sidebar'),
        header = document.querySelector('.header');

    if (window.matchMedia("(min-width: 1300px)").matches) {
      pageSidebar.classList.add('active');
      header.classList.add('active');
    } else {
      pageSidebar.classList.remove('active');
      header.classList.remove('active');
    }
  }

  let toggleSidebar = () => {
    let button = document.querySelector('.Header__toggle'),
        pageSidebar = document.querySelector('.page-sidebar'),
        pageContent = document.querySelector('.page-content'),
        header = document.querySelector('.header');

    button.addEventListener('click', function (e) {
      e.preventDefault();

      let enabledSidebar = pageSidebar.classList.contains('active') ? false : true;

      pageSidebar.classList.toggle('active');
      header.classList.toggle('active');
      setWidthContent(enabledSidebar);
    });
  }
})(jQuery);

