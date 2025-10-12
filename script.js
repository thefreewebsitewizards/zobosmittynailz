// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initCustomCursor();
    initMagneticButtons();
    // initParallaxEffects(); // Disabled parallax effect
    initEmailSignup();
    // initLoadingAnimation(); // Temporarily disabled
    initSmoothScrolling();
    initPromoBanner();
    initSearchFunctionality();
    initCollectionsCarousel();
    createValueSparkles();
    createBrandSparkles();
    createCollectionsSparkles();
    createAboutSparkles();
    initValueCardsAnimation();
    initCustomOrdersForm();
});

// Create Brand Section Sparkles (About Page)
function createBrandSparkles() {
    const brandSection = document.querySelector('.brand-section');
    if (!brandSection) return;
    
    // Remove any existing sparkles first
    const existingSparkles = brandSection.querySelectorAll('.brand-sparkle');
    existingSparkles.forEach(sparkle => sparkle.remove());
    
    // Create 30 glitter particles for About Zobosmitty Nailz section
    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = Math.random() > 0.5 ? 'brand-sparkle sparkle-alt' : 'brand-sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        sparkle.style.animationDuration = (Math.random() * 2 + 3) + 's';
        sparkle.style.zIndex = '1';
        brandSection.appendChild(sparkle);
    }
}

// Create Value Proposition Sparkles
function createValueSparkles() {
    const valueProp = document.querySelector('.value-prop');
    if (!valueProp) return;
    
    // Remove any existing sparkles first
    const existingSparkles = valueProp.querySelectorAll('.value-sparkle');
    existingSparkles.forEach(sparkle => sparkle.remove());
    
    // Create 25 black glitter particles
    for (let i = 0; i < 25; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = Math.random() > 0.5 ? 'value-sparkle sparkle-alt' : 'value-sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        sparkle.style.animationDuration = (Math.random() * 2 + 3) + 's';
        sparkle.style.zIndex = '1';
        valueProp.appendChild(sparkle);
    }
}

// Create Collections Sparkles
function createCollectionsSparkles() {
    const collectionsSection = document.querySelector('.featured-collections');
    if (!collectionsSection) return;
    
    // Remove any existing sparkles first
    const existingSparkles = collectionsSection.querySelectorAll('.collections-sparkle');
    existingSparkles.forEach(sparkle => sparkle.remove());
    
    // Create 25 black glitter particles
    for (let i = 0; i < 25; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = Math.random() > 0.5 ? 'collections-sparkle sparkle-alt' : 'collections-sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        sparkle.style.animationDuration = (Math.random() * 2 + 3) + 's';
        sparkle.style.zIndex = '1';
        collectionsSection.appendChild(sparkle);
    }
}

// Create About Section Sparkles
function createAboutSparkles() {
    const aboutSection = document.querySelector('.about-snapshot');
    if (!aboutSection) return;
    
    // Remove any existing sparkles first
    const existingSparkles = aboutSection.querySelectorAll('.about-sparkle');
    existingSparkles.forEach(sparkle => sparkle.remove());
    
    // Create 25 black glitter particles
    for (let i = 0; i < 25; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = Math.random() > 0.5 ? 'about-sparkle sparkle-alt' : 'about-sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        sparkle.style.animationDuration = (Math.random() * 2 + 3) + 's';
        sparkle.style.zIndex = '1';
        aboutSection.appendChild(sparkle);
    }
}

// Initialize Value Cards Scroll Animation
function initValueCardsAnimation() {
    const valueCards = document.querySelectorAll('.value-item');
    
    if (!valueCards.length) return;
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    valueCards.forEach((card) => {
        observer.observe(card);
    });
}

function initPromoBanner() {
    const promoBanner = document.querySelector('.promo-banner');
    if (promoBanner) {
        // Add class to body to indicate promo banner presence
        document.body.classList.add('has-promo');
        
        let manuallyClosedByUser = false;
        
        // Handle promo banner close
        const promoClose = promoBanner.querySelector('.promo-close');
        if (promoClose) {
            promoClose.addEventListener('click', function() {
                manuallyClosedByUser = true;
                promoBanner.classList.add('hidden');
                // Update navbar positioning after animation
                setTimeout(() => {
                    document.body.classList.remove('has-promo');
                }, 300);
            });
        }
        
        // Auto hide/show based on scroll position (aligned with navbar scroll threshold)
        window.addEventListener('scroll', function() {
            if (manuallyClosedByUser) return; // Don't auto-show if user closed it
            
            const scrollPosition = window.scrollY;
            
            if (scrollPosition > 100) {
                // Scrolled past 100px (same as navbar) - hide banner
                if (!promoBanner.classList.contains('hidden')) {
                    promoBanner.classList.add('hidden');
                    setTimeout(() => {
                        document.body.classList.remove('has-promo');
                    }, 300);
                }
            } else {
                // Within first 100px - show banner
                if (promoBanner.classList.contains('hidden')) {
                    promoBanner.classList.remove('hidden');
                    document.body.classList.add('has-promo');
                }
            }
        });
    }
}

// Search functionality
function initSearchFunctionality() {
    const searchBtn = document.getElementById('search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            // Redirect to shop page if not already there
            if (!window.location.pathname.includes('shop.html')) {
                window.location.href = 'shop.html';
            } else {
                // If already on shop page, focus on search input if it exists
                const searchInput = document.getElementById('product-search');
                if (searchInput) {
                    searchInput.focus();
                }
            }
        });
    }
    
    // Search input functionality
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            filterProductsBySearch(searchTerm);
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const searchTerm = this.value.toLowerCase().trim();
                filterProductsBySearch(searchTerm);
            }
        });
    }
}

// Filter products by search term
function filterProductsBySearch(searchTerm) {
    const productCards = document.querySelectorAll('.product-card');
    const resultsCount = document.getElementById('results-count');
    let visibleCount = 0;
    
    productCards.forEach(card => {
        const productName = card.querySelector('.product-name')?.textContent.toLowerCase() || '';
        const productDescription = card.querySelector('.product-description')?.textContent.toLowerCase() || '';
        const productCategory = card.getAttribute('data-category')?.toLowerCase() || '';
        
        const isVisible = searchTerm === '' || 
                         productName.includes(searchTerm) || 
                         productDescription.includes(searchTerm) || 
                         productCategory.includes(searchTerm);
        
        if (isVisible) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Update results count
    if (resultsCount) {
        resultsCount.textContent = `${visibleCount} product${visibleCount !== 1 ? 's' : ''}`;
    }
}

// Navigation Functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navOverlay = document.getElementById('nav-overlay');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to open sidebar
    function openSidebar() {
        navMenu.classList.add('active');
        navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Animate hamburger menu
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) bar.style.opacity = '0';
            if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        });
    }

    // Function to close sidebar
    function closeSidebar() {
        navMenu.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // Reset hamburger menu
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    }

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            if (navMenu.classList.contains('active')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });
    }

    // Close sidebar when clicking overlay
    if (navOverlay) {
        navOverlay.addEventListener('click', closeSidebar);
    }

    // Close sidebar when clicking close button
    if (navClose) {
        navClose.addEventListener('click', closeSidebar);
    }

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // Close sidebar on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            closeSidebar();
        }
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const animatedElements = [
        '.value-item',
        '.collection-card',
        '.benefit-item',
        '.about-content',
        '.sizing-content',
        '.faq-item',
        '.section-content h2',
        '.intro-text',
        '.sizing-guide-image',
        '.instructions-grid',
        '.instruction-item',
        '.sizing-form',
        '.table-container',
        '.faq-category',
        '.guide-note',
        '.cta-content',
        '.cta-buttons'
    ];

    animatedElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            element.classList.add('fade-in');
            element.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(element);
        });
    });

    // Staggered animation for collection cards
    const collectionCards = document.querySelectorAll('.collection-card');
    collectionCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
}

