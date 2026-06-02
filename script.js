const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
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

const bgAudio = document.getElementById('bg-audio');
const musicToggle = document.querySelector('.music-toggle');

const updateMusicToggle = (isPlaying) => {
    if (!musicToggle) {
        return;
    }

    musicToggle.setAttribute('aria-pressed', String(isPlaying));
    musicToggle.classList.toggle('is-playing', isPlaying);
    const label = musicToggle.querySelector('span');

    if (label) {
        label.textContent = isPlaying ? 'Pause Music' : 'Play Music';
    }
};

const attemptAutoplay = () => {
    if (!bgAudio) {
        return;
    }

    bgAudio.play()
        .then(() => {
            updateMusicToggle(true);
            musicToggle?.classList.add('is-visible');
        })
        .catch(() => {
            musicToggle?.classList.add('is-visible');
            updateMusicToggle(false);
        });
};

if (musicToggle && bgAudio) {
    musicToggle.addEventListener('click', () => {
        if (bgAudio.paused) {
            bgAudio.play().then(() => updateMusicToggle(true));
        } else {
            bgAudio.pause();
            updateMusicToggle(false);
        }
    });
}

if (document.readyState !== 'loading') {
    attemptAutoplay();
} else {
    document.addEventListener('DOMContentLoaded', attemptAutoplay);
}

document.addEventListener('click', attemptAutoplay, { once: true });
