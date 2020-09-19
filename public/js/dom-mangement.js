const triggerMenu = document.querySelectorAll('.js-trigger-menu');
const mainMenu = document.getElementById('main-menu');

triggerMenu.forEach(trigger => {
    trigger.addEventListener('click', () => {
        mainMenu.classList.toggle('visible');
    })
})