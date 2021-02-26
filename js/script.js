const nav_icon = document.querySelector('.nav_icon')
const navlinks = document.querySelector('.navlinks')

function toggleMenu(){

    navlinks.classList.toggle('nav_active')
    nav_icon.classList.toggle('toggle')

}

nav_icon.addEventListener('click', toggleMenu)