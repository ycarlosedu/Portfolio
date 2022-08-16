window.addEventListener('load', function() {
  location.href = "#home";
})

function getElementPosition(element) {
  if (document.querySelector(`#${element}`). getBoundingClientRect().y === 100 ||
  document.querySelector(`#${element}`). getBoundingClientRect().y === -100) return true
}

function MoveUp() {
  if (location.hash === '#home' && getElementPosition('home')) {
    return
  }
  if (location.hash === '#about' && getElementPosition('about')) {
    document.querySelector('a[href="#home"]').click();
    return
  }
  if (location.hash === '#projects' && getElementPosition('projects')) {
    document.querySelector('a[href="#about"]').click();
    return
  }
  if (location.hash === '#contact' && getElementPosition('contact')) {
    document.querySelector('a[href="#projects"]').click();
    return
  }
}

function MoveDown() {
  if (location.hash === '#home' && getElementPosition('home')) {
    document.querySelector('a[href="#about"]').click();
    return
  }
  if (location.hash === '#about' && getElementPosition('about')) {
    document.querySelector('a[href="#projects"]').click();
    return
  }
  if (location.hash === '#projects' && getElementPosition('projects')) {
    document.querySelector('a[href="#contact"]').click();
    return
  }
  if (location.hash === '#contact' && getElementPosition('contact')) {
    return
  }
}

function Scroll(e) {
  window.removeEventListener('scroll')
  // console.log(e.path[1])
  console.log(location.hash === '#home' && getElementPosition('home'))
  // mesma posição
  if (e.scrollY === lastScrollTop) return;

  this.scrollY < lastScrollTop ? MoveUp() :  MoveDown()
  lastScrollTop = this.scrollY;
  window.addEventListener('scroll', Scroll(e))
}

var lastScrollTop = 0;

window.addEventListener('scroll', e => Scroll(e))