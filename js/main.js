document.addEventListener('DOMContentLoaded', () => {
    const contentArea = document.getElementById('content');

    function loadContent(page) {
        fetch(`content/${page}.html`)
            .then(response => {
                if (!response.ok) throw new Error("Innholdet kunne ikke lastes");
                return response.text();
            })
            .then(html => {
                contentArea.innerHTML = html;
                window.scrollTo({ top: contentArea.offsetTop - 50, behavior: 'smooth' });
            })
            .catch(err => {
                contentArea.innerHTML = `<p class="text-danger">Feil ved lasting av innhold: ${err.message}</p>`;
            });
    }

    document.querySelectorAll('.load-content').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const page = link.dataset.content;
            if (page) {
                loadContent(page);
            }
        });
    });

    loadContent('hjem');
});
