/* ===========================
   Theme Management
   =========================== */
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    const theme = htmlElement.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

/* ===========================
   Mobile Menu Toggle
   =========================== */
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a nav link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-menu') && !e.target.closest('.hamburger')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

/* ===========================
   Smooth Scroll & Active Link
   =========================== */
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

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

/* ===========================
   Intersection Observer - Scroll Animations
   =========================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all reveal elements
document.querySelectorAll('.project-card, .skill-category, .contact-card, .stat-card, .about-text').forEach(element => {
    element.classList.add('reveal');
    observer.observe(element);
});

/* ===========================
   Skill Progress Animation
   =========================== */
const skillProgressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            skillProgressObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skills').forEach(section => {
    skillProgressObserver.observe(section);
});

/* ===========================
   Parallax Effect
   =========================== */
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    
    if (hero) {
        hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

/* ===========================
   Form Validation & Email
   =========================== */
const contactCards = document.querySelectorAll('.contact-card');

contactCards.forEach(card => {
    card.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Handle email click
        if (href && href.startsWith('mailto:')) {
            e.preventDefault();
            const email = href.replace('mailto:', '');
            
            // Copy to clipboard
            navigator.clipboard.writeText(email).then(() => {
                // Visual feedback
                const originalText = this.querySelector('p').textContent;
                this.querySelector('p').textContent = 'Copied!';
                
                setTimeout(() => {
                    this.querySelector('p').textContent = originalText;
                }, 2000);
            });
        }
    });
});

/* ===========================
   Page Load Animation
   =========================== */
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

/* ===========================
   Utility Functions
   =========================== */

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/* ===========================
   Project Card Interactions
   =========================== */
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.animation = 'none';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.animation = '';
    });
});

/* ===========================
   Keyboard Navigation
   =========================== */
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
    
    // Accessibility: Tab navigation
    if (e.key === 'Tab') {
        document.body.classList.add('tab-focus');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('tab-focus');
});

/* ===========================
   Performance Optimization
   =========================== */

// Lazy load images (if any)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

/* ===========================
   Console Messages (Portfolio Builder)
   =========================== */
console.log(
    '%c👨‍💻 Backend Developer Portfolio',
    'font-size: 20px; font-weight: bold; color: #6366f1;'
);
console.log(
    '%cMade with ❤️ by Kateryna Kon',
    'font-size: 14px; color: #ec4899;'
);
console.log(
    '%cCheck out the source code: https://github.com/KaterynaKon',
    'font-size: 12px; color: #94a3b8;'
);

/* ===========================
   Add Tab Focus Styles
   =========================== */
const style = document.createElement('style');
style.textContent = `
    body.tab-focus a:focus,
    body.tab-focus button:focus,
    body.tab-focus input:focus {
        outline: 2px solid #6366f1;
        outline-offset: 2px;
    }
`;
document.head.appendChild(style);

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully! 🚀');
});
