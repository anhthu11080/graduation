document.getElementById('button').addEventListener('click', function() {
    // Hiển thị hình ảnh GIF
    var img = document.getElementById('gif');
    img.style.display = 'block';

    // Phát âm thanh
    var audio = document.getElementById('audio');
    audio.play();

    // Hiển thị thông điệp
    var greeting = document.getElementById('greeting');
    greeting.style.display = 'block';

    // Hiển thị nút CTA
    var callButton = document.getElementById('call-button');
    callButton.style.display = 'inline-block';

    // Hiển thị nút link
    var linkButton = document.getElementById('link-button');
    linkButton.style.display = 'inline-block';

    // Ẩn nút
    this.style.display = 'none';
});

// Đảm bảo rằng các phần tử sẽ hiển thị ở trạng thái ban đầu trên các thiết bị di động
window.onload = function() {
    if (window.innerWidth < 768) {
        var button = document.getElementById('button');
        button.style.display = 'block'; // Hiển thị nút
        var greeting = document.getElementById('greeting');
        greeting.style.display = 'none'; // Ẩn thông điệp
        var gif = document.getElementById('gif');
        gif.style.display = 'none'; // Ẩn hình ảnh GIF
    }
};
