import projectsData from './projects.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle-btn');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            let newTheme = theme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // 2. Experience Counter
    const updateExperienceCounter = () => {
        const necStart = new Date('2025-02-01');
        const annarStart = new Date('2026-09-23');
        const now = new Date();
        
        // 2a. Total months from NEC start
        let totalMonthsFromNEC = (now.getFullYear() - necStart.getFullYear()) * 12;
        totalMonthsFromNEC += now.getMonth() - necStart.getMonth();
        if (now.getDate() < necStart.getDate()) {
            totalMonthsFromNEC -= 1;
        }

        const statEl = document.getElementById('experience-stat');
        if (statEl) {
            statEl.textContent = `${totalMonthsFromNEC} Meses`;
        }

        // 2b. Days & Months counter for Annar Health Technologies
        const calcAnnarTime = () => {
            const timeDiff = now.getTime() - annarStart.getTime();
            if (timeDiff <= 0) {
                return 'Recién ingresado';
            }
            const diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
            
            let months = (now.getFullYear() - annarStart.getFullYear()) * 12 + (now.getMonth() - annarStart.getMonth());
            let dayAnchor = new Date(annarStart);
            dayAnchor.setMonth(dayAnchor.getMonth() + months);
            
            if (dayAnchor > now) {
                months--;
                dayAnchor = new Date(annarStart);
                dayAnchor.setMonth(dayAnchor.getMonth() + months);
            }
            
            const days = Math.floor((now - dayAnchor) / (1000 * 3600 * 24));
            
            let result = '';
            if (months > 0) {
                result += `${months} mes${months > 1 ? 'es' : ''} `;
            }
            result += `${days} día${days !== 1 ? 's' : ''}`;
            return result.trim();
        };

        const annarCounter = document.getElementById('annar-timer');
        if (annarCounter) {
            annarCounter.textContent = calcAnnarTime();
        }
    };
    updateExperienceCounter();

    // 3. Projects Loading
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projectsData.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <div class="project-body">
                    <div class="project-tags">
                        ${project.tecnologias.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <h3>${project.titulo}</h3>
                    <p>${project.descripcion}</p>
                    <div class="project-links">
                        <a href="${project.demo}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> Demo</a>
                        <a href="${project.github}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a>
                    </div>
                </div>
            `;
            projectsContainer.appendChild(card);
        });
    }

    // 4. Scroll Revel & Progress & Active Nav
    const reveal = () => {
        const reveals = document.querySelectorAll('.section');
        const scrollProgress = document.querySelector('.scroll-progress');
        const navLinks = document.querySelectorAll('.mobile-nav a');
        
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (scrollProgress) scrollProgress.style.width = scrolled + "%";

        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const sectionId = el.getAttribute('id');

            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
            
            if (elementTop < windowHeight / 2 && elementTop + el.offsetHeight > windowHeight / 2) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    window.addEventListener('scroll', reveal);
    reveal();

    // 5. Footer Year
    document.querySelectorAll('.footer-year').forEach(el => el.textContent = new Date().getFullYear());

    // 6. CV Download
    const downloadBtn = document.getElementById('download-cv');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            window.print();
        });
    }
});
