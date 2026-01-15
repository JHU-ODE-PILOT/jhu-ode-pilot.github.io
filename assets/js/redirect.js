function handleLink() {
    document.querySelectorAll('a').forEach(link => {
        if (link.closest('.topnav')) return;

        const href = link.getAttribute('href');
        if (href?.toLowerCase().endsWith('.pdf')) {
            link.setAttribute('target', '_blank');
        } else if (!href?.toLowerCase().startsWith("https://james-guo-03.github.io/")){
            link.setAttribute('target', '_blank');
        } else if (href && href.toLowerCase().startsWith('https://')) {
          link.setAttribute('target', '_blank');
        }
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    setTimeout(handleLink, 10);
});