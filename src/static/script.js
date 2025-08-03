// Project data
const projectsData = {
    project1: {
        title: "Detecção de Fissuras com YOLO",
        description: "Sistema avançado de visão computacional para detecção automática de fissuras em estruturas utilizando YOLOv11.",
        fullDescription: `
            <p>Este projeto implementa um sistema completo de detecção de fissuras em imagens utilizando a arquitetura YOLOv11, uma das mais avançadas redes neurais para detecção de objetos em tempo real.</p>
            
            <h5>Características Principais:</h5>
            <ul>
                <li><strong>Modelo YOLOv11:</strong> Treinamento customizado para identificar diferentes tipos de fissuras</li>
                <li><strong>Aplicação Web:</strong> Interface desenvolvida em Flask para análise em tempo real</li>
                <li><strong>Deploy na Nuvem:</strong> Aplicação hospedada no Railway para acesso remoto</li>
                <li><strong>Processamento em Tempo Real:</strong> Análise instantânea de imagens carregadas</li>
            </ul>
            
            <h5>Tecnologias Utilizadas:</h5>
            <div class="tech-stack">
                <span class="tech-item">YOLOv11</span>
                <span class="tech-item">Python</span>
                <span class="tech-item">Flask</span>
                <span class="tech-item">OpenCV</span>
                <span class="tech-item">PyTorch</span>
                <span class="tech-item">Railway</span>
            </div>
            
            <h5>Impacto:</h5>
            <p>O sistema permite a identificação precoce de problemas estruturais, contribuindo para a manutenção preventiva e segurança de edificações.</p>
        `,
        technologies: ["YOLOv11", "Computer Vision", "Flask", "PyTorch", "OpenCV"],
        category: "ai"
    },
    project2: {
        title: "SmartWeather IoT",
        description: "Sistema IoT completo para monitoramento climático com ESP32 e dashboards interativos.",
        fullDescription: `
            <p>Desenvolvimento de um sistema IoT completo para coleta e análise de dados climáticos utilizando ESP32 e integração com APIs externas.</p>
            
            <h5>Características Principais:</h5>
            <ul>
                <li><strong>Sensores Integrados:</strong> Coleta de temperatura, umidade e pressão atmosférica</li>
                <li><strong>Conectividade IoT:</strong> Transmissão de dados via WiFi para a nuvem</li>
                <li><strong>APIs Externas:</strong> Integração com Interscity e OpenWeather</li>
                <li><strong>Dashboard Interativo:</strong> Visualização em tempo real com Streamlit</li>
            </ul>
            
            <h5>Tecnologias Utilizadas:</h5>
            <div class="tech-stack">
                <span class="tech-item">ESP32</span>
                <span class="tech-item">Arduino IDE</span>
                <span class="tech-item">Python</span>
                <span class="tech-item">Streamlit</span>
                <span class="tech-item">APIs REST</span>
                <span class="tech-item">WiFi</span>
            </div>
            
            <h5>Funcionalidades:</h5>
            <p>Monitoramento contínuo de condições climáticas, alertas automáticos e análise histórica de dados meteorológicos.</p>
        `,
        technologies: ["ESP32", "IoT", "Streamlit", "APIs", "Python"],
        category: "iot"
    },
    project3: {
        title: "Análise de Evasão Escolar",
        description: "Modelo preditivo para identificar fatores de evasão escolar usando Machine Learning.",
        fullDescription: `
            <p>Projeto de análise de dados educacionais para identificar padrões e fatores que contribuem para a evasão escolar, utilizando técnicas avançadas de Machine Learning.</p>
            
            <h5>Metodologia:</h5>
            <ul>
                <li><strong>Coleta de Dados:</strong> Aquisição de dados educacionais de múltiplas fontes</li>
                <li><strong>Pré-processamento:</strong> Limpeza, normalização e anonimização dos dados</li>
                <li><strong>Análise Estatística:</strong> Aplicação de técnicas não paramétricas</li>
                <li><strong>Modelagem Preditiva:</strong> Desenvolvimento de modelos de Machine Learning</li>
            </ul>
            
            <h5>Tecnologias Utilizadas:</h5>
            <div class="tech-stack">
                <span class="tech-item">Python</span>
                <span class="tech-item">Pandas</span>
                <span class="tech-item">Scikit-learn</span>
                <span class="tech-item">Streamlit</span>
                <span class="tech-item">Matplotlib</span>
                <span class="tech-item">Seaborn</span>
            </div>
            
            <h5>Resultados:</h5>
            <p>Interface web interativa que permite aos gestores educacionais identificar estudantes em risco e implementar intervenções preventivas.</p>
        `,
        technologies: ["Machine Learning", "Data Analysis", "Python", "Streamlit"],
        category: "data"
    },
    project4: {
        title: "Gestão Condominial",
        description: "Aplicação web completa para gestão de condomínios com Flask e JavaScript.",
        fullDescription: `
            <p>Sistema web completo para gestão condominial, oferecendo funcionalidades abrangentes para administração de condomínios residenciais.</p>
            
            <h5>Funcionalidades Principais:</h5>
            <ul>
                <li><strong>Gestão de Moradores:</strong> Cadastro e controle de residentes</li>
                <li><strong>Controle Financeiro:</strong> Gestão de taxas e despesas condominiais</li>
                <li><strong>Reservas:</strong> Sistema de agendamento de áreas comuns</li>
                <li><strong>Comunicação:</strong> Portal de avisos e comunicados</li>
            </ul>
            
            <h5>Tecnologias Utilizadas:</h5>
            <div class="tech-stack">
                <span class="tech-item">Flask</span>
                <span class="tech-item">JavaScript</span>
                <span class="tech-item">Bootstrap</span>
                <span class="tech-item">SQLite</span>
                <span class="tech-item">HTML5</span>
                <span class="tech-item">CSS3</span>
            </div>
            
            <h5>Arquitetura:</h5>
            <p>Backend robusto em Flask com frontend responsivo, garantindo uma experiência de usuário otimizada em diferentes dispositivos.</p>
        `,
        technologies: ["Flask", "JavaScript", "Bootstrap", "SQLite"],
        category: "web"
    },
    project5: {
        title: "Dataset Termolatência Asfáltica",
        description: "Construção de dataset para análise térmica de asfaltos com técnicas de Data Augmentation.",
        fullDescription: `
            <p>Projeto de construção de dataset especializado para análise térmica de materiais asfálticos, aplicando técnicas avançadas de Data Augmentation.</p>
            
            <h5>Objetivos:</h5>
            <ul>
                <li><strong>Coleta de Dados:</strong> Aquisição de dados térmicos de diferentes tipos de asfalto</li>
                <li><strong>Data Augmentation:</strong> Técnicas para aumentar a robustez do dataset</li>
                <li><strong>Análise Térmica:</strong> Estudo do comportamento térmico dos materiais</li>
                <li><strong>Validação:</strong> Testes de qualidade e consistência dos dados</li>
            </ul>
            
            <h5>Tecnologias Utilizadas:</h5>
            <div class="tech-stack">
                <span class="tech-item">Python</span>
                <span class="tech-item">NumPy</span>
                <span class="tech-item">Pandas</span>
                <span class="tech-item">OpenCV</span>
                <span class="tech-item">Matplotlib</span>
                <span class="tech-item">Data Augmentation</span>
            </div>
            
            <h5>Aplicações:</h5>
            <p>O dataset desenvolvido serve como base para pesquisas em engenharia civil e desenvolvimento de novos materiais asfálticos mais eficientes.</p>
        `,
        technologies: ["Data Science", "Data Augmentation", "Python", "OpenCV"],
        category: "data"
    },
    project6: {
        title: "BD Clínica Médica",
        description: "Sistema completo de banco de dados para clínica médica com PostgreSQL.",
        fullDescription: `
            <p>Desenvolvimento de um sistema completo de banco de dados para gestão de clínica médica, incluindo modelagem conceitual, lógica e física.</p>
            
            <h5>Componentes do Sistema:</h5>
            <ul>
                <li><strong>Modelo Conceitual:</strong> Definição de entidades e relacionamentos</li>
                <li><strong>Modelo Lógico:</strong> Estruturação das tabelas e constraints</li>
                <li><strong>Modelo Físico:</strong> Implementação em PostgreSQL</li>
                <li><strong>Triggers e Funções:</strong> Automatização de processos</li>
            </ul>
            
            <h5>Tecnologias Utilizadas:</h5>
            <div class="tech-stack">
                <span class="tech-item">PostgreSQL</span>
                <span class="tech-item">SQL</span>
                <span class="tech-item">PL/pgSQL</span>
                <span class="tech-item">Database Design</span>
                <span class="tech-item">Triggers</span>
                <span class="tech-item">Functions</span>
            </div>
            
            <h5>Funcionalidades:</h5>
            <p>Gestão completa de pacientes, consultas, médicos, procedimentos e histórico médico com integridade referencial e segurança de dados.</p>
        `,
        technologies: ["PostgreSQL", "Database Design", "SQL", "PL/pgSQL"],
        category: "database"
    }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

// Initialize portfolio functionality
function initializePortfolio() {
    initSmoothScrolling();
    initScrollAnimations();
    initNavbarScroll();
    initContactForm();
    initParticleAnimation();
    initTechIconsAnimation();
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
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

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    document.querySelectorAll('.project-card').forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });

    document.querySelectorAll('.cert-category').forEach((el, index) => {
        el.classList.add('slide-in-left');
        el.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(el);
    });

    document.querySelectorAll('.skill-category').forEach((el, index) => {
        el.classList.add('slide-in-right');
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });
}

