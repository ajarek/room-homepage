const BUTTON = document.querySelectorAll('button')
const IMAGE = document.querySelector('.left-top-article')
const HEADING = document.querySelector('.heading')
const TEXT = document.querySelector('.text')
const BURGER = document.querySelector('.burger')
const LIST = document.querySelector('.list')

let src = [
    './images/desktop-image-hero-1.jpg',
    './images/desktop-image-hero-2.jpg',
    './images/desktop-image-hero-3.jpg'
]
let headingArray = [
    'Discover innovative <br> ways to decorate',
    'We are available all <br> across the globe',
    ' Manufactured with the <br> best materials'
]
let textArray = [
    'We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    " With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our  store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
]
let score = 0

if (score === 0) {
    IMAGE.style.backgroundImage = `url(${src[0]})`
    HEADING.innerHTML = headingArray[score]
    TEXT.innerHTML = textArray[score]
}

const changePanel = (e) => {
    if (e.target.id === 'leftBtn') {
        if (score <= 0) {
            score = 3
        }
        IMAGE.style.backgroundImage = `url(${src[score-1]})`
        HEADING.innerHTML = headingArray[score - 1]
        TEXT.innerHTML = textArray[score - 1]
        score--
    }
    if (e.target.id === 'rightBtn') {
        if (score >= 2) {
            score = -1
        }
        IMAGE.style.backgroundImage = `url(${src[score+1]})`
        HEADING.innerHTML = headingArray[score + 1]
        TEXT.innerHTML = textArray[score + 1]
        score++
    }
}

const openBurger = () => {
    if (BURGER && BURGER.innerHTML === `<img src="./images/icon-hamburger.svg" alt="">`) {
        LIST.classList.add('active')
        BURGER.innerHTML = `<img src="./images/icon-close.svg">`
    } else {
        BURGER.innerHTML = `<img src="./images/icon-hamburger.svg" alt="">`
        LIST.classList.remove('active')
    }
}

BUTTON.forEach(function (button) {
    button.addEventListener('click', changePanel)
})

BURGER.addEventListener('click', openBurger)