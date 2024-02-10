document.getElementById('newyear-button').addEventListener('click', function() {
    // Hiển thị hình ảnh GIF
    var img = document.getElementById('newyear-gif');
    img.src = 'dance.gif';
    img.style.display = 'block';

    // Phát âm thanh
    var audio = document.getElementById('newyear-audio');
    audio.play();

    // Hiển thị câu chúc Tết sáng tạo phía trên hình ảnh
    var greeting = document.getElementById('newyear-greeting');
    greeting.style.display = 'block'; // Đảm bảo rằng phần tử hiển thị
    greeting.style.fontSize = '20px'; // Tùy chỉnh kích thước font
    greeting.style.color = 'black'; // Tùy chỉnh màu sắc
    greeting.style.fontWeight = 'bold'; // Tùy chỉnh độ đậm
    greeting.style.textAlign = 'center'; // Căn giữa văn bản

    // Ẩn nút sau khi nhấn
    this.style.display = 'none';
});
