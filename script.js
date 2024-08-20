
// Effet de défilement fluide pour la navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Effet d'apparition des sections au défilement
const sections = document.querySelectorAll('section');

const observerOptions = {
    threshold: 0.1
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Message de validation du formulaire
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Merci pour votre message ! Nous vous répondrons sous peu.');
    form.reset();
});
