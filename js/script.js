let bottom_menu = document.getElementById('menu-bar')
let div_img = document.getElementsByClassName('div-img')
let menu = document.getElementById('menu')

let bottom_pro = document.getElementById('pro') 
let bottom_bon = document.getElementById('bon')
let bottom_about = document.getElementById('about')
let bottom_close = document.getElementById("close-div")

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
