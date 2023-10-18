const dropMenu = document.querySelector('#drop-menu__nav')
const open = document.querySelector('#icon-open-menu__div')

open.addEventListener('click', () => {
    dropMenu.classList.add('open')
})