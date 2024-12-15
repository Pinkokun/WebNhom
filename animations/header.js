
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định

        const targetId = this.getAttribute('href').substring(1); // Lấy ID từ href
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Cuộn mượt
                block: 'start'     // Đưa phần tử đến đầu màn hình
            });
        }
    });
});



// BANNER animation
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener("click", function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]);
});
