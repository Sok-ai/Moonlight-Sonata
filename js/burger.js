window.addEventListener("load", () => {
  const BURGER = document.querySelector(".js-burger");
  const HEADER_MENU = document.querySelector(".js-header-menu");
  const HEADER_MENUCLOSE = document.querySelectorAll(".js-unclick");
  BURGER.addEventListener("click", removeClass);
  for (const el of HEADER_MENUCLOSE) {
    el.addEventListener("click", removeClass);
  }
  function removeClass() {
    BURGER.classList.toggle("active");
    BURGER.classList.toggle("isOpenColor");
    HEADER_MENU.classList.toggle("isOpen");
    document.body.classList.toggle("overflow");
  }
});
