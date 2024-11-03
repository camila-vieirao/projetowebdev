const sliders = document.querySelectorAll('.slider');
sliders.forEach((slider) => {
    let currentIndex = 0;
    const slides = slider.querySelectorAll('.slide');
    setInterval(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }, 5000); // Troca de imagem a cada 5 segundos
});