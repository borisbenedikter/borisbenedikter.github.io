const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('#main-nav');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});