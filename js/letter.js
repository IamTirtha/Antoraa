const btn = document.getElementById("openLetter");
const envelope = document.querySelector(".envelope");

btn.addEventListener("click",()=>{

    envelope.classList.add("open");

    btn.style.transform="translate(-50%,-50%) scale(.9)";

    setTimeout(()=>{

        window.location.href="../proposal/index.html";

    },1500);

});