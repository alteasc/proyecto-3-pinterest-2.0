import './Footer.css'

export const printFooter = () => {
  const footer = document.querySelector('footer')
  const p = document.createElement('p')
  const divLinks = document.createElement('div')
  const gitLink = document.createElement('a')
  const linkedinLink = document.createElement('a')
  const imgGit = document.createElement('img')
  const imgLinked = document.createElement('img')

  footer.className = 'flex-container'
  footer.setAttribute('id', 'info-footer')
  p.textContent =
    'Copyright 2024 - Pinterest 2.0 - Create by Altea Segura {RTC}'
  divLinks.className = 'flex-container'
  divLinks.setAttribute('id', 'links')
  gitLink.href = 'https://github.com/alteasc'
  linkedinLink.href =
    'https://www.linkedin.com/in/altea-segura-c%C3%A1liz-6b00b713a/'
  imgGit.src = './assets/logo-github.png'
  imgLinked.src = './assets/logo-linkedin.png'

  divLinks.appendChild(gitLink)
  divLinks.appendChild(linkedinLink)
  gitLink.appendChild(imgGit)
  linkedinLink.appendChild(imgLinked)
  footer.appendChild(p)
  footer.appendChild(divLinks)
}
