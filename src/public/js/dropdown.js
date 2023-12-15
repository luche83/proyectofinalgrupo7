window.onload = function(){
    
    const toggleBtn = document.querySelector('.icon-close-menu__div')
    const toggleIcon = document.querySelector('.icon-open-menu__div')
    const dropMenu = document.querySelector('.drop-menu__nav')

    toggleIcon.onclick = function () {
        dropMenu.classList.toggle('open')
    }

}
