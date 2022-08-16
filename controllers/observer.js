import { typeWriter } from './typeWriter.js';

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.2) {
      if (entry.target.className.includes('init_hidden')){
        entry.target.classList.add('init_hidden_off');
      }
      if (entry.target.className.includes('type_writer')){
        typeWriter(entry.target)
      }
    }
  })
}, {
  threshold: 0.2
});

Array.from(document.querySelectorAll('.init_hidden')).forEach(element => {
  observer.observe(element)
})

Array.from(document.querySelectorAll('.type_writer')).forEach(element => {
  observer.observe(element)
})