// Contact form handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactSubmission();
        });
    }
}

function handleContactSubmission() {
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Simulate form submission
    const submitBtn = document.querySelector('#contactForm button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;

    setTimeout(() => {
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Show success message
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Mensagem Enviada!';
        submitBtn.classList.remove('btn-primary');
        submitBtn.classList.add('btn-success');
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.classList.remove('btn-success');
            submitBtn.classList.add('btn-primary');
            submitBtn.disabled = false;
        }, 3000);
        
        // In a real application, you would send this data to your backend
        console.log('Form submitted:', formData);
    }, 2000);
}

// Particle animation enhancement
function initParticleAnimation() {
    const particles = document.querySelector('.particles');
    if (particles) {
        // Add mouse interaction
        document.addEventListener('mousemove', function(e) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            particles.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        });
    }
}

// Tech icons animation
function initTechIconsAnimation() {
    const techIcons = document.querySelectorAll('.tech-icon');
    
    techIcons.forEach((icon, index) => {
        icon.addEventListener('mouseenter', function() {
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        // Add tooltip
        const tech = icon.getAttribute('data-tech');
        if (tech) {
            icon.setAttribute('title', tech);
        }
    });
}

// Project modal functionality
function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = project.title;
    modalBody.innerHTML = project.fullDescription;

    // Show modal using Bootstrap
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
}

// Typing animation for hero section
function initTypingAnimation() {
    const texts = [
        'Cybersegurança',
        'Inteligência Artificial',
        'Análise de Dados'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;
    
    const highlightElements = document.querySelectorAll('.hero-subtitle .highlight');
    
    function typeText() {
        if (!highlightElements.length) return;
        
        const currentText = texts[textIndex];
        const currentElement = highlightElements[textIndex % highlightElements.length];
        
        if (isDeleting) {
            currentElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            currentElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let speed = isDeleting ? deletingSpeed : typingSpeed;
        
        if (!isDeleting && charIndex === currentText.length) {
            speed = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
        
        setTimeout(typeText, speed);
    }
    
    // Start typing animation after a delay
    setTimeout(typeText, 1000);
}

// Project filtering (if needed in the future)
function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
            card.classList.add('fade-in');
        } else {
            card.style.display = 'none';
        }
    });
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
function addScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.onclick = scrollToTop;
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', function() {
    addScrollToTopButton();
});

// Add CSS for scroll to top button
const scrollToTopCSS = `
.scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(45deg, #00d4ff, #7b2cbf);
    border: none;
    border-radius: 50%;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
}

.scroll-to-top.visible {
    opacity: 1;
    visibility: visible;
}

.scroll-to-top:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 212, 255, 0.4);
}

.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;

// Add the CSS to the document
const style = document.createElement('style');
style.textContent = scrollToTopCSS;
document.head.appendChild(style);

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

// Apply debounce to scroll events
const debouncedScrollHandler = debounce(function() {
    // Handle scroll events here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

