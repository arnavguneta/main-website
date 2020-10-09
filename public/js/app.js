let landing_bg = document.getElementsByClassName('parent')[0]
let header = document.getElementById('nav')
let new_height = window.innerHeight - header.clientHeight
landing_bg.style.height = (new_height >= 575) ? `${new_height}px` : '575px'

const navSlide = () => {
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.nav_links')
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
    })
}
navSlide()