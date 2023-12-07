// public/js/script.js
document.addEventListener("DOMContentLoaded", function () {
    var christmasDate = new Date("2023-12-25T00:00:00"); // Ngày Giáng sinh

    function updateCountdown() {
        var currentTime = new Date();
        var timeDifference = christmasDate - currentTime;

        if (timeDifference > 0) {
            var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            // Format the countdown
            var formattedCountdown =
                days + "d " +
                (hours < 10 ? "0" : "") + hours + "h " +
                (minutes < 10 ? "0" : "") + minutes + "m " +
                (seconds < 10 ? "0" : "") + seconds + "s";

            document.getElementById("timer").innerHTML = formattedCountdown;
        } else {
            document.getElementById("timer").innerHTML = "Đã đến Giáng sinh!";
        }
    }

    // Gọi hàm updateCountdown mỗi giây một lần
    setInterval(updateCountdown, 1000);

    // Gọi hàm một lần để cập nhật ngay khi trang được tải
    updateCountdown();
});


document.addEventListener("DOMContentLoaded", function () {
    var rectangle = document.getElementById("rectangle");
    var prayerContainer = document.getElementById("prayer-container");
    var closeBtn = document.getElementById("close-btn");
    var isOpen = false; // Biến flag để kiểm soát trạng thái hiển thị của ô nhập

    // Ẩn ô nhập điều ước khi trang được tải
    prayerContainer.style.display = "none";

    // Thêm sự kiện click cho phần tử rectangle khi người dùng click vào trang
    document.addEventListener("click", function () {
        if (!isOpen) {
            prayerContainer.style.display = "flex";
            isOpen = true;
        }
    });

    // Thêm sự kiện click cho nút đóng
    closeBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Ngăn chặn sự kiện click lan ra các phần tử cha
        prayerContainer.style.display = "none";
        isOpen = false;
    });
});


function sendPrayer() {
    var prayerText = document.getElementById("prayer-text").value;
    // Xử lý nút "Gửi đi" theo nhu cầu của bạn
    // Ví dụ: Gửi dữ liệu đi qua AJAX hoặc thực hiện các tác vụ khác
    console.log("Đã nhận được điều cầu nguyện:", prayerText);
}