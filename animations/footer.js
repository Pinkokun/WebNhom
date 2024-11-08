//sự kiện nút chuyển slide
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.sile-card');
    const dots = document.querySelectorAll('.presentation');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('show', i === index);
            dots[i].classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    showSlide(currentSlide);
});
// sự kiện tự động chuyển logo
$(document).ready(function() {
    $('.slick-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1250, // Khi màn hình nhỏ hơn 1250px
                settings: {
                    slidesToShow: 4, // Hiển thị 2 slide
                }
            },
            {
                breakpoint: 1000, // Khi màn hình nhỏ hơn 768px
                settings: {
                    slidesToShow: 3, // Hiển thị 2 slide
                }
            },
            {
                breakpoint: 768, // Khi màn hình nhỏ hơn 480px
                settings: {
                    slidesToShow: 2, // Hiển thị 1 slide
                }
            }
        ]
    });
});
