const audio = document.getElementById("bg-music");

document.addEventListener("click", (e) => {

    // Start music once
    if (audio.paused) {
        audio.play().catch(() => {});
    }

    // Create eye
    const eye = document.createElement("div");
    eye.className = "click-eye";

    eye.style.left = `${e.clientX}px`;
    eye.style.top = `${e.clientY}px`;

    document.body.appendChild(eye);

    requestAnimationFrame(() => {
        eye.classList.add("open");
    });

    setTimeout(() => {
        eye.classList.remove("open");
    }, 600);

    setTimeout(() => {
        eye.remove();
    }, 1200);

});
