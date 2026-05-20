const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
});

reveals.forEach((element) => observer.observe(element));

const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.forEach((item) => item.classList.remove('active'));
        link.classList.add('active');
    });
});

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thanks for reaching out. Replace this form action with your backend or email service.');
        contactForm.reset();
    });
}
