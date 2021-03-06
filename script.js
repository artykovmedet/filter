let blur = document.querySelector('#blur')
let sepia = document.querySelector('#sepia')
let inverts = document.querySelector('#inverts')
let range = document.querySelector('.gorizontal')
let box = document.querySelector('.box')
let percent = document.querySelector('.percent')
let currentEffect

range.addEventListener('click', () => {
    percent.textContent = `${range.value}%`
    if (currentEffect === 'blur')blurEffect()
    if (currentEffect === 'sepia')sepiaEffect()
    if (currentEffect === 'invert')invertsEffect()
})

function blurEffect ()  {
    box.style.filter = `blur(${range.value}px)`
    currentEffect = 'blur'
}

function sepiaEffect() {
    box.style.filter = `sepia(${range.value}%)`
    currentEffect = 'sepia'
}

function invertsEffect() {
    box.style.filter = `invert(${range.value}%)`
    currentEffect = 'invert'
}



blur.addEventListener('click', (e) => {
    blurEffect()
})

sepia.addEventListener('click', (e) => {
    sepiaEffect()
})

inverts.addEventListener('click' , (e) => {
    invertsEffect()
})

