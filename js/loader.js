const loader = document.getElementById("pageLoader");
const loaderText = document.getElementById("loaderText");

function showLoader(message = "Loading...") {
    if (!loader || !loaderText) {
        return;
    }

    loaderText.textContent = message;

    loader.classList.add("active");
    document.body.classList.add("loading");
}

function hideLoader() {
    if (!loader) {
        return;
    }

    loader.classList.remove("active");
    document.body.classList.remove("loading");
}

// Hide automatically when page finishes loading
window.addEventListener("load", () => {
    hideLoader();
});
