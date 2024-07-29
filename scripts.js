document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'img-random/us1.gif',
        'img-random/us2.gif',
        'img-random/us3.gif',
        'img-random/us4.gif',
        'img-random/us5.gif',
        'img-random/us6.gif',
        'img-random/us7.gif',
        
        // เพิ่มรูปอื่นๆ ตามที่คุณต้องการ
    ];

    const randomMemeButton = document.querySelector(".random-meme");
    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("random-meme-image");
    const closeButton = document.querySelector(".close");

    randomMemeButton.addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * images.length);
        popupImage.src = images[randomIndex];
        popup.style.display = "flex"; // แสดงป๊อปอัพ
    });

    closeButton.addEventListener("click", function() {
        popup.style.display = "none"; // ซ่อนป๊อปอัพเมื่อกดปุ่มปิด
    });

    // ซ่อนป๊อปอัพเมื่อคลิกนอกป๊อปอัพ
    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});


