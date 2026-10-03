const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('#main-nav');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});
// Keep publication bookmarks useful when their lists start collapsed.
if (document.querySelector('.publication-section')) {
    const revealPublicationTarget = (hash, scroll = false) => {
        let id;
        try {
            id = decodeURIComponent(hash.slice(1));
        } catch {
            return;
        }
        const target = document.getElementById(id);
        const section = target?.closest('details.publication-section');
        if (!section) return;

        section.open = true;
        if (scroll) target.scrollIntoView({ block: 'start' });
    };

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            if (event.button === 0 && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) {
                revealPublicationTarget(link.hash);
            }
        });
    });

    window.addEventListener('hashchange', () => revealPublicationTarget(window.location.hash, true));
    revealPublicationTarget(window.location.hash, true);
}
