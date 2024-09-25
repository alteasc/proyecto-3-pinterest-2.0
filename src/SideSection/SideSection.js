import './SideSection.css'

export const menuHamburguesa = () => {
  const divMenu = document.createElement('div')
  const ulMenu = document.createElement('ul')
  const pInicio = document.createElement('li')
  const pExplorar = document.createElement('li')
  const pCrear = document.createElement('li')
  const pNotificaciones = document.createElement('li')
  const pMensajes = document.createElement('li')
  const pUsuario = document.createElement('li')

  divMenu.className = 'side-menu'
  pInicio.textContent = 'Inicio'
  pExplorar.textContent = 'Explorar'
  pCrear.textContent = 'Crear'
  pNotificaciones.textContent = 'Notificaciones'
  pMensajes.textContent = 'Mensajes'
  pUsuario.textContent = 'Iniciar sesión'

  ulMenu.appendChild(pInicio)
  ulMenu.appendChild(pExplorar)
  ulMenu.appendChild(pCrear)
  ulMenu.appendChild(pNotificaciones)
  ulMenu.appendChild(pMensajes)
  ulMenu.appendChild(pUsuario)
  divMenu.appendChild(ulMenu)
  document.body.append(divMenu)
}
