
const burger    = document.querySelector('.burger');
const navLinks  = document.querySelector('.nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // Fermer en cliquant sur un lien
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });
}

/* ================================
   FILTRES PROJETS
   ================================ */
document.querySelectorAll('.filters .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Active button
        btn.closest('.filters').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        document.querySelectorAll('.project-card').forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

/* ================================
   FILTRES ARTICLES
   ================================ */
document.querySelectorAll('.article-filters .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.article-filters').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.category;

        document.querySelectorAll('.article-card').forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});