// Custom Cursor
function initCustomCursor() {
    // Only enable on desktop
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.classList.add('cursor');
        document.body.appendChild(cursor);

        const cursorTrails = [];
        for (let i = 0; i < 5; i++) {
            const trail = document.createElement('div');
            trail.classList.add('cursor-trail');
            document.body.appendChild(trail);
            cursorTrails.push(trail);
        }

        let mouseX = 0, mouseY = 0;
        let trailX = [], trailY = [];

        // Initialize trail positions
        for (let i = 0; i < cursorTrails.length; i++) {
            trailX[i] = 0;
            trailY[i] = 0;
        }

        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursor.style.left = mouseX - 10 + 'px';
            cursor.style.top = mouseY - 10 + 'px';
        });

        // Animate cursor trails
        function animateTrails() {
            for (let i = cursorTrails.length - 1; i > 0; i--) {
                trailX[i] = trailX[i - 1];
                trailY[i] = trailY[i - 1];
            }
            trailX[0] = mouseX;
            trailY[0] = mouseY;

            cursorTrails.forEach((trail, index) => {
                trail.style.left = trailX[index] - 4 + 'px';
                trail.style.top = trailY[index] - 4 + 'px';
                trail.style.opacity = (cursorTrails.length - index) / cursorTrails.length;
            });

            requestAnimationFrame(animateTrails);
        }
        animateTrails();

        // Cursor hover effects
        const hoverElements = document.querySelectorAll('button, a, .collection-card');
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursor.style.background = 'rgba(0, 0, 0, 0.8)';
            });
            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.background = 'rgba(0, 0, 0, 0.5)';
            });
        });
    }
}

// Magnetic Button Effects
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.cta-primary, .cta-secondary, .add-to-collection');
    
    buttons.forEach(button => {
        button.classList.add('magnetic');
        
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98) translateY(1px)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1.05) translateY(-2px)';
        });
    });
}

// Parallax Effects
function initParallaxEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-particles');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        // Hero content parallax
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            const speed = 0.3;
            heroContent.style.transform = `translateY(${scrolled * speed}px)`;
        }
    });
}

// Email Signup Functionality
function initEmailSignup() {
    const emailInput = document.querySelector('.email-input');
    const signupButton = document.querySelector('.social-proof .cta-primary');
    
    if (signupButton) {
        signupButton.addEventListener('click', function() {
            const email = emailInput.value.trim();
            
            if (email && isValidEmail(email)) {
                // Simulate signup process
                this.textContent = 'Signing Up...';
                this.disabled = true;
                
                setTimeout(() => {
                    this.textContent = 'Welcome! ✨';
                    emailInput.value = '';
                    
                    setTimeout(() => {
                        this.textContent = 'Sign Me Up';
                        this.disabled = false;
                    }, 2000);
                }, 1500);
            } else {
                // Error animation
                emailInput.style.borderColor = '#ff4444';
                emailInput.placeholder = 'Please enter a valid email';
                
                setTimeout(() => {
                    emailInput.style.borderColor = '#333';
                    emailInput.placeholder = 'Enter your email';
                }, 2000);
            }
        });
    }
    
    // Enter key support
    if (emailInput) {
        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                signupButton.click();
            }
        });
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Loading Animation
// function initLoadingAnimation() {
//     // Get existing loading screen
//     const loading = document.getElementById('loading');
//     
//     if (loading) {
//         // Hide loading screen after page load
//         window.addEventListener('load', function() {
//             setTimeout(() => {
//                 loading.classList.add('hidden');
//                 setTimeout(() => {
//                     loading.style.display = 'none';
//                 }, 500);
//             }, 1000);
//         });
//     }
// }

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Hero scroll arrow functionality
    const scrollArrow = document.querySelector('.scroll-arrow');
    if (scrollArrow) {
        scrollArrow.addEventListener('click', function() {
            const valuePropSection = document.querySelector('.value-prop');
            if (valuePropSection) {
                const offsetTop = valuePropSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Collection Card Interactions
document.addEventListener('DOMContentLoaded', function() {
    const collectionCards = document.querySelectorAll('.collection-card');
    
    collectionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotateX(5deg) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) scale(1)';
        });
    });
    
    // Add to collection button functionality
    const addButtons = document.querySelectorAll('.add-to-collection');
    addButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Check if this is the "VIEW ALL COLLECTIONS" button
            if (this.textContent.trim() === 'VIEW ALL COLLECTIONS') {
                // Redirect to shop page
                window.location.href = 'shop.html';
                return;
            }
            
            // Skip navigation buttons that are now proper anchor links
            if (this.textContent.trim() === 'Discover the Difference') {
                return;
            }
            
            // Original functionality for other add-to-collection buttons
            const originalText = this.textContent;
            this.textContent = 'Added! ✨';
            this.style.background = '#000';
            this.style.color = '#fff';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = 'transparent';
                this.style.color = '#000';
            }, 2000);
        });
    });
    
    // Navigation button functionality
    const ctaButtons = document.querySelectorAll('.cta-primary, .cta-secondary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const buttonText = this.textContent.trim();
            
            // Navigation based on button text
            if (buttonText === 'Shop the Collection' || buttonText === 'Shop Now') {
                window.location.href = 'shop.html';
            } else if (buttonText === 'Customise Your Set') {
                window.location.href = 'custom-orders.html';
            } else if (buttonText === 'Read My Story') {
                window.location.href = 'about.html';
            } else if (buttonText === 'Discover the Difference') {
                // Skip - now handled by anchor link
                return;
            }
        });
    });
});

// Resize handler
window.addEventListener('resize', function() {
    // Reinitialize cursor on resize
    if (window.innerWidth <= 768) {
        const cursor = document.querySelector('.cursor');
        const trails = document.querySelectorAll('.cursor-trail');
        if (cursor) cursor.remove();
        trails.forEach(trail => trail.remove());
    } else if (window.innerWidth > 768 && !document.querySelector('.cursor')) {
        initCustomCursor();
    }
});

// Performance optimization
let ticking = false;

function updateAnimations() {
    // Batch DOM updates here
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateAnimations);
        ticking = true;
    }
}

// Throttled scroll handler
window.addEventListener('scroll', requestTick);

// Add shimmer effect to hero title
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.backgroundSize = '200% auto';
    }
});

// Intersection Observer for performance
const performanceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Element is visible, enable animations
            entry.target.style.animationPlayState = 'running';
        } else {
            // Element is not visible, pause animations
            entry.target.style.animationPlayState = 'paused';
        }
    });
});

// Observe animated elements for performance
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.hero-particles, .shimmer');
    animatedElements.forEach(element => {
        performanceObserver.observe(element);
    });
});

// Touch device detection and optimization
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

if (isTouchDevice()) {
    document.body.classList.add('touch-device');
    // Disable hover effects on touch devices
    const style = document.createElement('style');
    style.textContent = `
        .touch-device .collection-card:hover,
        .touch-device .product-card:hover {
            transform: none !important;
        }
        .touch-device .magnetic:hover {
            transform: none !important;
        }
    `;
    document.head.appendChild(style);
}

