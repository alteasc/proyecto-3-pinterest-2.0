import './Card.css'

export const infoCard = (likes, downloads, url, profile, name, site) => {
  const divCard = document.createElement('div')
  const divInfo = document.createElement('div')
  const divLikes = document.createElement('div')
  const iconHeart = document.createElement('img')
  const pLikes = document.createElement('p')
  const divDown = document.createElement('div')
  const iconDown = document.createElement('img')
  const pDown = document.createElement('p')
  const imgCard = document.createElement('img')
  const pCard = document.createElement('p')
  const imgUser = document.createElement('img')

  divCard.id = 'section-card'
  divInfo.id = 'infoImg'
  divLikes.className = 'likes'
  iconHeart.src = './assets/corazon.png'
  iconHeart.className = 'icon'
  pLikes.textContent = likes
  divDown.className = 'downloads'
  iconDown.src = './assets/descarga-directa.png'
  iconDown.className = 'icon'
  pDown.textContent = downloads
  imgCard.src = url
  imgCard.className = 'main'
  imgUser.src = profile
  imgUser.className = 'profile-user'
  pCard.textContent = name

  site.appendChild(divCard)
  divCard.appendChild(divInfo)
  divInfo.appendChild(divDown)
  divInfo.appendChild(divLikes)
  divDown.appendChild(iconDown)
  divDown.appendChild(pDown)
  divLikes.appendChild(iconHeart)
  divLikes.appendChild(pLikes)
  divCard.appendChild(imgCard)
  divCard.appendChild(pCard)
  divCard.appendChild(imgUser)
}
