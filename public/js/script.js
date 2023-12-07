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
