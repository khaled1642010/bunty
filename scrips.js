function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
}

function checkPassword() {
    // بناخد اللي سما كتبته وبنشيل منه أي مسافات زيادة
    let pass = document.getElementById('passInput').value.trim();

    // جرب تكتب التاريخ كدة: 2/11/2025
    if (pass === "2/11/2025") {
        showPage('homePage');
    } else {
        alert("حاولي تاني يا روحي.. التاريخ ده غالي علينا (2/11/2025) ❤️");
    }
}

// باقي كود التايمر والقلوب زي ما هو
const startDate = new Date("November 2, 2025 00:00:00").getTime();
setInterval(function() {
    const now = new Date().getTime();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    const timerElement = document.getElementById("timer");
    if (timerElement) {
        timerElement.innerHTML = `بقالنا سوا: ${days} يوم، ${hours} ساعة، ${minutes} دقيقة، ${seconds} ثانية`;
    }
}, 1000);

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-20px';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.opacity = Math.random() * 0.6;
    heart.style.zIndex = "-1";
    heart.style.animation = `fall ${Math.random() * 4 + 4}s linear forwards`;
    const heartsContainer = document.getElementById('hearts');
    if (heartsContainer) { heartsContainer.appendChild(heart); }
    setTimeout(() => { heart.remove(); }, 6000);
}
setInterval(createHeart, 500);
const styleSheet = document.createElement("style");
styleSheet.innerText = `@keyframes fall { to { transform: translateY(110vh) rotate(360deg); } }`;
document.head.appendChild(styleSheet);