// Shopping Cart and Ecommerce Functionality
class EcommerceApp {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.initEcommerce();
    }

    parsePrice(priceString) {
        if (!priceString || priceString.toUpperCase() === 'FREE') {
            return 0;
        }
        const cleanPrice = priceString.toString().replace(/£|\$|AUD|A\$/g, '').replace(/,/g, '');
        const parsed = parseFloat(cleanPrice);
        return isNaN(parsed) ? 0 : parsed;
    }

    formatPrice(price) {
        try {
            const formatter = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' });
            return price === 0 ? 'FREE' : formatter.format(price);
        } catch (e) {
            return price === 0 ? 'FREE' : `$${price.toFixed(2)}`;
        }
    }

    initEcommerce() {
        this.updateCartCount();
        this.bindEcommerceEvents();
        this.renderCart();
    }

    bindEcommerceEvents() {
        // Cart toggle
        document.querySelector('.cart-btn')?.addEventListener('click', () => {
            this.toggleCart();
        });

        // Cart overlay close
        document.querySelector('.cart-overlay')?.addEventListener('click', () => {
            this.closeCart();
        });

        // Cart close button
        document.querySelector('.cart-close')?.addEventListener('click', () => {
            this.closeCart();
        });

        // Quick view buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('quick-view-btn')) {
                e.preventDefault();
                const productCard = e.target.closest('.product-card, .collection-card');
                if (productCard) {
                    this.showQuickView(productCard);
                } else {
                    // Handle standalone quick view buttons (like sizing kit)
                    this.showQuickViewFromButton(e.target);
                }
            }
            
            // Handle collection card clicks
            if (e.target.closest('.card-image') && e.target.closest('.collection-slide')) {
                e.preventDefault();
                const slide = e.target.closest('.collection-slide');
                if (slide) {
                    // Create a mock product card element for the showQuickView method
                    const mockProductCard = document.createElement('div');
                    const defaultSrc = slide.querySelector('img:not(.hover-image)')?.src || '';
                    const hoverSrc = slide.querySelector('img.hover-image')?.src || '';
                    let primarySrc = defaultSrc;
                    let secondarySrc = hoverSrc;
                    if (primarySrc && /hover/i.test(primarySrc) && secondarySrc && !/hover/i.test(secondarySrc)) {
                        primarySrc = secondarySrc;
                        secondarySrc = defaultSrc;
                    }
                    mockProductCard.innerHTML = `
                        <h3 class="product-name">${slide.querySelector('h3')?.textContent || 'Collection Item'}</h3>
                        <div class="price">${slide.querySelector('.price')?.textContent || '$0.00'}</div>
                        <img class="product-img default" src="${primarySrc}" alt="Product">
                        ${secondarySrc ? `<img class=\"product-img hover\" src=\"${secondarySrc}\" alt=\"Product Hover\">` : ''}
                        <p class="product-description">Beautiful ${slide.querySelector('h3')?.textContent || 'Collection Item'} collection from Zobosmitty Nailz</p>
                    `;
                    
                    this.showQuickView(mockProductCard);
                }
            }
        });

        // Checkout button
        this.checkoutBtn = document.querySelector('.btn-checkout');
        this.checkoutModal = document.getElementById('checkout-modal');
        this.placeOrderBtn = document.getElementById('place-order');
        this.applyDiscountBtn = document.getElementById('apply-discount');
        this.discountInput = document.getElementById('discount-input');
        
        this.checkoutBtn?.addEventListener('click', () => {
            this.openCheckout();
        });
        
        this.placeOrderBtn?.addEventListener('click', () => {
            this.processOrder();
        });
        
        this.applyDiscountBtn?.addEventListener('click', () => {
            this.applyDiscount();
        });

        // Add to cart buttons
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = e.target.closest('.add-to-cart-btn').dataset.productId;
                const productName = e.target.closest('.add-to-cart-btn').dataset.productName;
                const productPrice = this.parsePrice(e.target.closest('.add-to-cart-btn').dataset.productPrice);
                const productImage = e.target.closest('.add-to-cart-btn').dataset.productImage;
                
                this.addToCart({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    image: productImage,
                    quantity: 1
                });
            });
        });
        
        // Cart promo code apply button
        document.addEventListener('click', (e) => {
            if (e.target.id === 'cart-apply-promo') {
                e.preventDefault();
                this.applyCartPromoCode();
            }
        });
        
        // Cart promo code input - apply on Enter key
        document.addEventListener('keypress', (e) => {
            if (e.target.id === 'cart-promo-input' && e.key === 'Enter') {
                e.preventDefault();
                this.applyCartPromoCode();
            }
        });
        
        // Clear cart button
        document.addEventListener('click', (e) => {
            if (e.target.id === 'clear-cart-btn') {
                e.preventDefault();
                this.clearCart();
            }
            
            // Checkout button
            if (e.target.id === 'checkout-btn') {
                e.preventDefault();
                this.openCheckout();
            }
        });


    }

    addToCart(product) {
        // For products with size, treat different sizes as separate items
        const itemKey = product.size ? `${product.id}-${product.size}` : product.id;
        const existingItem = this.cart.find(item => {
            const existingKey = item.size ? `${item.id}-${item.size}` : item.id;
            return existingKey === itemKey;
        });
        
        if (existingItem) {
            existingItem.quantity += (product.quantity || 1);
        } else {
            // Ensure product has required properties
            const cartItem = {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: product.quantity || 1,
                size: product.size || null
            };
            this.cart.push(cartItem);
        }
        
        this.saveCart();
        this.updateCartCount();
        this.renderCart();
        
        const sizeText = product.size ? ` (Size: ${product.size})` : '';
        const quantityText = product.quantity > 1 ? ` x${product.quantity}` : '';
        this.showNotification(`${product.name}${sizeText}${quantityText} added to cart!`);
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartCount();
        this.renderCart();
    }

    updateQuantity(productId, quantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeFromCart(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
                this.renderCart();
            }
        }
    }

    removeFromCartByIndex(index) {
        if (index >= 0 && index < this.cart.length) {
            this.cart.splice(index, 1);
            this.saveCart();
            this.updateCartCount();
            this.renderCart();
        }
    }

    updateQuantityByIndex(index, newQuantity) {
        if (newQuantity <= 0) {
            this.removeFromCartByIndex(index);
            return;
        }
        
        if (index >= 0 && index < this.cart.length) {
            this.cart[index].quantity = newQuantity;
            this.saveCart();
            this.updateCartCount();
            this.renderCart();
        }
    }



    toggleCart() {
        const cartSidebar = document.querySelector('.cart-sidebar');
        const cartOverlay = document.querySelector('.cart-overlay');
        
        cartSidebar.classList.toggle('active');
        cartOverlay.classList.toggle('active');
    }

    closeCart() {
        document.querySelector('.cart-sidebar').classList.remove('active');
        document.querySelector('.cart-overlay').classList.remove('active');
    }

    renderCart() {
        const cartItems = document.querySelector('.cart-items');
        const cartEmpty = document.querySelector('.cart-empty');
        const cartFooter = document.querySelector('.cart-footer');
        
        if (!cartItems) return; // Exit if cart elements don't exist
        
        if (this.cart.length === 0) {
            if (cartEmpty) cartEmpty.style.display = 'block';
            if (cartFooter) cartFooter.style.display = 'none';
            cartItems.innerHTML = '<div class="cart-empty-message">Your cart is empty</div>';
        } else {
            if (cartEmpty) cartEmpty.style.display = 'none';
            if (cartFooter) cartFooter.style.display = 'block';
            
            // Separate items into categories
            const products = this.cart.filter(item => item.price > 0);
            const freebies = this.cart.filter(item => item.price === 0);
            
            let cartHTML = '';
            
            // Products section
            if (products.length > 0) {
                cartHTML += '<div class="cart-category"><h4 class="cart-category-title">Products</h4>';
                cartHTML += products.map((item, index) => {
                    const originalIndex = this.cart.indexOf(item);
                    const itemKey = item.size ? `${item.id}-${item.size}` : item.id;
                    const sizeDisplay = item.size ? `<p class="cart-item-size">Size: ${item.size}</p>` : '';
                    
                    return `
                        <div class="cart-item" data-item-key="${itemKey}" data-item-index="${originalIndex}">
                            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                            <div class="cart-item-details">
                                <h4>${item.name}</h4>
                                ${sizeDisplay}
                                <p class="cart-item-price">${this.formatPrice(item.price)}</p>
                                <div class="quantity-controls">
                                    <button class="qty-btn" onclick="ecommerceApp.updateQuantityByIndex(${originalIndex}, ${item.quantity - 1})">-</button>
                                    <span class="quantity">${item.quantity}</span>
                                    <button class="qty-btn" onclick="ecommerceApp.updateQuantityByIndex(${originalIndex}, ${item.quantity + 1})">+</button>
                                </div>
                            </div>
                            <button class="remove-item" onclick="ecommerceApp.removeFromCartByIndex(${originalIndex})">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                    `;
                }).join('');
                cartHTML += '</div>';
            }
            
            // Freebies section
            if (freebies.length > 0) {
                cartHTML += '<div class="cart-category"><h4 class="cart-category-title">Freebies</h4>';
                cartHTML += freebies.map((item, index) => {
                    const originalIndex = this.cart.indexOf(item);
                    const itemKey = item.size ? `${item.id}-${item.size}` : item.id;
                    const sizeDisplay = item.size ? `<p class="cart-item-size">Size: ${item.size}</p>` : '';
                    
                    return `
                        <div class="cart-item" data-item-key="${itemKey}" data-item-index="${originalIndex}">
                            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                            <div class="cart-item-details">
                                <h4>${item.name}</h4>
                                ${sizeDisplay}
                                <p class="cart-item-price">FREE</p>
                                <div class="quantity-controls">
                                    <button class="qty-btn" onclick="ecommerceApp.updateQuantityByIndex(${originalIndex}, ${item.quantity - 1})">-</button>
                                    <span class="quantity">${item.quantity}</span>
                                    <button class="qty-btn" onclick="ecommerceApp.updateQuantityByIndex(${originalIndex}, ${item.quantity + 1})">+</button>
                                </div>
                            </div>
                            <button class="remove-item" onclick="ecommerceApp.removeFromCartByIndex(${originalIndex})">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                    `;
                }).join('');
                cartHTML += '</div>';
            }
            
            cartItems.innerHTML = cartHTML;
        }
        
        this.updateCartTotals();
    }

    updateCartTotals() {
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = 4.99; // Keep consistent with checkout
        const discount = this.cartDiscount || 0;
        const total = subtotal + shipping - discount;
        
        const subtotalEl = document.getElementById('cart-subtotal');
        const shippingEl = document.getElementById('cart-shipping');
        const totalEl = document.getElementById('cart-total');
        const discountEl = document.getElementById('cart-discount');
        const discountRow = document.getElementById('cart-discount-row');
        
        if (subtotalEl) subtotalEl.textContent = this.formatPrice(subtotal);
        if (shippingEl) shippingEl.textContent = this.formatPrice(shipping);
        if (totalEl) totalEl.textContent = this.formatPrice(total);
        
        if (discount > 0 && discountEl && discountRow) {
            discountEl.textContent = `-${this.formatPrice(discount)}`;
            discountRow.style.display = 'flex';
        } else if (discountRow) {
            discountRow.style.display = 'none';
        }
    }

    updateCartCount() {
        const count = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            cartCount.textContent = count;
            cartCount.style.display = count > 0 ? 'block' : 'none';
        }
    }

    applyCartPromoCode() {
        const promoInput = document.getElementById('cart-promo-input');
        const promoMessage = document.getElementById('cart-promo-message');
        const applyBtn = document.getElementById('cart-apply-promo');
        
        if (!promoInput || !promoMessage) return;
        
        const code = promoInput.value.trim().toUpperCase();
        
        if (!code) {
            this.showPromoMessage('Please enter a promo code', 'error');
            return;
        }
        
        // Disable button during processing
        applyBtn.disabled = true;
        applyBtn.textContent = 'Applying...';
        
        const validCodes = {
            'WELCOME15': 0.15,
            'SAVE10': 0.10,
            'NEWBIE': 0.20,
            'FIRST20': 0.20
        };
        
        setTimeout(() => {
            if (validCodes[code]) {
                const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                this.cartDiscount = subtotal * validCodes[code];
                this.updateCartTotals();
                this.showPromoMessage(`Promo code applied! You saved ${this.formatPrice(this.cartDiscount)}`, 'success');
                promoInput.value = '';
                promoInput.disabled = true;
                applyBtn.textContent = 'Applied';
            } else {
                this.showPromoMessage('Invalid promo code. Please try again.', 'error');
                applyBtn.disabled = false;
                applyBtn.textContent = 'Apply';
            }
        }, 800);
    }
    
    showPromoMessage(message, type) {
        const promoMessage = document.getElementById('cart-promo-message');
        if (!promoMessage) return;
        
        promoMessage.textContent = message;
        promoMessage.className = `promo-message ${type}`;
        
        if (type === 'error') {
            setTimeout(() => {
                promoMessage.textContent = '';
                promoMessage.className = 'promo-message';
            }, 3000);
        }
    }
    
    clearCart() {
        if (this.cart.length === 0) {
            this.showNotification('Your cart is already empty', 'error');
            return;
        }
        
        // Show confirmation dialog
        const confirmed = confirm('Are you sure you want to clear all items from your cart? This action cannot be undone.');
        
        if (confirmed) {
            this.cart = [];
            this.cartDiscount = 0;
            this.saveCart();
            this.updateCartCount();
            this.renderCart();
            
            // Reset promo code input
            const promoInput = document.getElementById('cart-promo-input');
            const applyBtn = document.getElementById('cart-apply-promo');
            const promoMessage = document.getElementById('cart-promo-message');
            
            if (promoInput) {
                promoInput.value = '';
                promoInput.disabled = false;
            }
            if (applyBtn) {
                applyBtn.disabled = false;
                applyBtn.textContent = 'Apply';
            }
            if (promoMessage) {
                promoMessage.textContent = '';
                promoMessage.className = 'promo-message';
            }
            
            this.showNotification('Cart cleared successfully', 'success');
        }
    }



    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }



    openCheckout() {
        if (this.cart.length === 0) {
            this.showNotification('Your cart is empty!', 'error');
            return;
        }
        
        this.closeCart();
        this.populateCheckoutItems();
        this.calculateCheckoutTotals();
        openModal('checkout-modal');
    }
    
    populateCheckoutItems() {
        const checkoutItems = document.getElementById('checkout-items');
        if (!checkoutItems) return;
        
        checkoutItems.innerHTML = '';
        
        this.cart.forEach(item => {
            const checkoutItem = document.createElement('div');
            checkoutItem.className = 'checkout-item';
            checkoutItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="checkout-item-details">
                    <div class="checkout-item-name">${item.name}</div>
                    <div class="checkout-item-price">Qty: ${item.quantity} × ${this.formatPrice(item.price)}</div>
                </div>
            `;
            checkoutItems.appendChild(checkoutItem);
        });
    }
    
    calculateCheckoutTotals() {
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = 4.99;
        const discount = this.currentDiscount || 0;
        const total = subtotal + shipping - discount;
        
        document.getElementById('checkout-subtotal').textContent = this.formatPrice(subtotal);
        document.getElementById('checkout-total').textContent = this.formatPrice(total);
        
        if (discount > 0) {
            document.getElementById('checkout-discount').textContent = `-${this.formatPrice(discount)}`;
            document.getElementById('discount-row').style.display = 'flex';
        }
    }
    
    applyDiscount() {
        const code = this.discountInput.value.trim().toUpperCase();
        const validCodes = {
            'WELCOME15': 0.15,
            'SAVE10': 0.10,
            'NEWBIE': 0.20
        };
        
        if (validCodes[code]) {
            const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            this.currentDiscount = subtotal * validCodes[code];
            this.calculateCheckoutTotals();
            this.showNotification(`Discount code applied! You saved ${this.formatPrice(this.currentDiscount)}`);
            this.discountInput.value = '';
        } else {
            this.showNotification('Invalid discount code', 'error');
        }
    }
    
    processOrder() {
        // Validate form fields
        const requiredFields = [
            'checkout-email', 'checkout-phone', 'first-name', 'last-name',
            'address', 'city', 'postal-code', 'country',
            'card-number', 'expiry', 'cvv', 'cardholder-name'
        ];
        
        // Validation temporarily disabled for testing
        /*
        let isValid = true;
        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field && !field.value.trim()) {
                field.style.borderColor = '#ef4444';
                isValid = false;
            } else if (field) {
                field.style.borderColor = '#e2e8f0';
            }
        });
        
        if (!isValid) {
            this.showNotification('Please fill in all required fields', 'error');
            return;
        }
        */
        
        // Simulate order processing then open Payment modal
        this.placeOrderBtn.textContent = 'Processing...';
        this.placeOrderBtn.disabled = true;

        setTimeout(() => {
            // Do not clear cart yet; finalize after successful payment
            closeModal('checkout-modal');
            openModal('payment-modal');

            // Populate Payment modal summary
            populatePaymentSummary();

            // Ensure PayPal buttons are initialized inside the Payment modal
            try { initPayPalButtons(); } catch (e) { console.error(e); }

            // Reset button state
            this.placeOrderBtn.textContent = 'Place Order';
            this.placeOrderBtn.disabled = false;
        }, 1000);
    }

 

    showQuickView(productCard) {
        const productName = productCard.querySelector('.product-name, .product-title')?.textContent || '';
        const productPrice = productCard.querySelector('.price, .product-price')?.textContent || '';
        const productDescription = productCard.querySelector('.product-description')?.textContent || 'Premium nail collection';
        const productId = productCard.querySelector('.add-to-cart-btn')?.getAttribute('data-product-id') || productName.toLowerCase().replace(/\s+/g, '-');
        
        // Get all product images
        const productImages = [];
        const defaultImg = productCard.querySelector('.product-img.default');
        const hoverImg = productCard.querySelector('.product-img.hover');
        
        if (defaultImg?.src) productImages.push(defaultImg.src);
        if (hoverImg?.src) productImages.push(hoverImg.src);
        
        // Add holographic shine hovered image
        // productImages.push('images/collections/holographic shine hovered.png');
        
        // Add a third product image for gallery consistency
        productImages.push('images/other products/sizing kit.png');
        
        // Add STICKY TABS 10 PACK.png to every product gallery
        productImages.push('images/other products/STICKY TABS 10 PACK.png');
        
        // Ensure we have at least one image
        if (productImages.length === 0) {
            productImages.push('images/collections/holographic shine.png'); // fallback
        }
        
        // Create quick view modal with image gallery
        const modal = document.createElement('div');
        modal.className = 'quick-view-modal';
        modal.innerHTML = `
            <div class="quick-view-overlay"></div>
            <div class="quick-view-content">
                <button class="quick-view-close">&times;</button>
                <div class="quick-view-image-gallery">
                    <div class="gallery-container">
                        <div class="gallery-main-image">
                            <img src="${productImages[0]}" alt="${productName}" class="main-gallery-image">
                            ${productImages.length > 1 ? `
                                <button class="gallery-nav gallery-prev" aria-label="Previous image">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                                <button class="gallery-nav gallery-next" aria-label="Next image">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            ` : ''}
                        </div>
                        ${productImages.length > 1 ? `
                            <div class="gallery-thumbnails">
                                ${productImages.map((img, index) => `
                                    <img src="${img}" alt="${productName} view ${index + 1}" class="gallery-thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
                                `).join('')}
                            </div>
                        ` : ''}
                        <div class="gallery-indicators">
                            ${productImages.map((_, index) => `
                                <span class="gallery-indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
                            `).join('')}
                        </div>
                    </div>
                </div>
                <div class="quick-view-info">
                    <h3>${productName}</h3>
                    <p class="description">${productDescription}</p>
                    <div class="price">${productPrice}</div>
                    
                    <div class="size-selection">
                        <label for="size-select">Size:</label>
                        <select id="size-select" class="size-dropdown">
                            <option value="">Select Size</option>
                            <option value="XS">XS (Extra Small)</option>
                            <option value="S">S (Small)</option>
                            <option value="M">M (Medium)</option>
                            <option value="L">L (Large)</option>
                            <option value="XL">XL (Extra Large)</option>
                        </select>
                    </div>
                    
                    <div class="quantity-selection">
                        <label for="quantity">Quantity:</label>
                        <div class="quantity-controls">
                            <button type="button" class="quantity-btn quantity-decrease">-</button>
                            <input type="number" id="quantity" class="quantity-input" value="1" min="1" max="10">
                            <button type="button" class="quantity-btn quantity-increase">+</button>
                        </div>
                    </div>
                    
                    <button class="add-to-cart-btn quick-view-add-cart" disabled>Add to Cart</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Gallery navigation functionality
        let currentImageIndex = 0;
        const mainImage = modal.querySelector('.main-gallery-image');
        const thumbnails = modal.querySelectorAll('.gallery-thumbnail');
        const indicators = modal.querySelectorAll('.gallery-indicator');
        const prevBtn = modal.querySelector('.gallery-prev');
        const nextBtn = modal.querySelector('.gallery-next');
        
        function updateGalleryImage(index) {
            if (index < 0 || index >= productImages.length) return;
            
            currentImageIndex = index;
            mainImage.src = productImages[index];
            
            // Update thumbnails
            thumbnails.forEach((thumb, i) => {
                thumb.classList.toggle('active', i === index);
            });
            
            // Update indicators
            indicators.forEach((indicator, i) => {
                indicator.classList.toggle('active', i === index);
            });
        }
        
        // Navigation button events
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : productImages.length - 1;
                updateGalleryImage(newIndex);
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const newIndex = currentImageIndex < productImages.length - 1 ? currentImageIndex + 1 : 0;
                updateGalleryImage(newIndex);
            });
        }
        
        // Thumbnail click events
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => {
                updateGalleryImage(index);
            });
        });
        
        // Indicator click events
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                updateGalleryImage(index);
            });
        });
        
        // Keyboard navigation
        function handleKeydown(e) {
            if (e.key === 'ArrowLeft' && prevBtn) {
                prevBtn.click();
            } else if (e.key === 'ArrowRight' && nextBtn) {
                nextBtn.click();
            } else if (e.key === 'Escape') {
                closeModal();
            }
        }
        
        document.addEventListener('keydown', handleKeydown);
        
        function closeModal() {
            document.removeEventListener('keydown', handleKeydown);
            modal.remove();
        }
        
        modal.querySelector('.quick-view-close').addEventListener('click', closeModal);
        modal.querySelector('.quick-view-overlay').addEventListener('click', closeModal);
        
        // Size selection functionality
        const sizeSelect = modal.querySelector('#size-select');
        const addToCartBtn = modal.querySelector('.quick-view-add-cart');
        
        sizeSelect.addEventListener('change', () => {
            addToCartBtn.disabled = !sizeSelect.value;
        });
        
        // Quantity controls
        const quantityInput = modal.querySelector('#quantity');
        const decreaseBtn = modal.querySelector('.quantity-decrease');
        const increaseBtn = modal.querySelector('.quantity-increase');
        
        decreaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });
        
        increaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue < 10) {
                quantityInput.value = currentValue + 1;
            }
        });
        
        // Add to cart functionality
        addToCartBtn.addEventListener('click', () => {
            const selectedSize = sizeSelect.value;
            const quantity = parseInt(quantityInput.value);
            
            if (!selectedSize) {
                alert('Please select a size before adding to cart.');
                return;
            }
            
            // Add item to cart with size and quantity
            this.addToCart({
                id: productId,
                name: productName,
                price: this.parsePrice(productPrice),
                image: productImages[0],
                size: selectedSize,
                quantity: quantity
            });
            
            closeModal();
        });
    }

    showQuickViewFromButton(button) {
        const productName = button.getAttribute('data-name') || button.dataset.name || 'Product';
        const productPrice = button.getAttribute('data-price') || button.dataset.price || '0.00';
        const productImage = button.getAttribute('data-image') || button.dataset.image || '';
        const productDescription = button.getAttribute('data-description') || button.dataset.description || 'Premium product';
        const productId = button.getAttribute('data-product-id') || button.dataset.productId || 'product-' + Date.now();
        
        // Check if this is a freebie item (sizing kit)
        const isFreebie = productPrice === 'FREE' || productId === 'sizing-kit';
        
        // Create quick view modal with appropriate structure
        const modal = document.createElement('div');
        modal.className = 'quick-view-modal';
        
        if (isFreebie) {
            // Simplified modal for freebie items (no size/quantity selection)
            modal.innerHTML = `
                <div class="quick-view-overlay"></div>
                <div class="quick-view-content freebie-modal">
                    <button class="quick-view-close">&times;</button>
                    <div class="quick-view-image">
                        <img src="${productImage}" alt="${productName}">
                    </div>
                    <div class="quick-view-info">
                        <h3>${productName}</h3>
                        <p class="description">${productDescription}</p>
                        <div class="price freebie-price">${productPrice}</div>
                        <div class="freebie-notice">
                            <p><strong>This is a complimentary item!</strong> No payment required.</p>
                        </div>
                        <button class="add-to-cart-btn quick-view-add-cart freebie-btn">Order Now - FREE</button>
                    </div>
                </div>
            `;
        } else {
            // Standard modal for regular products
            modal.innerHTML = `
                <div class="quick-view-overlay"></div>
                <div class="quick-view-content">
                    <button class="quick-view-close">&times;</button>
                    <div class="quick-view-image">
                        <img src="${productImage}" alt="${productName}">
                    </div>
                    <div class="quick-view-info">
                        <h3>${productName}</h3>
                        <p class="description">${productDescription}</p>
                        <div class="price">${productPrice}</div>
                        <button class="add-to-cart-btn quick-view-add-cart">Add to Cart</button>
                    </div>
                </div>
            `;
        }
        
        document.body.appendChild(modal);
        
        function closeModal() {
            modal.remove();
        }
        
        modal.querySelector('.quick-view-close').addEventListener('click', closeModal);
        modal.querySelector('.quick-view-overlay').addEventListener('click', closeModal);
        
        // Add to cart functionality
        const addToCartBtn = modal.querySelector('.quick-view-add-cart');
        addToCartBtn.addEventListener('click', () => {
            const product = {
                id: productId,
                name: productName,
                price: this.parsePrice(productPrice),
                image: productImage,
                quantity: 1
            };
            this.addToCart(product);
            
            closeModal();
        });
    }

    showNotification(message, type = 'success') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <button class="notification-close" aria-label="Dismiss notification">&times;</button>
            <div class="notification-content"><span class="notification-message">${message}</span></div>
        `;

        // Add to page
        document.body.appendChild(notification);

        // Show notification
        const showTimeout = setTimeout(() => notification.classList.add('show'), 100);

        // Auto-remove after 3 seconds
        const hideTimeout = setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);

        // Manual dismiss
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn?.addEventListener('click', () => {
            clearTimeout(showTimeout);
            clearTimeout(hideTimeout);
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        });
    }
}

