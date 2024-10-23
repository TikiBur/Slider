let swiperInstance;

function initSwiper() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
        if (!swiperInstance) {
            swiperInstance = new Swiper('.swiper-container', {
                pagination: {
                    el: '.brands-content__swiper-pagination',
                    clickable: true,
                },
                slidesPerView: 'auto', 
                loop: true,
                spaceBetween: 15,
            });
        }
    } else {
        if (swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }

        const slides = document.querySelectorAll('.swiper-slide');
        slides.forEach(slide => {
            slide.style.width = '220px'; 
        });
    }
}

window.addEventListener('resize', initSwiper);
window.addEventListener('load', initSwiper);


document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.swiper-slide');
    const button = document.querySelector('.brands__button');
    let isHidden = true; 

    for (let i = slides.length - 5; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }

    button.addEventListener('click', () => {
        if (isHidden) {
            slides.forEach(slide => slide.classList.remove('hidden'));
            button.querySelector('p').textContent = 'Скрыть';
        } else {
            for (let i = slides.length - 5; i < slides.length; i++) {
                slides[i].classList.add('hidden');
            }
            button.querySelector('p').textContent = 'Показать все';
        }
        isHidden = !isHidden; 
    });
});

document.getElementById('toggleButton').addEventListener('click', function() {
    const img = document.getElementById('buttonImage');
    img.classList.toggle('rotate');
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.swiper-slide');
    const button = document.querySelector('.brands__button');
    let isHidden = true; 

    for (let i = slides.length - 3; i < slides.length; i++) {
        slides[i].classList.add('hiddenDesktop');
    }

    button.addEventListener('click', () => {
        if (isHidden) {
            slides.forEach(slide => slide.classList.remove('hiddenDesktop'));
            button.querySelector('p').textContent = 'Скрыть';
        } else {
            for (let i = slides.length - 3; i < slides.length; i++) {
                slides[i].classList.add('hiddenDesktop');
            }
            button.querySelector('p').textContent = 'Показать все';
        }
        isHidden = !isHidden; 
    });
});
