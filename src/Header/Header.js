import './Header.css'

export const printHeader = () => {
  const header = document.querySelector('header')
  const nav = document.createElement('nav')
  const imgLogo = document.createElement('img')
  const ulMenu = document.createElement('ul')
  const liInicio = document.createElement('li')
  const liExplorar = document.createElement('li')
  const liCrear = document.createElement('li')
  const formBuscar = document.createElement('form')
  const inputBuscar = document.createElement('input')
  const buttonBuscar = document.createElement('button')
  //const inputimg = document.createElement('img')
  const divUser = document.createElement('div')
  const imgCampana = document.createElement('img')
  const imgMensaje = document.createElement('img')
  const imgUser = document.createElement('img')
  const menuHam = document.createElement('img')

  nav.className = 'flex-container'
  nav.setAttribute('id', 'menu-header')
  imgLogo.src = './assets/Pinterest-logo.png'
  imgLogo.className = 'logo'
  ulMenu.className = 'flex-container'
  ulMenu.setAttribute('id', 'menu-list')
  liInicio.textContent = 'Inicio'
  liExplorar.textContent = 'Explorar'
  liCrear.textContent = 'Crear'
  formBuscar.id = 'search'
  inputBuscar.placeholder = '¿Qué quieres buscar hoy?'
  inputBuscar.setAttribute('id', 'input-search')
  buttonBuscar.textContent = 'Buscar'
  // inputimg.src = './assets/lupa-de-busqueda.png'
  divUser.setAttribute('id', 'menu-user')
  imgCampana.src = './assets/notificacion.png'
  imgMensaje.src = './assets/comentario.png'
  imgUser.src = './assets/agregar-usuario.png'
  menuHam.src = './assets/menu.png'
  menuHam.className = 'menu-hamburguesa'

  nav.appendChild(imgLogo)
  ulMenu.appendChild(liInicio)
  ulMenu.appendChild(liExplorar)
  ulMenu.appendChild(liCrear)
  nav.appendChild(ulMenu)
  nav.appendChild(formBuscar)
  //formBuscar.appendChild(inputimg)
  formBuscar.appendChild(inputBuscar)
  formBuscar.appendChild(buttonBuscar)
  nav.appendChild(divUser)
  divUser.appendChild(imgCampana)
  divUser.appendChild(imgMensaje)
  divUser.appendChild(imgUser)
  nav.appendChild(menuHam)
  header.appendChild(nav)

  liInicio.addEventListener('click', () => {
    inputBuscar.innerHTML = ''
    location.reload()
    window.scrollTo(0, 0)
  })

  imgLogo.addEventListener('click', () => {
    inputBuscar.innerHTML = ''
    location.reload()
    window.scrollTo(0, 0)
  })
}
