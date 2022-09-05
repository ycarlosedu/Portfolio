
window.addEventListener('load', function () {

  setTimeout(function () {
    location.href = "#home";
    document.querySelector('a[href="#home"]').classList.add('active')

    setTimeout(function () {
      document.querySelector('.loader_container').style.display = 'none'
    }, 750)
  }, 750)
})
