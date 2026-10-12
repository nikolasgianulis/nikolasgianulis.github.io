// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// UPGRADED Parallax Background Scrolling (Hardware Accelerated)
const bgFar = document.getElementById('bg-far');
const bgMid = document.getElementById('bg-mid');
const bgNear = document.getElementById('bg-near');

let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            let scrollY = window.scrollY;
            
            // translate3d(x, y, z) is used to force GPU rendering
            if(bgFar) bgFar.style.transform = `translate3d(0, ${scrollY * -0.1}px, 0)`;
            if(bgMid) bgMid.style.transform = `translate3d(0, ${scrollY * -0.3}px, 0)`;
            if(bgNear) bgNear.style.transform = `translate3d(0, ${scrollY * -0.6}px, 0)`;
            
            ticking = false;
        });
        ticking = true;
    }
});