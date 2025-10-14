// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
const form = document.getElementById('offerForm');
if (form) {
    form.addEventListener('submit', function(e) {
        // Let formspree handle the submission
        const submitButton = form.querySelector('.submit-button');
        submitButton.textContent = 'Wird gesendet...';
        submitButton.disabled = true;
        
        // Re-enable after 3 seconds in case of error
        setTimeout(() => {
            submitButton.textContent = 'Ja, ich will meine kostenlose Offerte!';
            submitButton.disabled = false;
        }, 3000);
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and steps
document.querySelectorAll('.benefit-card, .process-step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// Hide scroll indicator after scrolling
window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        if (window.pageYOffset > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    }
});

// Form validation enhancement
const inputs = document.querySelectorAll('input[required], select[required], textarea[required]');
inputs.forEach(input => {
    input.addEventListener('invalid', (e) => {
        e.preventDefault();
        input.style.borderColor = '#E74C3C';
    });
    
    input.addEventListener('input', () => {
        if (input.validity.valid) {
            input.style.borderColor = '#D5DBDB';
        }
    });
});

// Add active state to form inputs
document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('active');
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('active');
    });
});

// Console welcome message
console.log('%c🏔️ Dachberater Schweiz', 'font-size: 20px; font-weight: bold; color: #E67E22;');
console.log('%cProfessionelle Dachsanierung in der Schweiz', 'font-size: 14px; color: #2C3E50;');

