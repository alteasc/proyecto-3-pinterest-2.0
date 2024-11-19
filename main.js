import './style.css'
import { printHeader } from './src/Header/Header'
import { printFooter } from './src/Footer/Footer'
import { infoCard } from './src/Card/Card'
import { btnCargarMas, divBtnCargarMas } from './src/Button/Button'
import { menuHamburguesa } from './src/SideSection/SideSection'

printHeader()
const formSearch = document.querySelector('#search')
const inputSearch = document.querySelector('#input-search')
const main = document.querySelector('main')
const sectionCards = document.querySelector('.cards')
const divError = document.createElement('div')
main.appendChild(divError)

let clave = 'lJ2gdGj3JoukPWO_9OS-GVpWB1agZAW673dPaJoleKw'

let keyword = ''

let page = 1

const galeriaRandom = async () => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?count=9&client_id=${clave}`
    )
    const res = await response.json()
    printCards(res)
    // console.log(res)
  } catch (error) {
    console.log(error)
  }
}

galeriaRandom()

const printCards = (resultados) => {
  sectionCards.innerHTML = ''
  for (const resultado of resultados) {
    infoCard(
      resultado.likes,
      resultado.width,
      resultado.urls.regular,
      resultado.user.profile_image.large,
      resultado.user.name,
      sectionCards
    )
  }
}

const errorMensaje = () => {
  divError.innerHTML = ''
  divError.classList = 'flex-container'
  divError.id = 'error'
  const pError = document.createElement('p')
  pError.textContent = 'Para esta búsqueda no hay resultados disponibles'
  const ulCoincidencias = document.createElement('ul')
  const liSuggest1 = document.createElement('li')
  const liSuggest2 = document.createElement('li')
  const liSuggest3 = document.createElement('li')
  const liSuggest4 = document.createElement('li')
  ulCoincidencias.classList = 'flex-container'
  ulCoincidencias.id = 'list-suggestions'
  liSuggest1.textContent = 'También puedes buscar:'
  liSuggest2.textContent = 'Paisajes'
  liSuggest3.textContent = 'Coches'
  liSuggest4.textContent = 'Perros'

  divError.appendChild(pError)
  divError.appendChild(ulCoincidencias)
  ulCoincidencias.appendChild(liSuggest1)
  ulCoincidencias.appendChild(liSuggest2)
  ulCoincidencias.appendChild(liSuggest3)
  ulCoincidencias.appendChild(liSuggest4)

  btnCargarMas.classList.add('hidden')
}

const buscarImagenes = async () => {
  keyword = inputSearch.value
  //console.log(keyword)

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${clave}`
    )
    const res = await response.json()
    const imagenes = res.results
    //console.log(imagenes)

    if (imagenes.length) {
      divError.innerHTML = ''
      printCards(imagenes)
    } else {
      divError.innerHTML = ''
      errorMensaje()
    }
  } catch (error) {
    console.log(error)
  }

  inputSearch.value = ''
}

formSearch.addEventListener('submit', (e) => {
  e.preventDefault()
  sectionCards.innerHTML = ''
  page = 1
  buscarImagenes()
})

main.appendChild(divBtnCargarMas)
btnCargarMas.addEventListener('click', () => {
  page++
  buscarImagenes()
  galeriaRandom()
})

menuHamburguesa()

const menuHam = document.querySelector('.menu-hamburguesa')
const sideMenu = document.querySelector('.side-menu')

menuHam.addEventListener('click', () => {
  sideMenu.classList.toggle('active')
})

printFooter()
