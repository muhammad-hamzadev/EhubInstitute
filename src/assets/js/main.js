// E-Hub Institute Landing Page - Interactive Logic

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId) return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                // Adjust scroll position to account for sticky navbar
                const navbarHeight = navbar.offsetHeight || 80;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                if (window.innerWidth <= 768 && navLinks) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });

    // 3. What We Offer - Vertical Card Accordion Slide-Down Effect
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    // Open the first card by default for great UX
    if (accordionHeaders.length > 0) {
        const firstCard = accordionHeaders[0].closest('.accordion-card');
        if (firstCard) {
            firstCard.classList.add('active');
            const toggleText = firstCard.querySelector('.toggle-text');
            if (toggleText) toggleText.textContent = 'Hide Details';
        }
    }

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const card = header.closest('.accordion-card');
            const isOpen = card.classList.contains('active');
            
            // Optional: Close other cards if accordion single-open behavior is preferred
            document.querySelectorAll('.accordion-card').forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('active');
                    const otherToggleText = otherCard.querySelector('.toggle-text');
                    if (otherToggleText) otherToggleText.textContent = 'View Details';
                }
            });

            // Toggle current card
            if (isOpen) {
                card.classList.remove('active');
                const toggleText = card.querySelector('.toggle-text');
                if (toggleText) toggleText.textContent = 'View Details';
            } else {
                card.classList.add('active');
                const toggleText = card.querySelector('.toggle-text');
                if (toggleText) toggleText.textContent = 'Hide Details';
            }
        });
    });

    // 4. Events Gallery Mouse Drag Scroll
    const gallery = document.getElementById('life-gallery');
    if (gallery) {
        let isDown = false;
        let startX;
        let scrollLeft;

        gallery.addEventListener('mousedown', (e) => {
            isDown = true;
            gallery.style.cursor = 'grabbing';
            startX = e.pageX - gallery.offsetLeft;
            scrollLeft = gallery.scrollLeft;
        });

        gallery.addEventListener('mouseleave', () => {
            isDown = false;
            gallery.style.cursor = 'grab';
        });

        gallery.addEventListener('mouseup', () => {
            isDown = false;
            gallery.style.cursor = 'grab';
        });

        gallery.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - gallery.offsetLeft;
            const walk = (x - startX) * 2;
            gallery.scrollLeft = scrollLeft - walk;
        });
    }

    // 5. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            const isFlex = window.getComputedStyle(navLinks).display === 'flex';
            if (isFlex) {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = '#ffffff';
                navLinks.style.padding = '1.5rem';
                navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            }
        });
    }
});
