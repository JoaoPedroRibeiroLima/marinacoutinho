let bottom_menu = document.getElementById('menu-bar')
let div_img = document.getElementsByClassName('div-img')
let menu = document.getElementById('menu')

let bottom_pro = document.getElementById('pro') 
let bottom_bon = document.getElementById('bon')
let bottom_about = document.getElementById('about')
let bottom_close = document.getElementById("close-div")
let move_trick = document.getElementById("move-trick")
let div_doctor_img = document.getElementById('div-doctor-img')

bottom_menu.addEventListener('click', () => {
    menu.style.top = "10px"
    bottom_menu.style.display = 'none'
})

bottom_pro.addEventListener('click', () => {
    window.scrollTo({
        top: 5120,
        left: 0,
        behavior: "smooth"
    })
})

bottom_bon.addEventListener('click', () => {
    window.scrollTo({
        top: 4330,
        left: 0,
        behavior: "smooth"
    })
})

bottom_about.addEventListener('click', () => {
    window.scrollTo({
        top: 5900,
        left: 0,
        behavior: "smooth"
    })
})

bottom_close.addEventListener('click', () => {
    menu.style.top = "-450px"
    setTimeout(() => {
        bottom_menu.style.display = 'block'
    }, 650)
})

const myObserver = new IntersectionObserver( (entries) => {
    console.log(entries)
    if (entries[0].isIntersecting === true) {
        div_doctor_img.classList.remove('div-doctor-img-hidden')
        div_doctor_img.classList.add('div-doctor-img-show')
    }
}) 

myObserver.observe(move_trick)
