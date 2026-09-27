import projectsData from './projects.js';

document.addEventListener('DOMContentLoaded', async () => {
    // 0. Global CV Data state
    let cvDataCache = null;

    // Load cv_data.json and render dynamic content
    try {
        const response = await fetch('./cv_data.json');
        cvDataCache = await response.json();
        renderFromJSON(cvDataCache);
    } catch (err) {
        console.warn('Using existing static DOM content fallback:', err);
    }

    function renderFromJSON(data) {
        if (!data) return;
        
        // Render Profile Info
        const nameEl = document.querySelector('.profile-fullname');
        if (nameEl) {
            nameEl.innerHTML = `${data.personal.name} <i class="fas fa-circle-check verified-badge" title="Perfil Verificado"></i>`;
        }
        const roleEl = document.querySelector('.profile-handle');
        if (roleEl) roleEl.textContent = data.personal.role;

        // Render Summary Bio
        const bioEl = document.querySelector('.profile-bio');
        if (bioEl && data.summary) {
            bioEl.innerHTML = `
                <i data-lucide="briefcase" class="red-icon"></i> Gestor de Aplicaciones en <strong>Annar Health Technologies</strong><br>
                <i data-lucide="graduation-cap" class="red-icon"></i> Tecnólogo en ADSO (SENA) & Diplomado en U. de Caldas<br>
                <i data-lucide="code-2" class="red-icon"></i> Especialista en JavaScript/TypeScript, Python, C# & IA
            `;
        }

        if (window.lucide) window.lucide.createIcons();
    }

    // 1. Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle-btn');
    const currentTheme = localStorage.getItem('theme') || 'dark';

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

    // 4. Animated Number Counters on Scroll
    let animatedCounters = false;
    const animateCounters = () => {
        if (animatedCounters) return;
        const metricsStrip = document.querySelector('.landing-metrics-strip');
        if (!metricsStrip) return;
        
        const top = metricsStrip.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            animatedCounters = true;
            
            // Experience counter target value
            const necStart = new Date('2025-02-01');
            const now = new Date();
            let totalMonths = (now.getFullYear() - necStart.getFullYear()) * 12 + (now.getMonth() - necStart.getMonth());
            if (now.getDate() < necStart.getDate()) totalMonths--;

            document.querySelectorAll('.metric-num').forEach(el => {
                const isExp = el.getAttribute('data-count-type') === 'experience';
                const target = isExp ? totalMonths : parseInt(el.getAttribute('data-count-to') || '0', 10);
                const suffix = isExp ? ' Meses' : (el.getAttribute('data-suffix') || '');
                
                let current = 0;
                const duration = 1500; // ms
                const stepTime = 25;
                const steps = duration / stepTime;
                const increment = target / steps;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = Math.floor(current) + suffix;
                }, stepTime);
            });
        }
    };

    // 5. Scroll Reveal & Progress & Active Dock Nav
    const reveal = () => {
        const sections = document.querySelectorAll('header, section, .reveal-left, .reveal-right, .reveal-up, .reveal-scale');
        const scrollProgress = document.querySelector('.scroll-progress');
        const navLinks = document.querySelectorAll('.pill-nav .nav-link');
        
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (scrollProgress) scrollProgress.style.width = scrolled + "%";

        sections.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const sectionId = el.getAttribute('id');

            if (elementTop < windowHeight - 80) {
                el.classList.add('active');
            }
            
            if (sectionId && elementTop < windowHeight / 2 && elementTop + el.offsetHeight > windowHeight / 2) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });

        animateCounters();
    };
    window.addEventListener('scroll', reveal);
    reveal();

    // 5. Footer Year
    document.querySelectorAll('.footer-year').forEach(el => el.textContent = new Date().getFullYear());

    // 6. Interactive CV Live Generator with Typewriter Effect
    const downloadBtn = document.getElementById('download-cv');
    const overlay = document.getElementById('cv-generator-overlay');
    const closeBtn = document.getElementById('close-cv-overlay');
    const typingArea = document.getElementById('cv-typing-area');
    const statusTitle = document.getElementById('cv-status-title');
    const actionsBar = document.getElementById('cv-overlay-actions');
    const printBtn = document.getElementById('print-generated-cv');
    const downloadJsonBtn = document.getElementById('download-json-cv');

    const startCvGenerator = async () => {
        if (!overlay || !typingArea) return;
        
        // Show modal overlay
        overlay.classList.remove('hidden');
        typingArea.innerHTML = '';
        actionsBar.classList.add('hidden');
        statusTitle.textContent = 'Generando Hoja de Vida en tiempo real...';

        try {
            if (!cvDataCache) {
                const response = await fetch('./cv_data.json');
                cvDataCache = await response.json();
            }

            const cvData = cvDataCache;
            const textLines = [
                `==================================================\n`,
                `HOJA DE VIDA PROFESIONAL - ${cvData.personal.name.toUpperCase()}\n`,
                `==================================================\n\n`,
                `PERFIL PROFESIONAL:\n${cvData.personal.role} | ${cvData.personal.location}\n`,
                `Teléfono: ${cvData.personal.phone} | Email: ${cvData.personal.email}\n`,
                `LinkedIn: ${cvData.personal.linkedin} | GitHub: ${cvData.personal.github}\n\n`,
                `RESUMEN:\n${cvData.summary}\n\n`,
                `EXPERIENCIA LABORAL:\n`,
                ...cvData.experience.flatMap(exp => [
                    `• ${exp.role} - ${exp.company} (${exp.period})\n  ${exp.description}\n`,
                    ...exp.achievements.map(ach => `  - Logro: ${ach}\n`),
                    `\n`
                ]),
                `EDUCACIÓN:\n`,
                ...cvData.education.map(edu => `• ${edu.degree} - ${edu.institution} (${edu.year})\n`),
                `\nSKILLS:\n`,
                `• AI & Innovación: ${cvData.skills.innovation.join(', ')}\n`,
                `• Frontend: ${cvData.skills.frontend.join(', ')}\n`,
                `• Backend: ${cvData.skills.backend.join(', ')}\n`,
                `• Bases de Datos & DevOps: ${cvData.skills.database_devops.join(', ')}\n\n`,
                `==================================================\n`,
                `HOJA DE VIDA GENERADA EXITOSAMENTE.\n`,
                `==================================================`
            ];

            let lineIndex = 0;
            let charIndex = 0;

            const typeChar = () => {
                if (lineIndex < textLines.length) {
                    const currentLine = textLines[lineIndex];
                    if (charIndex < currentLine.length) {
                        typingArea.textContent += currentLine.charAt(charIndex);
                        charIndex++;
                        const container = document.querySelector('.cv-terminal-container');
                        if (container) container.scrollTop = container.scrollHeight;
                        setTimeout(typeChar, 8);
                    } else {
                        lineIndex++;
                        charIndex = 0;
                        setTimeout(typeChar, 45);
                    }
                } else {
                    statusTitle.textContent = 'Hoja de Vida lista para Descarga o Impresión';
                    actionsBar.classList.remove('hidden');
                }
            };

            typeChar();

        } catch (err) {
            console.error('Error cargando cv_data.json:', err);
            typingArea.textContent = 'Error al cargar los datos de la hoja de vida.';
            statusTitle.textContent = 'Error en la generación';
        }
    };

    if (downloadBtn) {
        downloadBtn.addEventListener('click', startCvGenerator);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (overlay) overlay.classList.add('hidden');
        });
    }

    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }

    if (downloadJsonBtn) {
        downloadJsonBtn.addEventListener('click', () => {
            if (!cvDataCache) return;
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cvDataCache, null, 2));
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", "Didier_Chavez_CV.json");
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
        });
    }

    // 7. Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
});
