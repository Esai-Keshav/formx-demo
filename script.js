const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light');
    const mode = body.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Intersection Observer for scroll reveal animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add scroll-trigger items here if needed
document.querySelectorAll('.feature-card, .cta-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.8s ease';
    observer.observe(el);
});

// Add a helper class for the active animation
const style = document.createElement('style');
style.textContent = `
    .fade-in-active {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
