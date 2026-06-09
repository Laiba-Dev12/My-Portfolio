// =====================
// TYPING EFFECT - Hero
// =====================
const typingText = "Frontend Developer 👩‍💻";
const typingEl = document.querySelector('.hero h1');

if (typingEl) {
    const originalText = typingEl.innerHTML;
    typingEl.innerHTML = "Hi, I'm Laiba — <span id='typed'></span>";
    
    let i = 0;
    function typeWriter() {
        if (i < typingText.length) {
            document.getElementById('typed').innerHTML += typingText.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        }
    }
    typeWriter();
}

// =====================
// SCROLL FADE IN
// =====================
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    observer.observe(section);
});

// =====================
// NAVBAR ACTIVE LINK
// =====================
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = 'white';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#38bdf8';
        }
    });
});

// =====================
// SMOOTH SCROLL
// =====================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});