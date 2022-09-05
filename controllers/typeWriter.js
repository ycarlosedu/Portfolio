export function typeWriter(element) {
  const textArray = element.innerText.split('')
  element.textContent = ''

  textArray.forEach((letter, index) => {
    setTimeout(() => {
      element.textContent += letter
    }, 150 * index) //miliseconds timeout
  })
}
