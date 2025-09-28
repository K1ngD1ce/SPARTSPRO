document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burgerMenu");
    const burgerBody = document.getElementById('burgerBody');
    const burgerLinks = document.querySelectorAll('#burgerBody .nav_item-link');
    const svgAnimate = document.getElementById('svgAnimate')


    burgerMenu.addEventListener('click', () => {
        burgerBody.classList.toggle('active');
    });


    burgerLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerBody.classList.remove('active');
            svgAnimate.classList.remove('active')
        });
    });
})