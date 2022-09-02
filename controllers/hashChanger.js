export function activeNavItem(elementID) {
  const menuItems = document.getElementsByClassName('navbar_item')
  Array.from(menuItems).forEach(item => {
    item.classList.remove('active')
  })
  const element = elementID ? document.querySelector(`a[href="#${elementID}"]`) : document.querySelector(`a[href="${window.location.hash}"]`)
  element.classList.add('active')
}

window.addEventListener('hashchange', () => {
  const gitProjects = document.getElementById('navbar_git_projects')
  if (location.hash === '#git_projects') {
    gitProjects.classList.remove('relative')
    setTimeout(() => {
      gitProjects.classList.add('on')
    }, 300)
    return
  }
  gitProjects.classList.remove('on')
  setTimeout(() => {
    gitProjects.classList.add('relative')
  }, 500)
})
