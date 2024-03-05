// 선택자
//
const list_doing_ul = document.querySelector(".list_doing");
const plus_btn = document.querySelector(".plus_list");
//
const boxes = document.querySelectorAll("li > i");

// input에 spellcheck 끄기
document.querySelector("input").setAttribute("spellcheck", "false");

// 플러스 버튼 선택 시 해야할 일 항목 한 개 추가
plus_btn.onclick = function () {
  list_doing_ul.insertAdjacentHTML(
    "beforeend",
    "<li><input type='text' placeholder='할 일을 작성하세요'></input> <i class='fa-regular fa-square'></i></li>"
  );
};

// 박스 선택 시 박스를 체크박스로 변경
for (box of boxes) {
  box.onclick = function () {
    this.classList.toggle("fa-square");
    this.classList.toggle("fa-square-check");
    console.log("check");
  };
}

// 마이너스 버튼 선택 시 체크박스 삭제

// 가운데 화살표 선택 시 체크박스 항목 위치 변경

// 해야할 일 개수가 0, 완료한 일 개수가 한 개 이상일 시 체크박스 opacity 1
