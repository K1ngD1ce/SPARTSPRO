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

    function updateCardsVisibility() {
        const cards = document.querySelectorAll('.recomendation_wrapper-product');
        const isMobile = window.innerWidth <= 576;

        cards.forEach((card, index) => {
            if (isMobile && index >= 4) {
                card.style.display = 'none';
            } else {
                card.style.display = '';
            }
        });
    }

    window.addEventListener('DOMContentLoaded', updateCardsVisibility);
    window.addEventListener('resize', updateCardsVisibility);
})