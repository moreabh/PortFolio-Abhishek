// Smooth scrolling for navigation
        document.querySelectorAll('nav a').forEach(anchor => {
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

        // Active navigation highlighting
        function updateActiveNav() {
            const sections = document.querySelectorAll('section');
            const navItems = document.querySelectorAll('nav .nav-item');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 200;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === '#' + current) {
                    item.classList.add('active');
                }
            });
        }

        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.classList.remove('hidden');
                } else {
                    entry.target.classList.add('hidden');
                    entry.target.classList.remove('visible');
                }
            });
        }, observerOptions);

        // Observe animated elements - make sure they start visible
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            el.classList.add('hidden'); // Start hidden
            observer.observe(el);
        });

        // Contact form handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            const mailtoLink = `mailto:moreabhishek79529@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
            
            window.location.href = mailtoLink;
            
            // Reset form
            this.reset();
            
            // Show success feedback
            const submitBtn = document.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = '#4CAF50';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = 'var(--accent-color)';
            }, 3000);
        });

        // Initialize on page load
        window.addEventListener('load', function() {
            updateActiveNav();
        });

        // Update active nav on scroll
        window.addEventListener('scroll', function() {
            updateActiveNav();
        });

        // Add smooth hover effects for better UX
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) rotateX(5deg)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) rotateX(0)';
            });
        });

        // Add typing cursor effect (optional)
        function addTypingEffect() {
            const heroTitle = document.querySelector('.hero-title');
            const text = heroTitle.textContent;
            heroTitle.textContent = '';
            
            let i = 0;
            const typeWriter = setInterval(() => {
                if (i < text.length) {
                    heroTitle.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typeWriter);
                }
            }, 50);
        }

        // Initialize typing effect after page load
        setTimeout(addTypingEffect, 1500);
        
       