// Modal Functions
function populatePaymentSummary() {
    try {
        const itemsSrc = document.getElementById('checkout-items');
        const itemsDest = document.getElementById('payment-items');
        if (itemsSrc && itemsDest) {
            itemsDest.innerHTML = itemsSrc.innerHTML;
        }

        const copyText = (srcId, destId) => {
            const src = document.getElementById(srcId);
            const dest = document.getElementById(destId);
            if (src && dest) dest.textContent = src.textContent;
        };

        copyText('checkout-subtotal', 'payment-subtotal');
        copyText('checkout-shipping', 'payment-shipping');
        copyText('checkout-total', 'payment-total');

        // Handle discount visibility
        const discountSrcRow = document.getElementById('discount-row');
        const discountDestRow = document.getElementById('payment-discount-row');
        const discountSrc = document.getElementById('checkout-discount');
        const discountDest = document.getElementById('payment-discount');
        if (discountDestRow) {
            const isDiscountVisible = discountSrcRow && discountSrcRow.style.display !== 'none';
            discountDestRow.style.display = isDiscountVisible ? '' : 'none';
            if (isDiscountVisible && discountSrc && discountDest) {
                discountDest.textContent = discountSrc.textContent;
            }
        }
    } catch (e) {
        console.error('populatePaymentSummary error:', e);
    }
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function switchModal(currentModalId, targetModalId) {
    closeModal(currentModalId);
    setTimeout(() => openModal(targetModalId), 300);
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        const modalId = e.target.id;
        closeModal(modalId);
    }
});

