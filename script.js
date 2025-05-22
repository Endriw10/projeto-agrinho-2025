document.addEventListener('DOMContentLoaded', function() {
    // Exemplo: Rolagem suave para as seções ao clicar nos links do menu
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Exemplo: Botão "Saiba Mais" na seção Hero
    const saibaMaisBtn = document.getElementById('saibaMaisBtn');
    if (saibaMaisBtn) {
        saibaMaisBtn.addEventListener('click', function() {
            // Rola para a primeira seção de conteúdo, por exemplo, "O Campo"
            document.querySelector('#campo').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Exemplo: Animação simples ao rolar (opcional)
    const sections = document.querySelectorAll('.conteudo-secao');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            } else {
                // Opcional: Se quiser que a animação reverta ao sair da tela
                // entry.target.style.opacity = 0;
                // entry.target.style.transform = 'translateY(20px)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = 0; // Começa invisível
        section.style.transform = 'translateY(20px)'; // Posição inicial para animação
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
});
