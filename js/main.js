const nav = document.querySelector('.nav')
const burgerBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')

function popup() {
    nav.classList.toggle('nav--active')

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
burgerBtn.addEventListener('click', popup)