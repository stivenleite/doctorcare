addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavigation()
  showBackToTopButton()
  activateMenuAtCurrentSection()
}

function activateMenuAtCurrentSection() {
  const targetLine = scrollY + innerHeight / 2

  const homeTop = home.offsetTop
  const servicesTop = services.offsetTop
  const aboutTop = about.offsetTop
  const contactTop = contact.offsetTop
  const contactBottom = contact.offsetTop + contact.offsetHeight

  navInicio.classList.remove('active')
  navServicos.classList.remove('active')
  navSobre.classList.remove('active')
  navContato.classList.remove('active')

  if (targetLine > homeTop && targetLine <= servicesTop) {
    navInicio.classList.add('active')
  } else if (targetLine > servicesTop && targetLine <= aboutTop) {
    navServicos.classList.add('active')
  } else if (targetLine > aboutTop && targetLine <= contactTop) {
    navSobre.classList.add('active')
  } else if (targetLine > contactTop && targetLine <= contactBottom) {
    navContato.classList.add('active')
  }
}

function showNavigation() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButton() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services header,
  #services .card,
  #about header,
  #about img,
  #about .content p,
  #contact header,
  #contact .content,
  #contact img`)