// Product Search and Filter functionality
class ProductFilter {
    constructor() {
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.sortSelect = document.querySelector('.sort-dropdown select');
        this.productsGrid = document.getElementById('products-grid') || document.getElementById('collections-grid');
        this.resultsCount = document.querySelector('.results-count');
        this.products = [];
        this.activeFilter = 'all';
    }

    init() {
        if (!this.productsGrid) return;
        
        // Store original products
        this.products = Array.from(this.productsGrid.querySelectorAll('.product-card, .collection-card'));
        
        // Bind events
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.setActiveFilter(btn.dataset.filter);
                this.filterProducts();
            });
        });

        if (this.sortSelect) {
            this.sortSelect.addEventListener('change', () => this.sortProducts());
        }

        // Initialize with all products visible
        this.updateResultsCount();
    }

    setActiveFilter(filter) {
        this.activeFilter = filter;
        
        // Update button states
        this.filterButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === filter) {
                btn.classList.add('active');
            }
        });
    }

    filterProducts() {
        let visibleCount = 0;

        this.products.forEach(product => {
            const productCategories = product.dataset.category ? product.dataset.category.split(' ') : [];
            let showProduct = false;

            if (this.activeFilter === 'all') {
                showProduct = true;
            } else {
                showProduct = productCategories.includes(this.activeFilter);
            }

            // Show/hide product with animation
            if (showProduct) {
                product.style.display = 'block';
                product.style.opacity = '1';
                product.style.transform = 'scale(1)';
                visibleCount++;
            } else {
                product.style.opacity = '0';
                product.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    if (product.style.opacity === '0') {
                        product.style.display = 'none';
                    }
                }, 300);
            }
        });

        this.updateResultsCount(visibleCount);
    }

    sortProducts() {
        if (!this.sortSelect) return;
        
        const sortValue = this.sortSelect.value;
        const productsArray = Array.from(this.products);

        productsArray.sort((a, b) => {
            const aName = a.querySelector('.product-name, .product-title')?.textContent || '';
            const bName = b.querySelector('.product-name, .product-title')?.textContent || '';
            const aPrice = parseFloat((a.querySelector('.price, .product-price')?.textContent || '0').replace(/£|\$|AUD|A\$/g, '').replace(/,/g, ''));
            const bPrice = parseFloat((b.querySelector('.price, .product-price')?.textContent || '0').replace(/£|\$|AUD|A\$/g, '').replace(/,/g, ''));

            switch (sortValue) {
                case 'name-asc':
                    return aName.localeCompare(bName);
                case 'name-desc':
                    return bName.localeCompare(aName);
                case 'price-asc':
                    return aPrice - bPrice;
                case 'price-desc':
                    return bPrice - aPrice;
                default:
                    return 0;
            }
        });

        // Reorder DOM elements
        productsArray.forEach(product => {
            this.productsGrid.appendChild(product);
        });
    }

    updateResultsCount(count = null) {
        if (!this.resultsCount) return;
        
        const visibleProducts = count !== null ? count : this.products.filter(product => 
            product.style.display !== 'none' && product.style.opacity !== '0'
        ).length;
        
        this.resultsCount.textContent = `${visibleProducts} products`;
    }

    clearFilters() {
        this.setActiveFilter('all');
        this.filterProducts();
        if (this.sortSelect) {
            this.sortSelect.value = 'featured';
        }
    }
}

