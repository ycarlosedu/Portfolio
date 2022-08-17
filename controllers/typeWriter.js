export function typeWriter(element, noSpaces) {
  const textArray = element.textContent.split('')
  const newText = noSpaces ? textArray.map((element => element.trim())).filter(element => element !== '') : textArray
  element.textContent = ''

  newText.forEach((letter, index) => {
    setTimeout(() => {
      element.textContent += letter
    }, 150 * index) //miliseconds timeout
  })
}