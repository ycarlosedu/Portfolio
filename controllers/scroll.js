function findPos(obj) {
  var curtop = 0;
  if (obj.offsetParent) {
      do {
          curtop += obj.offsetTop;
      } while (obj = obj.offsetParent);
  return [curtop];
  }
}

function moveDown() {
  switch (location.hash){
    case '#home':
      window.scroll(0,findPos(document.getElementById("about")));
      location.href = '#about'
      break;
    case '#about':
      window.scroll(0,findPos(document.getElementById("projects")));
      location.href = '#projects'
      break;
    case '#projects':
      window.scroll(0,findPos(document.getElementById("contact")));
      location.href = '#contact'
      break;
    case '#contact':
      window.scroll(0,findPos(document.getElementById("contact")));
      break;
  }
}

function moveUp() {
  switch (location.hash){
    case '#home':
      window.scroll(0,findPos(document.getElementById("home")));
      break;
    case '#about':
      window.scroll(0,findPos(document.getElementById("home")));
      location.href = '#home'
      break;
    case '#projects':
      window.scroll(0,findPos(document.getElementById("about")));
      location.href = '#about'
      break;
    case '#contact':
      window.scroll(0,findPos(document.getElementById("projects")));
      location.href = '#projects'
      break;
  }
}

window.addEventListener('wheel', (event) => {
  if (event.deltaY > 0) {
    moveDown()
    return
  }
  moveUp()
});

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