let burger = document.querySelector('.header__burger'),
  list = document.querySelector('.header__list'),
  boxes = document.querySelectorAll('.header__box'),
  dropdowns = document.querySelectorAll('.header__dropdown'),
  icons = document.querySelectorAll('.header__icon')

burger.addEventListener('click', () => {
  burger.classList.toggle('header__burger_active')
  list.classList.toggle('header__list_active')
})

boxes.forEach((box, i) => {
  box.addEventListener('click', () => {
    dropdowns[i].classList.toggle('header__dropdown_active')
    icons[i].classList.toggle('header__icon_active')
  })
})

let mediaQuery = window.matchMedia("(min-width: 700px)")

mediaQuery.addEventListener("change", () => {
  if (mediaQuery.matches) {
    burger.classList.remove('header__burger_active')
    list.classList.remove('header__list_active')
  }
})