// Initialize ecommerce app
// Global function to open quick view by product ID
function openQuickView(productId) {
    const productCard = document.querySelector(`[data-product-id="${productId}"]`)?.closest('.product-card');
    if (productCard && ecommerceApp) {
        ecommerceApp.showQuickView(productCard);
    }
}

// Collections Carousel Functionality
function initCollectionsCarousel() {
    const carousel = document.getElementById('collections-carousel');
    if (!carousel) return;
    
    // Set cursor pointer for collection images
    const collectionSlides = carousel.querySelectorAll('.collection-slide');
    collectionSlides.forEach(slide => {
        const cardImage = slide.querySelector('.card-image');
        if (cardImage) {
            cardImage.style.cursor = 'pointer';
        }
    });
    
    // Disable carousel functionality on mobile (768px and below)
    if (window.innerWidth <= 768) {
        return;
    }
    
    const track = document.getElementById('carousel-track');
    const slides = track.querySelectorAll('.collection-slide');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const indicators = document.querySelectorAll('.indicator');
    
    let currentSlide = 0;
    const slidesToShow = getSlidesToShow();
    const maxSlide = Math.max(0, slides.length - slidesToShow);
    
    function getSlidesToShow() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }
    
    function updateCarousel() {
        const containerWidth = carousel.querySelector('.carousel-container').offsetWidth;
        const slideWidth = slides[0].offsetWidth;
        // Read actual CSS gap from the track to avoid phantom spacing
        const computedGap = parseInt(getComputedStyle(track).gap) || 0;
        const gap = computedGap;
        const slidesToShow = getSlidesToShow();
        
        // Calculate proper translation to avoid excess space
        let translateX;
        if (currentSlide >= slides.length - slidesToShow) {
            // For the last position, align the last slides properly
            const totalSlidesWidth = slides.length * (slideWidth + gap) - gap;
            translateX = -(totalSlidesWidth - containerWidth);
        } else {
            translateX = -currentSlide * (slideWidth + gap);
        }
        
        track.style.transform = `translateX(${translateX}px)`;
        
        // Update button states
        prevBtn.style.opacity = currentSlide === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentSlide >= maxSlide ? '0.5' : '1';
    }
    
    function nextSlide() {
        if (currentSlide < maxSlide) {
            currentSlide++;
            updateCarousel();
        }
    }
    
    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateCarousel();
        }
    }
    
    function goToSlide(slideIndex) {
        currentSlide = Math.min(slideIndex, maxSlide);
        updateCarousel();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Indicators removed as requested
    
    // Touch/swipe and mouse drag support
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    
    // Touch events
    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });
    
    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
        e.preventDefault();
    });
    
    track.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        
        const diffX = startX - currentX;
        const threshold = 50;
        
        if (Math.abs(diffX) > threshold) {
            if (diffX > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    });
    
    // Mouse drag events
    track.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        isDragging = true;
        track.style.cursor = 'grabbing';
        e.preventDefault();
    });
    
    track.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        currentX = e.clientX;
        e.preventDefault();
    });
    
    track.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        track.style.cursor = 'grab';
        
        const diffX = startX - currentX;
        const threshold = 50;
        
        if (Math.abs(diffX) > threshold) {
            if (diffX > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    });
    
    track.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false;
            track.style.cursor = 'grab';
        }
    });
    
    // Set initial cursor
    track.style.cursor = 'grab';
    
    // Auto-play functionality disabled for manual control
    
    // Handle window resize
    window.addEventListener('resize', () => {
        // If resized to mobile, disable carousel functionality
        if (window.innerWidth <= 768) {
            return;
        }
        
        const newSlidesToShow = getSlidesToShow();
        const newMaxSlide = Math.max(0, slides.length - newSlidesToShow);
        
        if (currentSlide > newMaxSlide) {
            currentSlide = newMaxSlide;
        }
        
        // Recalculate maxSlide for current viewport
        maxSlide = newMaxSlide;
        updateCarousel();
    });
    
    // Initial setup
    updateCarousel();
}

