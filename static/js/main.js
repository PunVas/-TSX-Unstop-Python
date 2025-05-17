// Main JavaScript File (static/js/main.js)

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileToggle = document.createElement('div');
    mobileToggle.className = 'mobile-nav-toggle';
    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('header .container').appendChild(mobileToggle);
    
    mobileToggle.addEventListener('click', function() {
        const nav = document.querySelector('nav ul');
        if (nav.style.display === 'flex') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'flex';
        }
    });
    
    // Responsive Nav Styling
    window.addEventListener('resize', function() {
        const nav = document.querySelector('nav ul');
        if (window.innerWidth > 768) {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    });
    
    // Project Filtering (if on projects page)
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                const projects = document.querySelectorAll('.project-card');
                
                // For a real filtering system, you would add data attributes to project cards
                // and filter based on those. This is a placeholder for demonstration.
                if (filter === 'all') {
                    projects.forEach(project => project.style.display = 'flex');
                } else {
                    projects.forEach(project => {
                        // Here you would check if the project has the relevant tag/category
                        // For demo, we'll just show/hide randomly
                        const random = Math.random() > 0.5;
                        project.style.display = random ? 'flex' : 'none';
                    });
                }
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation on scroll
    const animateElements = document.querySelectorAll('.skill, .project-card, .timeline-item');
    
    function checkIfInView() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }
    
    // Add visible class for animation
    window.addEventListener('scroll', checkIfInView);
    checkIfInView(); // Check on initial load
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .skill, .project-card, .timeline-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .skill.visible, .project-card.visible, .timeline-item.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .project-card:nth-child(even) {
            transition-delay: 0.2s;
        }
        
        .skill:nth-child(1) { transition-delay: 0.1s; }
        .skill:nth-child(2) { transition-delay: 0.2s; }
        .skill:nth-child(3) { transition-delay: 0.3s; }
        .skill:nth-child(4) { transition-delay: 0.4s; }
        .skill:nth-child(5) { transition-delay: 0.5s; }
        .skill:nth-child(6) { transition-delay: 0.6s; }
        
        .timeline-item:nth-child(1) { transition-delay: 0.1s; }
        .timeline-item:nth-child(2) { transition-delay: 0.3s; }
        .timeline-item:nth-child(3) { transition-delay: 0.5s; }
        
        /* Mobile Nav Styling */
        @media (max-width: 768px) {
            header .container {
                position: relative;
            }
            
            .mobile-nav-toggle {
                display: block;
                position: absolute;
                right: 20px;
                top: 20px;
                font-size: 1.5rem;
                cursor: pointer;
                color: var(--primary-color);
            }
            
            nav ul {
                display: none;
                flex-direction: column;
                width: 100%;
                text-align: center;
            }
            
            nav ul li {
                margin: 10px 0;
            }
        }
        
        @media (min-width: 769px) {
            .mobile-nav-toggle {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
});

// Form validation for contact form
if (document.getElementById('contactForm')) {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        // Reset error states
        [name, email, message].forEach(field => {
            field.style.borderColor = '';
        });
        
        // Validate name
        if (name.value.trim() === '') {
            name.style.borderColor = 'var(--error-color)';
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            email.style.borderColor = 'var(--error-color)';
            isValid = false;
        }
        
        // Validate message
        if (message.value.trim() === '') {
            message.style.borderColor = 'var(--error-color)';
            isValid = false;
        }
        
        if (isValid) {
            // In a real application, you would send form data to a server
            // For demonstration, we'll just show a success message
            const formContainer = contactForm.parentElement;
            
            // Create success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
            `;
            
            // Apply styles
            successMessage.style.textAlign = 'center';
            successMessage.style.padding = '30px';
            successMessage.style.color = 'var(--success-color)';
            
            // Replace form with success message
            formContainer.innerHTML = '';
            formContainer.appendChild(successMessage);
        }
    });
}