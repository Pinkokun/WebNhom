   // Đóng mở modal
            // Lấy sự kiện diễn ra ( 3 nút js-buy-ticket) 
            // Các nút js-buy-ticket sẽ được lưu dưới dạng buyBtns
            const buyBtns = document.querySelectorAll('.js-buy-ticket')
            // Lắng nghe hành vi click cho từng nút trong buyBtns thì sẽ hiện ra showBuyTickets
            for (const buyBtn of buyBtns) {
                buyBtn.addEventListener('click', showBuyTickets)
            }
            function showBuyTickets() {
                modal.classList.add('open')
            }


            // Modal selector sẽ được lưu dưới dạng modal trong JS  
            const modal = document.querySelector('.js-modal')
            // Lấy nút x trong js-modal ra lưu dưới dạng modalClose
            const modalClose = document.querySelector('.js-modal-close')
            // Lấy ra js-modal-contain lưu dưới dạng modalContain
            const modalContain = document.querySelector('.js-modal-contain')
            // Lấy ra js-modal-close-btn dưới dạng modalCloseBtn
            const modalCloseBtn = document.querySelector('.js-modal-close-btn')
            // Lấy ra js-menu-btn lưu dưới dạng menuBtn
            const menuBtn = document.querySelector('.js-menu-btn')
            // Khi click vào buyBtn trong Btns thì showBuyTickets sẽ chạy đoạn chức năng mở modal

            // Khi modalClose được click thì closeTickets sẽ chạy chức năng đóng modal
            function closeTickets() {
                modal.classList.remove('open')
            }
            // Lắng nghe hành vi click vào modalClose thì sẽ hiện ra closeTickets
            modalClose.addEventListener('click', closeTickets)
            // Lắng nghe hành vi click vào modal thì sẽ hiện ra closeTickets
            modal.addEventListener('click', closeTickets)
            // Lắng nghe hành vi click vào modalContain thì sẽ dừng lan truyền  
            modalContain.addEventListener('click', function () {
                event.stopPropagation()
            })
            // Lắng nghe hành vi click vào modalCloseBtn và thực hiện xuất ra closeTickets
            modalCloseBtn.addEventListener('click', closeTickets)