// Video Modal Functionality
const videos = [
    'videos/video1.mp4',
    'videos/video2.mp4',
    'videos/video3.mp4',
    'videos/video4.mp4',
    'videos/video5.mp4',
    'videos/video6.mp4'
];

let currentVideoIndex = 0;

function openVideoModal(index) {
    currentVideoIndex = index;
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    
    modalVideo.src = videos[currentVideoIndex];
    // Ensure inline playback on mobile to avoid fullscreen pop-ups
    modalVideo.setAttribute('playsinline', '');
    modalVideo.playsInline = true;
    // Unmute will only take effect after a user gesture on mobile
    modalVideo.muted = false;
    modal.style.display = 'block';
    
    // Ensure video plays with sound
    modalVideo.play().catch(function(error) {
        console.log('Auto-play was prevented:', error);
        // If autoplay fails, user will need to click play manually
    });
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    
    modal.style.display = 'none';
    modalVideo.pause();
    modalVideo.src = '';
}

function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    const modalVideo = document.getElementById('modalVideo');
    modalVideo.src = videos[currentVideoIndex];
    modalVideo.muted = false;
    modalVideo.play().catch(function(error) {
        console.log('Auto-play was prevented:', error);
    });
}

function previousVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    const modalVideo = document.getElementById('modalVideo');
    modalVideo.src = videos[currentVideoIndex];
    modalVideo.muted = false;
    modalVideo.play().catch(function(error) {
        console.log('Auto-play was prevented:', error);
    });
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target === modal) {
        closeVideoModal();
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('videoModal');
    if (modal.style.display === 'block') {
        if (event.key === 'Escape') {
            closeVideoModal();
        } else if (event.key === 'ArrowRight') {
            nextVideo();
        } else if (event.key === 'ArrowLeft') {
            previousVideo();
        }
    }
});

// Custom Orders Form Functionality
function initCustomOrdersForm() {
    const sizingMethodRadios = document.querySelectorAll('input[name="sizingMethod"]');
    const kitSizing = document.getElementById('kit-sizing');
    const guideSizing = document.getElementById('guide-sizing');
    
    if (sizingMethodRadios.length > 0 && kitSizing && guideSizing) {
        sizingMethodRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'kit') {
                    kitSizing.style.display = 'block';
                    guideSizing.style.display = 'none';
                } else if (this.value === 'guide') {
                    kitSizing.style.display = 'none';
                    guideSizing.style.display = 'block';
                }
            });
        });
    }
    
    // Handle form submission
    const customOrderForm = document.querySelector('.custom-order-form');
    if (customOrderForm) {
        customOrderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            const notification = document.createElement('div');
            notification.className = 'notification success show';
            notification.innerHTML = `
                <span>Custom order request submitted successfully! We'll contact you within 24 hours.</span>
            `;
            
            document.body.appendChild(notification);
            
            // Trigger animation by adding show class after a brief delay
            setTimeout(() => {
                notification.classList.add('show');
            }, 100);
            
            // Remove notification after 5 seconds
            setTimeout(() => {
                notification.remove();
            }, 5000);
            
            // Reset form
            this.reset();
            
            // Reset sizing method display
            if (kitSizing && guideSizing) {
                kitSizing.style.display = 'block';
                guideSizing.style.display = 'none';
            }
        });
    }
}

