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

const continueBtn = document.getElementById('continueBtn');
if (continueBtn) {
    continueBtn.addEventListener('click', () => {
        navigateWithLoader("Decrypting Memories...", '../welcome/index.html');
    });
}

const startBtn = document.getElementById('startBtn');
if (startBtn) {
    startBtn.addEventListener('click', () => {
        navigateWithLoader("Decrypting Memories...", '../about/index.html');
    });
}

