const continueBtn = document.getElementById('continueBtn');
continueBtn.addEventListener('click', () => {
    showLoader("Decrypting Memories...");

    setTimeout(() => {
        window.location.href = '../welcome/index.html';
    }, 1500);
    // console.log('Continue clicked');
});