// FAQ Functionality
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.closest('.faq-item');
            const isActive = faqItem.classList.contains('active');
            
            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });
            
            // Toggle current item
            if (!isActive) {
                faqItem.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

// Save Sizes Functionality
function initSaveSizesFunctionality() {
    const saveSizesBtn = document.querySelector('.save-sizes-btn');
    const sizeInputs = document.querySelectorAll('.size-input');
    
    if (saveSizesBtn && sizeInputs.length > 0) {
        // Load saved sizes on page load
        loadSavedSizes();
        
        saveSizesBtn.addEventListener('click', function() {
            const sizes = {
                leftHand: {
                    thumb: sizeInputs[0].value,
                    pointer: sizeInputs[2].value,
                    middle: sizeInputs[4].value,
                    ring: sizeInputs[6].value,
                    pinky: sizeInputs[8].value
                },
                rightHand: {
                    thumb: sizeInputs[1].value,
                    pointer: sizeInputs[3].value,
                    middle: sizeInputs[5].value,
                    ring: sizeInputs[7].value,
                    pinky: sizeInputs[9].value
                }
            };
            
            // Save to localStorage
            localStorage.setItem('nailSizes', JSON.stringify(sizes));
            
            // Show success notification
            showSizesNotification('Your nail sizes have been saved successfully!', 'success');
            
            // Add visual feedback to button
            const originalText = saveSizesBtn.textContent;
            saveSizesBtn.textContent = 'Saved!';
            saveSizesBtn.style.background = '#28a745';
            
            setTimeout(() => {
                if (saveSizesBtn) {
                    saveSizesBtn.textContent = originalText;
                    saveSizesBtn.style.background = '#000000';
                }
            }, 2000);
        });
    }
}

function loadSavedSizes() {
    const savedSizes = localStorage.getItem('nailSizes');
    const sizeInputs = document.querySelectorAll('.size-input');
    
    if (savedSizes && sizeInputs.length > 0) {
        const sizes = JSON.parse(savedSizes);
        
        // Populate the inputs with saved values
        sizeInputs[0].value = sizes.leftHand.thumb || '';
        sizeInputs[1].value = sizes.rightHand.thumb || '';
        sizeInputs[2].value = sizes.leftHand.pointer || '';
        sizeInputs[3].value = sizes.rightHand.pointer || '';
        sizeInputs[4].value = sizes.leftHand.middle || '';
        sizeInputs[5].value = sizes.rightHand.middle || '';
        sizeInputs[6].value = sizes.leftHand.ring || '';
        sizeInputs[7].value = sizes.rightHand.ring || '';
        sizeInputs[8].value = sizes.leftHand.pinky || '';
        sizeInputs[9].value = sizes.rightHand.pinky || '';
    }
}

function showSizesNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <button class="notification-close" aria-label="Dismiss notification">&times;</button>
        <div class="notification-content"><span class="notification-message">${message}</span></div>
    `;

    document.body.appendChild(notification);

    // Auto remove after 3 seconds
    const hideTimeout = setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => notification.parentNode?.removeChild(notification), 300);
        }
    }, 3000);

    // Manual dismiss
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn?.addEventListener('click', () => {
        clearTimeout(hideTimeout);
        notification.classList.remove('show');
        setTimeout(() => notification.parentNode?.removeChild(notification), 300);
    });
}

// Payment Options UI and Integrations
function initPaymentOptions() {
    const cardTab = document.querySelector('.payment-tab[data-method="card"]');
    const paypalTab = document.querySelector('.payment-tab[data-method="paypal"]');
    const cardContent = document.getElementById('card-payment');
    const paypalContent = document.getElementById('paypal-payment');
    const stripeButton = document.getElementById('stripe-pay-button');

    if (cardTab && paypalTab && cardContent && paypalContent) {
        cardTab.addEventListener('click', () => {
            cardTab.classList.add('active');
            paypalTab.classList.remove('active');
            cardContent.style.display = 'block';
            paypalContent.style.display = 'none';
        });

        paypalTab.addEventListener('click', () => {
            paypalTab.classList.add('active');
            cardTab.classList.remove('active');
            paypalContent.style.display = 'block';
            cardContent.style.display = 'none';
        });
    }

    if (stripeButton) {
        stripeButton.addEventListener('click', () => {
            const totalText = document.getElementById('checkout-total')?.textContent || '$0.00';
            const amount = (typeof ecommerceApp !== 'undefined' && ecommerceApp)
                ? ecommerceApp.parsePrice(totalText)
                : parseFloat((totalText || '').toString().replace(/[^\d.]/g, '')) || 0;

            if (window.STRIPE_CHECKOUT_URL) {
                // Redirect to configured Stripe Checkout Payment Link (hosted, secure)
                window.location.href = window.STRIPE_CHECKOUT_URL;
            } else {
                alert('Card payments are not configured yet. Please set STRIPE_CHECKOUT_URL to your Stripe Checkout link.');
            }
        });
    }
}

function initPayPalButtons() {
    const container = document.getElementById('paypal-buttons');
    if (!container) return;
    if (container.dataset.rendered === 'true') return;
    if (typeof paypal === 'undefined') return;

    try {
        paypal.Buttons({
            style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'paypal' },
            createOrder: (data, actions) => {
                const totalText = document.getElementById('payment-total')?.textContent
                    || document.getElementById('checkout-total')?.textContent
                    || '$0.00';
                const amount = (typeof ecommerceApp !== 'undefined' && ecommerceApp)
                    ? ecommerceApp.parsePrice(totalText)
                    : parseFloat((totalText || '').toString().replace(/[^\d.]/g, '')) || 0;

                return actions.order.create({
                    purchase_units: [{ amount: { currency_code: 'AUD', value: amount.toFixed(2) } }]
                });
            },
            onApprove: async (data, actions) => {
                try {
                    const details = await actions.order.capture();
                    if (typeof ecommerceApp !== 'undefined' && ecommerceApp) {
                        ecommerceApp.clearCart();
                    }
                    alert('Payment successful. Thank you!');
                } catch (err) {
                    console.error('PayPal capture error:', err);
                    alert('Payment could not be completed. Please try again.');
                }
            },
            onError: (err) => {
                console.error('PayPal error:', err);
                alert('An error occurred with PayPal. Please try again.');
            }
        }).render('#paypal-buttons');

        container.dataset.rendered = 'true';
    } catch (e) {
        console.error('Failed to initialize PayPal buttons:', e);
    }
}

let ecommerceApp;
let productFilter;
document.addEventListener('DOMContentLoaded', () => {
    ecommerceApp = new EcommerceApp();
    window.ecommerceApp = ecommerceApp; // Make it globally accessible
    productFilter = new ProductFilter();
    productFilter.init();
    
    // Initialize search functionality
    initSearchFunctionality();
    
    // Initialize collections carousel
    initCollectionsCarousel();
    
    // Initialize FAQ functionality
    initFAQ();
    
    // Initialize save sizes functionality
    initSaveSizesFunctionality();

    // Initialize payment options
    initPaymentOptions();
    initPayPalButtons();
});