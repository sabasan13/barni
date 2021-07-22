"use strict";

$('.checks-wrapper').mCustomScrollbar();
$('.winners-wrapper').mCustomScrollbar();

function OpenPopup(popupId) {
  $('body').removeClass('no-scrolling');
  $('.popup').removeClass('js-popup-show');
  popupId = '#' + popupId;
  $(popupId).addClass('js-popup-show');
  $('body').addClass('no-scrolling');
}

$('.pop-op').click(function (e) {
  e.preventDefault();
  var data = $(this).data('popup');
  OpenPopup(data);
});

function closePopup() {
  $('.js-close-popup').on('click', function (e) {
    e.preventDefault();
    $('.popup').removeClass('js-popup-show');
    $('body').removeClass('no-scrolling');
  });
}

closePopup();

function clickClosePopup(popupId) {
  popupId = '#' + popupId;
  $(popupId).removeClass('js-popup-show');
  $('body').removeClass('no-scrolling');
}

$('.burger').click(function () {
  if ($('.header').hasClass('active')) {
    $('.header').removeClass('active');
    $('body').removeClass('no-scrolling');
  } else {
    $('.header').addClass('active');
    $('body').addClass('no-scrolling');
  }
});
$('.anchor[href^="#"]').click(function () {
  if ($(window).innerWidth() <= 1000) {
    $('.menu-links').removeClass('active');
    $('.burger').removeClass('active');
  }

  elementClick = $(this).attr("href");
  destination = $(elementClick).offset().top - 150;
  $('html, body').animate({
    scrollTop: destination
  }, 500, 'swing');
  return false;
});
$('.prize-item__btn').click(function () {
  $('.prize-item-info').fadeIn();
});
$('.prize-item-info__btn, .prize-item-info__close').click(function () {
  $('.prize-item-info').fadeOut();
});
$('.anime-item.unactive').click(function () {
  if (!$(this).hasClass('active')) {
    $(this).addClass('active');
  } else {
    $(this).removeClass('active');
  }
});

if ($('.select').length > 1) {
  $('select').each(function () {
    var $this = $(this).not('.select-search');
    var parent = $(this).not('.select-search').parents('.select');
    $this.select2({
      minimumResultsForSearch: Infinity,
      dropdownParent: parent
    });
  });
  $('.select-search').each(function () {
    var $this = $(this);
    var parent = $(this).parents('.select');
    $this.select2({
      dropdownParent: parent
    });
  });
} else {
  $('select').select2({
    minimumResultsForSearch: Infinity,
    dropdownParent: $('.select')
  });
}