window.addEventListener("DOMContentLoaded", () => {
  menuInit();
});
//-------Mobil menu hendler-----//
const mobButton = document.querySelector(".header__mob-menu");
const headerMenu = document.querySelector(".header__menu");
const links = document.getElementsByClassName("menu__link");
function menuInit() {
  if (window.innerWidth < 770) {
    if (mobButton) {
      const arr1 = Array.from(links);
      arr1.push(mobButton);
      // const arr = Array(mobButton, ...links);
      console.log(Array.isArray(arr1));
      arr1.forEach((el) => el?.addEventListener("click", menuTurn));
    }
  } else {
    window.addEventListener("resize", menuReInit);
  }
}
function menuReInit() {
  window.removeEventListener("resize", menuReInit);
  menuInit();
}
function menuTurn() {
  headerMenu?.classList.toggle("header__menu--mob-turn");
}
//-------Intersection Observer for section fade--------//
const options: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};
const observer = new IntersectionObserver(intersectionHendler, options);
const observeTargets = Array.from(document.querySelectorAll("section")).slice(
  1
);
observeTargets.forEach((el) => {
  el?.firstElementChild?.classList.add("hide", "trans");
  observer.observe(el);
});
function intersectionHendler(
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) {
  entries.forEach(({ target, isIntersecting }) => {
    if (isIntersecting) {
      target?.firstElementChild?.classList.remove("hide");
      observer.unobserve(target);
    }
  });
}
