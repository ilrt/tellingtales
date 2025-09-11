// Caribbean Storytelling Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initSmoothScrolling();
    initScrollAnimations();
    initNavbarHighlight();
    initImageLazyLoading();
    initTooltips();
    initModalGallery();
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    // Get all anchor links that start with #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just a hash (#) or empty
            if (targetId === '#' || targetId === '') {
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Calculate position accounting for fixed navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight || 80;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                // Smooth scroll
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile navbar if open
                const navbarToggle = document.querySelector('.navbar-collapse');
                if (navbarToggle && navbarToggle.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarToggle) || new bootstrap.Collapse(navbarToggle);
                    bsCollapse.hide();
                }
            }
        });
    });
    
    // Fallback: make sure buttons work with basic functionality
    document.querySelectorAll('.hero-section .btn').forEach(btn => {
        btn.style.cursor = 'pointer';
        btn.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe cards and sections
    const animatedElements = document.querySelectorAll('.card, .timeline-item, .feature-icon');
    animatedElements.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });
}

// Navbar active link highlighting
function initNavbarHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    function updateActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Initial call
}

// Lazy loading for images
function initImageLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize Bootstrap tooltips
function initTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// Modal gallery for mockup images
function initModalGallery() {
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('imageModalLabel');
    const modalDescription = document.getElementById('modalDescription');
    
    document.querySelectorAll('.mockup-image').forEach(img => {
        img.addEventListener('click', function() {
            // Set new image/text directly without clearing first
            modalImage.src = this.src;
            modalImage.alt = this.alt;
            modalTitle.textContent = this.alt;
            window.currentModalImage = this.src;
            const cardText = this.closest('.card').querySelector('.card-text');
            modalDescription.textContent = cardText ? cardText.textContent.trim() : '';
        });
    });
    
    // Only clear image when modal is completely hidden
    imageModal.addEventListener('hidden.bs.modal', function () {
        modalImage.src = '';
        modalImage.alt = '';
        modalTitle.textContent = '';
        modalDescription.textContent = '';
    });
}

// Download image function
function downloadImage() {
    if (window.currentModalImage) {
        const link = document.createElement('a');
        link.href = window.currentModalImage;
        link.download = window.currentModalImage.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Utility function to animate numbers
function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// Add loading states for better UX
function showLoading(element) {
    element.innerHTML = '<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Loading...</span></div>';
}

function hideLoading(element, content) {
    element.innerHTML = content;
}

// Error handling for images - exclude modal image to prevent constant errors
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG' && e.target.id !== 'modalImage') {
        e.target.style.display = 'none';
        console.warn('Image failed to load:', e.target.src);
    }
}, true);

// Performance optimization: Debounce scroll events
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

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key closes modals
    if (e.key === 'Escape') {
        const openModal = document.querySelector('.modal.show');
        if (openModal) {
            const modal = bootstrap.Modal.getInstance(openModal);
            if (modal) modal.hide();
        }
    }
    
    // Arrow keys for navigation
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const sections = Array.from(document.querySelectorAll('section[id]'));
        const currentSection = sections.find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom > 100;
        });
        
        if (currentSection) {
            const currentIndex = sections.indexOf(currentSection);
            let targetIndex;
            
            if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
                targetIndex = currentIndex + 1;
            } else if (e.key === 'ArrowUp' && currentIndex > 0) {
                targetIndex = currentIndex - 1;
            }
            
            if (targetIndex !== undefined) {
                e.preventDefault();
                sections[targetIndex].scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
});

// Add print functionality
function printPage() {
    window.print();
}

// Export functionality for sharing
function shareAnalysis() {
    if (navigator.share) {
        navigator.share({
            title: 'Caribbean Storytelling Platform Analysis',
            text: 'Comprehensive analysis and recommendations for Caribbean folklore preservation',
            url: window.location.href
        });
    } else {
        // Fallback: copy URL to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('URL copied to clipboard!');
        });
    }
}

// Add these functions to window for global access
window.printPage = printPage;
window.shareAnalysis = shareAnalysis;

// Add custom CSS for fullscreen modal
(function addFullscreenModalCSS() {
    const style = document.createElement('style');
    style.innerHTML = `
        .fullscreen-modal .modal-dialog {
            width: 100vw;
            max-width: 100vw;
            height: 100vh;
            margin: 0;
        }
        .fullscreen-modal .modal-content {
            background: rgba(0,0,0,0.95);
            border-radius: 0;
            min-height: 100vh;
            box-shadow: none;
        }
        .fullscreen-modal .modal-header, .fullscreen-modal .modal-footer {
            background: transparent;
        }
        .fullscreen-modal .btn-close {
            filter: invert(1);
        }
    `;
    document.head.appendChild(style);
})();

