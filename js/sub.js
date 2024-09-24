$(document).ready(function () {
  // 각 테이블 섹션과 탭에 대한 매핑
  var sections = {
    '#physical': 0,
    '#communication': 1,
    '#nursing': 2,
    '#recovery': 3
  };

  var $tabs = $(".phy_tab ul li");
  var $window = $(window);

  // URL에 #해시코드가 있을 경우에만 스크롤 높이를 조정
  if (location.hash) {
    scrollTo(0, window.scrollY - 80);
  }

  // 스크롤할 때 이벤트 감지
  $window.on('scroll', function () {
    var scrollPosition = $window.scrollTop();
    var offset = 300; // 스크롤 위치 조정 (헤더나 상단 공간이 있을 경우)

    // 각 테이블 섹션의 위치를 확인하여 탭 활성화
    for (var section in sections) {
      var sectionTop = $(section).offset().top - offset;

      if (scrollPosition >= sectionTop) {
        $tabs.removeClass("active");
        $tabs.eq(sections[section]).addClass("active");
      }
    }
  });

  // 첫 번째 탭에 기본적으로 active 클래스 추가
  $tabs.eq(0).addClass("active");

  // 탭 클릭 시 해당 섹션으로 스크롤 이동
  $tabs.find('a').on('click', function (e) {
    e.preventDefault();

    var target = $(this).attr('href');
    var targetOffset = $(target).offset().top - 80; // 헤더 크기에 맞춰 스크롤 조정

    $('html, body').animate({
      scrollTop: targetOffset
    }, 100);

    // 클릭한 탭에 active 클래스 추가
    $tabs.removeClass("active");
    $(this).parent().addClass("active");
  });

  $('.cla_txtbox').click(function () {
    $(this).find('>li:last-child').slideToggle(300);
    $(this).find(".cla_down").toggleClass('cla_rotate');
    $(this).siblings().find(">li:last-child").slideUp();
    $(this).siblings().find(".cla_down").removeClass('cla_rotate');
  });


  $('.dep_txtbox').click(function () {
    $(this).find('.dep_depth2').slideToggle(300);
    $(this).find(".dep_cla_down").toggleClass('cla_rotate');
    $(this).siblings().find(".dep_depth2").slideUp();
    $(this).siblings().find('.dep_cla_down').removeClass('cla_rotate')
  });

  // 현재 년도를 가져오기 위한 h3 요소
  const yearElement = document.querySelector('.dep_year');

  // 이전 버튼과 다음 버튼 요소
  const dep_prevButton = document.querySelector('.dep_prev');
  const dep_nextButton = document.querySelector('.dep_next');

  // 초기 년도 값을 가져오기 (숫자만 추출)
  let currentYear = parseInt(yearElement.textContent.replace('년', ''));

  // 이전 버튼 클릭 시 년도 감소
  dep_prevButton.addEventListener('click', function () {
    currentYear--; // 년도 감소
    yearElement.textContent = currentYear + '년'; // h3 텍스트 업데이트
  });

  // 다음 버튼 클릭 시 년도 증가
  dep_nextButton.addEventListener('click', function () {
    currentYear++; // 년도 증가
    yearElement.textContent = currentYear + '년'; // h3 텍스트 업데이트
  });

});


