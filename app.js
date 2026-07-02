// Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        function toggleMenu() {
            document.getElementById('mobileMenu').classList.toggle('active');
            document.getElementById('overlay').classList.toggle('active');
            document.body.style.overflow = document.getElementById('mobileMenu').classList.contains('active') ? 'hidden' : '';
        }

        // Scroll reveal animation
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => revealObserver.observe(el));

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Dynamic open/close status based on time
        function updateStatus() {
            const now = new Date();
            const hour = now.getHours();
            const statusBadges = document.querySelectorAll('.status-badge');
            
            // Assuming open from 8 AM to 6:30 PM
            const isOpen = hour >= 8 && hour < 18 || (hour === 18 && now.getMinutes() <= 30);
            
            statusBadges.forEach(badge => {
                if (isOpen) {
                    badge.innerHTML = '<span style="width:8px;height:8px;background:#4ADE80;border-radius:50%;display:inline-block;animation:pulse-dot 2s infinite;"></span> Currently Open';
                    badge.style.background = 'rgba(34,197,94,0.15)';
                    badge.style.color = '#4ADE80';
                } else {
                    badge.innerHTML = '<span style="width:8px;height:8px;background:#EF4444;border-radius:50%;display:inline-block;"></span> Currently Closed';
                    badge.style.background = 'rgba(239,68,68,0.15)';
                    badge.style.color = '#EF4444';
                }
            });
        }
        updateStatus();
        setInterval(updateStatus, 60000); // Update every minute
