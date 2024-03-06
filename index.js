// 선택자 목록
//
const list_doing_ul = document.querySelector(".list_doing");
const list_done_ul = document.querySelector(".list_done");
const plus_btn = document.querySelector(".plus_list");
const minus_btn = document.querySelector(".minus_list");
const boxes = document.querySelectorAll("li > i");
const exchange = document.querySelector(".exchange");
const input = document.querySelector("input");

// input에 spellcheck 끄기
input.setAttribute("spellcheck", "false");

// 플러스 버튼 선택 시 해야할 일 항목 한 개 추가
const addListEvent = function () {
  const addList = document.createElement("li");
  addList.innerHTML =
    "<input type='text' placeholder='할 일을 작성하세요.' /><i class='fa-regular fa-square'></i>";
  list_doing_ul.append(addList);
};
plus_btn.addEventListener("click", addListEvent);

// 박스 선택 시 박스를 체크박스로 변경(+과 그 반대)
const checkToggle = function (e) {
  if (e.target.tagName === "I") {
    e.target.classList.toggle("fa-square");
    e.target.classList.toggle("fa-square-check");
  }
};
list_doing_ul.addEventListener("click", checkToggle);
list_done_ul.addEventListener("click", checkToggle);

// 마이너스 버튼 선택 시 체크박스 삭제
const removeListEvent = function () {
  for (let child of list_doing_ul.children) {
    if (child.lastElementChild.classList[1] === "fa-square-check") {
      child.remove();
    }
  }
};
minus_btn.addEventListener("click", removeListEvent);

// 가운데 화살표 선택 시 체크박스 항목 위치 변경
const exchangeEvent = function () {
  for (let child of list_doing_ul.children) {
    if (child.lastElementChild.classList[1] === "fa-square-check") {
      child.children[0].setAttribute("readonly", true);
      child.children[0].removeAttribute("placeholder");
      child.lastElementChild.classList.toggle("fa-square-check");
      child.lastElementChild.classList.toggle("fa-square");
      list_done_ul.append(child);
    }
  }
  for (let child of list_done_ul.children) {
    if (child.lastElementChild.classList[1] === "fa-square-check") {
      child.children[0].removeAttribute("readonly");
      child.children[0].setAttribute("placeholder", "할 일을 작성하세요");
      child.lastElementChild.classList.toggle("fa-square-check");
      child.lastElementChild.classList.toggle("fa-square");
      list_doing_ul.append(child);
    }
  }
};

exchange.addEventListener("click", exchangeEvent);

// 해야할 일 개수가 0, 완료한 일 개수가 한 개 이상일 시 체크박스 opacity 1
