// ===================================
// Golden Hands - JavaScript Functions
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// ===================================
// INITIALIZATION
// ===================================

function initializeWebsite() {
    createScrollToTopButton();
    initializeScrollEffects();
    addOrderButtonsToProducts();
    initializeSmoothScroll();
    addProductInteractions();
    console.log('✨ Golden Hands website initialized successfully!');
}

// ===================================
// ADD ORDER BUTTONS TO ALL PRODUCTS
// ===================================

function addOrderButtonsToProducts() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const productInfo = card.querySelector('.product-info');
        
        // Check if button doesn't already exist
        if (productInfo && !productInfo.querySelector('.order-btn')) {
            const orderBtn = document.createElement('a');
            orderBtn.href = 'commander.html';
            orderBtn.className = 'order-btn';
            orderBtn.textContent = 'Commander';
            orderBtn.style.cssText = `
                display: inline-block;
                width: 100%;
                margin-top: 1rem;
                padding: 0.8rem;
                background: var(--terracotta);
                color: white;
                text-align: center;
                text-decoration: none;
                border-radius: 5px;
                font-weight: 600;
                transition: all 0.3s ease;
            `;
            
            orderBtn.addEventListener('mouseenter', function() {
                this.style.background = 'var(--deep-bronze)';
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
            });
            
            orderBtn.addEventListener('mouseleave', function() {
                this.style.background = 'var(--terracotta)';
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });
            
            productInfo.appendChild(orderBtn);
        }
    });
}

// ===================================
// SCROLL TO TOP BUTTON
// ===================================

function createScrollToTopButton() {
    // Create button element
    const scrollBtn = document.createElement('div');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '↑';
    scrollBtn.setAttribute('title', 'Retour en haut');
    document.body.appendChild(scrollBtn);

    // Show/hide on scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    // Scroll to top on click
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// SCROLL EFFECTS
// ===================================

function initializeScrollEffects() {
    // Parallax effect for header
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('header');
        
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.5}px)`;
            header.style.opacity = 1 - (scrolled / 500);
        }
    });

    // Fade in elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe product cards
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        observer.observe(card);
    });
}

// ===================================
// SMOOTH SCROLLING
// ===================================

function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ===================================
// PRODUCT INTERACTIONS
// ===================================

function addProductInteractions() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        // Add click animation
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('add-to-cart-btn')) {
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 100);
            }
        });

        // Add tilt effect on mouse move
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Format price
function formatPrice(price) {
    return `${price.toLocaleString('fr-MA')} DH`;
}

// Console welcome message
console.log('%c🧺 Golden Hands', 'color: #C87941; font-size: 24px; font-weight: bold;');
console.log('%cPaniers Berbères Artisanaux', 'color: #8B5A2B; font-size: 14px;');
console.log('%cWebsite developed with ❤️', 'color: #6B7F3F; font-size: 12px;');
