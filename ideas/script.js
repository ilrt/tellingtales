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
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
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
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
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
    const mockupImages = document.querySelectorAll('.mockup-image');
    
    // Create enhanced modal HTML
    const modalHTML = `
        <div class="modal fade" id="imageModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="imageModalLabel">Design Mockup</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center p-0">
                        <img id="modalImage" src="" alt="" class="img-fluid w-100" style="max-height: 80vh; object-fit: contain;">
                    </div>
                    <div class="modal-footer">
                        <p id="modalDescription" class="text-muted me-auto mb-0"></p>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onclick="downloadImage()">
                            <i class="fas fa-download me-2"></i>Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page if it doesn't exist
    if (!document.getElementById('imageModal')) {
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    
    // Add click handlers to mockup images
    mockupImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.classList.add('mockup-clickable');
        
        img.addEventListener('click', function() {
            const modal = new bootstrap.Modal(document.getElementById('imageModal'));
            const modalImage = document.getElementById('modalImage');
            const modalTitle = document.getElementById('imageModalLabel');
            const modalDescription = document.getElementById('modalDescription');
            
            modalImage.src = this.src;
            modalImage.alt = this.alt;
            modalTitle.textContent = this.alt;
            
            // Store current image for download
            window.currentModalImage = this.src;
            
            // Get description from card text
            const cardText = this.closest('.card').querySelector('.card-text');
            modalDescription.textContent = cardText ? cardText.textContent.trim() : '';
            
            modal.show();
        });
        
        // Add hover effect
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
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

// Error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
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

