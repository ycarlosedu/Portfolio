
window.addEventListener('load', function () {

  setTimeout(function () {
    location.href = "#home";
    document.querySelector('a[href="#home"]').classList.add('active')
  }, 750)
})
