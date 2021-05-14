const nav = document.querySelector('.nav')
const burgerBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')

const navBtnBars = document.querySelector('.burger-btn__bars')
const allSection = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')



function popup() {
    nav.classList.toggle('nav--active')
    navBtnBars.classList.remove('black-bards-color');
    allNavItems.forEach(item => {

        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')

        })
    })

    handleNavItemsAnimation();
}
const handleNavItemsAnimation = () => {
    let delayTime = 0;
    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })

}
const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
const handleObserver = () => {
    const currentSection = window.scrollY;
    allSection.forEach(section => {
        if (section.classList.contains('white-section') &&
            section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.add('black-bards-color')
        } else if (!section.classList.contains('white-section') &&
            section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.remove('black-bards-color')
        }
    })

}


handleCurrentYear();
burgerBtn.addEventListener('click', popup)
window.addEventListener('scroll', handleObserver)