
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
              $(this).addClass('active');
            }
        });
    });
});


// ハンバーガーメニュー
const hamburgerButton = document.querySelector('.mobile_menu_icon'); 
const menu = document.querySelector('.mobile_menu');

function toggleMenu(event) {
    event.stopPropagation();   //イベントが伝播しないようにしてる
    menu.classList.toggle('active');
}

hamburgerButton.addEventListener('click', toggleMenu);

// 画面のどこかをクリックしたらメニューを閉じる
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !hamburgerButton.contains(event.target)) {
        menu.classList.remove('active');
    }
});


//カルーセル
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const container = document.querySelector(".carousel-container");
    const indicatorsContainer = document.querySelector(".indicators");
    let currentIndex = 0;
    const totalSlides = slides.length;
    let interval;

    // インジケーター作成
    slides.forEach((_, index) => {
        const indicator = document.createElement("div");
        indicator.classList.add("indicator");
        if (index === 0) indicator.classList.add("active");
        indicator.addEventListener("click", () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    const indicators = document.querySelectorAll(".indicator");
    
    // インジケーターをクリックしたらそのスライドに移動
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
        restartAutoSlide();
    }
    
    // スライドを更新
    function updateCarousel() {
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
        indicators.forEach((dot, idx) => {
            dot.classList.toggle("active", idx === currentIndex);
        });
    }

    // 次のスライドに移動
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }
    // 自動スライド
    function startAutoSlide() {
        interval = setInterval(nextSlide, 4000);
    }

    function restartAutoSlide() {
        clearInterval(interval);
        startAutoSlide();
    }

    startAutoSlide();
});
