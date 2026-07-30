    const btn = document.getElementById("openLetter");
    const envelope = document.querySelector(".envelope");
    
    btn.addEventListener("click",()=>{
    
        // Prevent double-clicks from re-triggering the sequence
        btn.disabled = true;
        btn.style.pointerEvents = "none";
    
        envelope.classList.add("open");
    
        btn.style.transform="translate(-50%,-50%) scale(.9)";
    
        // Let the envelope-opening animation finish first
        setTimeout(()=>{
    
            if (typeof showLoader === "function") {
                showLoader("Opening your letter... 💌");
            }
    
            // Give the loader a moment on screen before navigating
            setTimeout(()=>{
    
                window.location.href="../proposal/index.html";
    
            },1400);
    
        },1500);
    
    });

    btn.addEventListener("click", ()=>{
        music.play();
    })
