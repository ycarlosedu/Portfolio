export function typeWriter(element) {
  const textArray = element.textContent.split('')
  element.textContent = ''

  textArray.forEach((letter, index) => {
    setTimeout(() => {
      element.textContent += letter
    }, 75 * index) //miliseconds timeout
  })

}