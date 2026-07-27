const lines = document.querySelectorAll(".fade-line");
const button = document.getElementById("startBtn");

let delay = 0;

// Show each line one by one
lines.forEach((line) => {
    setTimeout(() => {
        line.classList.add("show");
    }, delay);
    delay += 1800; // 1.8s between lines
});

// Show button after all lines
setTimeout(() => {
    button.classList.add("show");
}, delay + 500);

