$(document).ready(function () {
  // 3번째 li 내의 모든 a 태그를 가져옴
  const periodLinks = document.querySelectorAll('.dep_filter ul li:nth-child(3) a');

  // 각 a 태그에 클릭 이벤트를 추가
  periodLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // 기본 링크 클릭 동작 방지

      // 모든 a 태그에서 active 클래스 제거
      periodLinks.forEach(function (item) {
        item.classList.remove('active');
      });

      // 클릭한 a 태그에만 active 클래스 추가
      this.classList.add('active');
    });
  });

  $(".dep_search").click(function () {
    $(".dep_dim").fadeIn();
    $(".dep_filter").slideToggle();
  });

  $(".his_search").click(function () {
    $(".dep_dim").fadeIn();
    $(".dep_filter").slideToggle();
  });

  $(".dep_filter ul li:first-child img").click(function () {
    $(".dep_dim").fadeOut();
    $(".dep_filter").slideToggle();
  });

  var dep_filter = $(".dep_filter ul li:nth-child(4) input");
  var datePopup = $(".rec_popup");
  var recDim = $(".dePop_dim");
  var recConfirm = $(".confirm");
  var recCancel = $(".cancel");

  $(dep_filter).click(function () {
    $(datePopup).fadeIn();
    $(recDim).fadeIn();
  });

  recCancel.click(function () {
    $(datePopup).fadeOut();
    $(recDim).fadeOut();
  });

  recConfirm.click(function () {
    $(datePopup).fadeOut();
    $(recDim).fadeOut();
  });
});