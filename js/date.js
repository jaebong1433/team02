
document.addEventListener("DOMContentLoaded", function () {

  // 날짜 형식을 YYYY년 MM월 DD일로 변환하는 함수
  function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}년 ${month}월 ${day}일`;
  }

  // 현재 날짜를 기준으로 표시할 날짜
  let currentDate = new Date('2024-08-28');

  // 요소 선택
  const dateElement = document.getElementById('date');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  // 날짜 업데이트 함수
  function updateDate() {
    dateElement.textContent = formatDate(currentDate);
  }

  // 이전 날짜로 이동하는 함수
  prevButton.addEventListener('click', function () {
    currentDate.setDate(currentDate.getDate() - 1);
    updateDate();
  });

  // 다음 날짜로 이동하는 함수
  nextButton.addEventListener('click', function () {
    currentDate.setDate(currentDate.getDate() + 1);
    updateDate();
  });

  // 초기 날짜 설정
  updateDate();

  // 선택된 값 초기 설정
  let selectedYear = 2024;
  let selectedMonth = 8;
  let selectedDay = 28;

  const datePopup = $(".rec_popup");
  const recDim = $(".rec_dim");
  const recConfirm = $(".confirm");
  const recCancel = $(".cancel");
  $(".rec_box1>ul>li:last-child").click(function () {
    datePopup.fadeIn();
    recDim.fadeIn();
  });

  recCancel.click(function () {
    datePopup.fadeOut();
    recDim.fadeOut();
  });

  recConfirm.click(function () {
    datePopup.fadeOut();
    recDim.fadeOut();
  });

});


