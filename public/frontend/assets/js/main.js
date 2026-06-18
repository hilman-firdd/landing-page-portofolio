/*=====================================================================
   TERMINAL PORTFOLIO — interactions
   (menu, accordion, tabs, modal, swiper, scroll) + dynamic terminal FX
=====================================================================*/

/*==================== MENU SHOW / HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if (navToggle) {
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation()
    navMenu.classList.toggle('show-menu')
  })
}
if (navClose) {
  navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'))
}
/* close the dropdown when tapping outside of it */
document.addEventListener('click', (e) => {
  if (!navMenu) return
  if (!navMenu.classList.contains('show-menu')) return
  if (navMenu.contains(e.target) || (navToggle && navToggle.contains(e.target))) return
  navMenu.classList.remove('show-menu')
})

/*==================== REMOVE MENU ON LINK CLICK ====================*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
  let itemClass = this.parentNode.className

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close'
  }

  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open'
  }
}
skillsHeader.forEach((el) => el.addEventListener('click', toggleSkills))

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tc => tc.classList.remove('qualification__active'))
    target.classList.add('qualification__active')

    tabs.forEach(t => t.classList.remove('qualification__active'))
    tab.classList.add('qualification__active')
  })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => modal(i))
})
modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => modalView.classList.remove('active-modal'))
  })
})
/* close a modal when clicking its dark backdrop (outside the content box) */
modalViews.forEach((modalView) => {
  modalView.addEventListener('click', (e) => {
    if (e.target === modalView) modalView.classList.remove('active-modal')
  })
})

/*==================== PORTFOLIO SWIPER ====================*/
let portofolio__container = new Swiper(".portofolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: { el: ".swiper-pagination", clickable: true },
})

/*==================== TESTIMONIAL SWIPER ====================*/
let testimonial__container = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  pagination: { el: ".swiper-pagination", clickable: true, dynamicBullets: true },
  breakpoints: { 568: { slidesPerView: 2 } },
})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 58
    const sectionId = current.getAttribute('id')
    const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
    if (!link) return
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link.classList.add('active-link')
    } else {
      link.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById('header')
  if (this.scrollY >= 80) nav.classList.add('scroll-header')
  else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== DARK / LIGHT THEME (default = dark terminal) ====================*/
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'

const setIcon = (isLight) => {
  if (!themeButton) return
  themeButton.classList.toggle('uil-moon', isLight)
  themeButton.classList.toggle('uil-sun', !isLight)
}

const selectedTheme = localStorage.getItem('selected-theme')
if (selectedTheme === 'light') {
  document.body.classList.add(lightTheme)
  setIcon(true)
} else {
  setIcon(false)
}

if (themeButton) {
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle(lightTheme)
    const isLight = document.body.classList.contains(lightTheme)
    setIcon(isLight)
    localStorage.setItem('selected-theme', isLight ? 'light' : 'dark')
  })
}

/*=====================================================================
   DYNAMIC TERMINAL FX
=====================================================================*/

/*==================== LIVE CLOCK ====================*/
const pad = (n) => (n < 10 ? '0' + n : '' + n)
function tickClock() {
  const el = document.getElementById('nav-clock')
  if (!el) return
  const d = new Date()
  el.textContent = pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds())
}
tickClock()
setInterval(tickClock, 1000)

/*==================== HERO TYPING ====================*/
function typeInto(el, text, speed, done) {
  let i = 0
  ;(function step() {
    if (!el) return
    el.textContent = text.slice(0, i)
    if (i <= text.length) { i++; setTimeout(step, speed) }
    else if (done) done()
  })()
}

function deleteFrom(el, done) {
  ;(function step() {
    if (!el) return
    const t = el.textContent
    if (t.length) { el.textContent = t.slice(0, -1); setTimeout(step, 40) }
    else if (done) done()
  })()
}

function rotateRoles(el, roles) {
  let idx = 0
  function loop() {
    typeInto(el, roles[idx], 65, () => {
      setTimeout(() => {
        deleteFrom(el, () => { idx = (idx + 1) % roles.length; loop() })
      }, 1500)
    })
  }
  loop()
}

;(function bootHero() {
  const cmdEl = document.getElementById('hero-cmd')
  const cursorEl = document.getElementById('hero-cursor')
  const outputEl = document.getElementById('hero-output')
  const roleEl = document.getElementById('typed-role')
  if (!cmdEl || !outputEl) return

  // content is data-driven (see src/data/portfolio.json -> rendered as data-* attrs)
  const cmdText = cmdEl.dataset.cmd || 'whoami && cat profile.json'
  let roles = ['Fullstack Developer', 'DevOps Engineer', 'UI/UX Designer']
  try {
    if (roleEl && roleEl.dataset.roles) roles = JSON.parse(roleEl.dataset.roles)
  } catch (e) { /* keep fallback roles */ }

  setTimeout(() => {
    typeInto(cmdEl, cmdText, 55, () => {
      if (cursorEl) cursorEl.style.display = 'none'
      outputEl.style.display = 'block'
      if (roleEl) rotateRoles(roleEl, roles)
    })
  }, 600)
})()

/*==================== SCROLL REVEAL (IntersectionObserver) ====================*/
;(function setupReveal() {
  const selectors = [
    '.term-window', '.about__img', '.section__title', '.section__subtitle',
    '.skills__content', '.qualification__data', '.services__content',
    '.contact__information', '.contact__form', '.project__bg', '.footer__bg'
  ]
  const els = document.querySelectorAll(selectors.join(','))
  els.forEach((el, i) => {
    el.classList.add('reveal')
    el.style.transitionDelay = (Math.min(i % 6, 6) * 60) + 'ms'
  })

  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('is-visible'))
    return
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        io.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })

  els.forEach(el => io.observe(el))
})()
