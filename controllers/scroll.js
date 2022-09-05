function findPos(obj) {
  var curtop = 0;
  if (obj.offsetParent) {
    do {
      curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);
    return [curtop];
  }
}

const moveToDown = {
  '#home': 'about',
  '#about': 'projects',
  '#projects': 'contact',
  '#git_projects': 'contact',
  '#contact': 'contact',
}

const moveToUp = {
  '#home': 'home',
  '#about': 'home',
  '#projects': 'about',
  '#git_projects': 'about',
  '#contact': 'projects',
}

function scrollToElement(element) {
  window.scroll(0, findPos(document.getElementById(element)));
  location.href = `#${element}`
}

function moveDown() {
  scrollToElement(moveToDown[location.hash]);
}

function moveUp() {
  scrollToElement(moveToUp[location.hash]);
}

window.addEventListener('wheel', (event) => {
  event.preventDefault()
  if (event.deltaY > 0) {
    moveDown()
    return
  }
  moveUp()
}, { passive: false });

const eventKey = {
  'ArrowDown': moveDown,
  'PageDown': moveDown,
  '2': moveDown,
  ' ': moveDown,
  'ArrowUp': moveUp,
  'PageUp': moveUp,
  '8': moveUp,
}

window.addEventListener('keydown', (event) => {
  const move = eventKey[event.key]
  if (move) {
    event.preventDefault()
    move()
  }
})

// MOBILE SCROLL

let screenY = 0

window.addEventListener('touchstart', (event) => {
  event.preventDefault()
  screenY = event.changedTouches[0].screenY
}, { passive: false })

window.addEventListener('touchend', (event) => {
  if (screenY > event.changedTouches[0].screenY) {
    moveDown()
    return
  }
  moveUp()
})

window.addEventListener('touchmove', (event) => {
  event.preventDefault()
}, { passive: false })
