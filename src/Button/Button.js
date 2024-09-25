import './Button.css'

export const divBtnCargarMas = document.createElement('div')
export const btnCargarMas = document.createElement('button')

divBtnCargarMas.className = 'load-more'
btnCargarMas.id = 'btnload-more'
btnCargarMas.textContent = 'Cargar más imágenes'

divBtnCargarMas.appendChild(btnCargarMas)
