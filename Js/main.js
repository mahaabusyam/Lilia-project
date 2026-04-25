//responsive navbar
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        //الضغطة الاولى يفتح و الثانية يغلق 
    });
}
// تأثير الظهور عند التمرير (Scroll Reveal)
const cards = document.querySelectorAll('.service-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = "flex";
    } else {
        scrollTopBtn.style.display = "none";
    }
});
// صعود ناعم عند الضغط
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
//سكشن works
const filterItems = document.querySelectorAll('.filter-menu li');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterItems.forEach(item => {
    item.addEventListener('click', function() {
        // تغيير الحالة النشطة (Active)
        filterItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        
        // تنفيذ الفلترة
        const filterValue = this.getAttribute('data-filter');
        
        portfolioItems.forEach(card => {
            if (filterValue === 'all' || card.classList.contains(filterValue)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
//مهم js في جزء cliant 
function showGroup(groupNumber) {
    const groups = document.querySelectorAll('.testimonial-group');
    groups.forEach(group => group.classList.remove('active'));
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    document.getElementById('group-' + groupNumber).classList.add('active');
    dots[groupNumber - 1].classList.add('active');
                                           }
