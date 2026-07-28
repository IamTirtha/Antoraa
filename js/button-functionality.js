function navigateWithLoader(message, targetUrl) {
    const hasLoader = typeof showLoader === 'function'
        && document.getElementById('pageLoader')
        && document.getElementById('loaderText');

    if (hasLoader) {
        showLoader(message);
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 1500);
        return;
    }
    window.location.href = targetUrl;
}

document.querySelectorAll('[data-next]').forEach((btn) => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.next;
        const message = btn.dataset.message || "Decrypting Memories...";
        navigateWithLoader(message, target);
    });
});