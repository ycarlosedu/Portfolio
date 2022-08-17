
export function activeNavItem(elementID) {
  const menuItems = document.getElementsByClassName('navbar_item')
  Array.from(menuItems).forEach(item => {
    item.classList.remove('active')
  })
  const element = elementID ? document.querySelector(`a[href="#${elementID}"]`) : document.querySelector(`a[href="${window.location.hash}"]`)
  element.classList.add('active')
}