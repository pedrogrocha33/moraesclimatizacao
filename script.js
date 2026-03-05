// ===================================
// MORAES AR CONDICIONADO - SCRIPT.JS
// Funcionalidades básicas e interações
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle para Mobile
    const menuToggle = document.getElementById('menuToggle');
    const headerNav = document.getElementById('headerNav');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            headerNav.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        headerNav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                headerNav.classList.remove('active');
            });
        });
    }

    // Smooth scroll para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Adicionar classe de animação ao scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar cards de serviços
    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });

    // Observar cards de depoimentos
    document.querySelectorAll('.testimonial-card').forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });

    // Observar seção sobre
    const sobreText = document.querySelector('.sobre-text');
    if (sobreText) {
        sobreText.style.opacity = '0';
        observer.observe(sobreText);
    }

    // Log de inicialização
    console.log('Moraes Ar Condicionado - Landing Page Carregada');
});

// Função para rastrear cliques em CTAs (opcional para analytics)
function trackCTAClick(ctaName) {
    console.log('CTA Clicado:', ctaName);
    // Aqui você pode adicionar código de rastreamento com Google Analytics, Mixpanel, etc.
}

// Adicionar event listeners aos botões
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-cta');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackCTAClick('WhatsApp CTA');
        });
    });
});
