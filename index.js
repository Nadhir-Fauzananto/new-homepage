const navLinks = document.getElementById('nav-links');
const menuButton = document.getElementById('menu-btn');
const closeButton = document.getElementById('close-btn');
const navLinkAnchors = document.querySelectorAll('#nav-links li a');

if (navLinks && menuButton && closeButton) {

    menuButton.addEventListener('click', () => {
        navLinks.classList.add('active');
        navLinks.classList.remove('disable');
        menuButton.classList.add('disable');
    });

    menuButton.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ' || event.code === 'Space') {
            navLinks.classList.add('active');
            navLinks.classList.remove('disable');
            menuButton.classList.add('disable');
        }
    });

    closeButton.addEventListener('click', () => {  
        navLinks.classList.remove('active');
        navLinks.classList.add('disable');
        menuButton.classList.remove('disable');
    });

    closeButton.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ' || event.code === 'Space') {
            navLinks.classList.remove('active');
            navLinks.classList.add('disable');
            menuButton.classList.remove('disable');
        }
    });

} else {
    console.error('One or more elements not found: navLinks, menuButton, closeButton');
}

navLinkAnchors.forEach(link => {
    link.addEventListener('click', () => {
        navLinkAnchors.forEach(anchor => anchor.classList.remove('selected'));
        link.classList.add('selected');
    });

    link.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ' || event.code === 'Space') {
            navLinkAnchors.forEach(anchor => anchor.classList.remove('selected'));
            link.classList.add('selected');
        }
    });
});