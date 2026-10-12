document.addEventListener('DOMContentLoaded', () => {
    /* --- Menú Móvil --- */
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li a');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        menuToggle.classList.toggle('is-active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                menuToggle.classList.remove('is-active');
            }
        });
    });

    /* --- Header Sticky y cambio de estilo --- */
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* --- Animaciones al hacer Scroll (Intersection Observer) --- */
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15, // Ejecuta la animación cuando el 15% del elemento es visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return; // Si no está en pantalla, no hace nada
            } else {
                entry.target.classList.add('active'); // Añade la clase que activa la transición CSS
                observer.unobserve(entry.target); // Deja de observar una vez que ya apareció
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
});