// document.addEventListener("DOMContentLoaded", function () {
//     // Chọn tất cả các phần tử có class "subnav-child"
//     const subnavChildren = document.querySelectorAll(".subnav-child");

//     // Lặp qua từng phần tử "subnav-child" và gắn sự kiện onclick
//     subnavChildren.forEach(child => {
//         child.onclick = function (e) {
//             e.preventDefault(); // Ngăn chặn sự kiện mặc định của thẻ <a> nếu có

//             // Ẩn tất cả các phần tử "subnav-1"
//             document.querySelectorAll(".subnav-1").forEach(subnav => {
//                 subnav.style.visibility = "hidden";
//                 subnav.style.opacity = "0";
//             });

//             // Tìm phần tử "subnav-1" bên trong "subnav-child" hiện tại
//             const subnav1 = child.querySelector(".subnav-1");

//             // Kiểm tra nếu "subnav-1" tồn tại
//             if (subnav1) {
//                 // Hiển thị subnav-1 cho phần tử đang được nhấp
//                 subnav1.style.visibility = "visible";
//                 subnav1.style.opacity = "1";
//             }
//         };
//     });
// });
