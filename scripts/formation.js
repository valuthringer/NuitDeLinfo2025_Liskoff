document.addEventListener('DOMContentLoaded', () => {
    const chapters = document.querySelectorAll('.chapter');
    const navLinks = document.querySelectorAll('.chapter-link');
    const progressBar = document.querySelector('.progress-bar-fill');
    const progressText = document.querySelector('.progress-text');
    const completeButtons = document.querySelectorAll('.btn-complete');

    let completedChapters = new Set();
    const totalChapters = chapters.length;

    // --- Scroll Spy for Active Link ---
    window.addEventListener('scroll', () => {
        let current = '';

        chapters.forEach(chapter => {
            const sectionTop = chapter.offsetTop;
            const sectionHeight = chapter.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = chapter.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // --- Completion Logic ---
    completeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const chapterId = e.target.getAttribute('data-chapter');

            if (!completedChapters.has(chapterId)) {
                completedChapters.add(chapterId);
                e.target.classList.add('completed');
                e.target.textContent = 'Chapitre Terminé ✓';
                updateProgress();
            }
        });
    });

    function updateProgress() {
        const percent = Math.round((completedChapters.size / totalChapters) * 100);
        progressBar.style.width = `${percent}%`;
        progressText.textContent = `${percent}%`;

        if (percent === 100) {
            confettiEffect();
        }
    }

    // --- Simple Confetti Effect ---
    function confettiEffect() {
        const colors = ['#2E7D32', '#81C784', '#FFD54F', '#ffffff'];

        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.zIndex = '9999';
            confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;

            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }

    // Add simple CSS for confetti fall
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
