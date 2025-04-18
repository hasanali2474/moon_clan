// إظهار رسالة الترحيب
document.addEventListener("DOMContentLoaded", function() {
    console.log("Welcome to Moon Clan - Loading Complete");
    
    // إضافة تأثير ترحيب
    setTimeout(() => {
        const welcomeMsg = document.getElementById('welcomeMsg');
        welcomeMsg.classList.add('show');
        
        setTimeout(() => {
            welcomeMsg.classList.remove('show');
        }, 3000);
    }, 1000);
    
    // إضافة تأثيرات التحريك للبطاقات
    const cards = document.querySelectorAll('#Hasan, #AliH');
    
    cards.forEach((card, index) => {
        // تأخير ظهور البطاقات بشكل متتالي
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 * (index + 1));
        
        // تأثير التحريك عند المرور
        card.addEventListener('mousemove', handleMouseMove);
    });
    
    // تحريك البطاقات بالماوس
    function handleMouseMove(e) {
        const card = this;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.05)`;
    }
    
    // إعادة البطاقات لوضعها الطبيعي عند خروج الماوس
    cards.forEach(card => {
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'rotateX(0) rotateY(0) scale(1)';
        });
    });
    
    // إضافة تأثير نبض للعنوان
    const title = document.getElementById('h1');
    title.addEventListener('mouseover', function() {
        this.style.textShadow = '0 0 10px rgba(255,255,255,0.8), 0 0 30px rgba(33,150,243,0.8)';
    });
    
    title.addEventListener('mouseleave', function() {
        this.style.textShadow = '0 2px 10px rgba(0,0,0,0.8), 0 0 30px rgba(33,150,243,0.4)';
    });
    
    // إضافة تأثير للزر
    const button = document.querySelector('#butoon button');
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'translateY(-5px)';
        }, 200);
    });
});