document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        showSection();
    }, 500);
    setTimeout(() => {
        launchConfetti(); 
    }, 1000); 
});


function launchConfetti() {

    const duration = 4 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}



function showSection() {
    const section = document.getElementById('mySection');
    section.classList.add('visible');
}



