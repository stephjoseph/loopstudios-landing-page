const openButton = document.querySelector("#menu-open-button");
const closeButton = document.querySelector("#menu-close-button");
const mobileNav = document.querySelector("#mobile-nav");
const mobileNavBar = document.querySelector("#mobile-navbar");

window.addEventListener("scroll", fixedNav);

openButton.addEventListener("click", () => {
  openButton.classList.remove("scale-100");
  openButton.classList.add("scale-0");
  mobileNav.classList.remove("translate-x-[100%]");
  closeButton.classList.remove("scale-0");
});

closeButton.addEventListener("click", () => {
  openButton.classList.add("scale-100");
  openButton.classList.remove("scale-0");
  mobileNav.classList.add("translate-x-[100%]");
  closeButton.classList.add("scale-0");
});

function fixedNav() {
  if (window.scrollY > mobileNavBar.offsetHeight) {
    mobileNavBar.classList.add("bg-black");
    mobileNavBar.classList.remove("py-10");
    mobileNavBar.classList.add("py-5");
    mobileNav.classList.remove("pt-10");
    mobileNav.classList.add("pt-5");
  } else {
    mobileNavBar.classList.remove("bg-black");
    mobileNavBar.classList.remove("py-5");
    mobileNavBar.classList.add("py-10");
    mobileNav.classList.remove("pt-5");
    mobileNav.classList.add("pt-10");
  }
}
