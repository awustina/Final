let currentIndex = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');


if (slides.length > 0 && prevButton && nextButton) {
    function moveSlide(direction) {
        
        slides[currentIndex].classList.remove('active');
        
        
        currentIndex = (currentIndex + direction + slides.length) % slides.length;

        
        slides[currentIndex].classList.add('active');
    }

    
    prevButton.addEventListener('click', () => moveSlide(-1));
    nextButton.addEventListener('click', () => moveSlide(1));
}


const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav__link');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 
    
});


const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

