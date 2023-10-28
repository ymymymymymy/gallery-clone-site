// メインビジュアル拡大
const image = document.querySelectorAll('.main-image');

window.addEventListener("scroll", function () {
    const scroll = window.scrollY / 10;
    if (window.outerWidth > 900) {
        for (let i = 0; i <image.length; i++) {
            image[i].style.width = 100 / 3 + scroll + '%';
        }
    } else {
        image[1].style.width = 100 - scroll + '%';
    }

});


// アクセスの背景画像の表示・非表示
const access = document.getElementById('access');
const bgAccess = document.getElementById('js-bg-access');
window.addEventListener('scroll', function(){
    if (window.scrollY > access.offsetTop - 500 && window.scrollY < access.offsetTop) {
        bgAccess.style.opacity = 1;
    } else {
        bgAccess.style.opacity = 0;
    }
});


// フェードイン
const fadeIn = document.querySelectorAll('.fade-in');

for (let i = 0; i < fadeIn.length; i++) {
    window.addEventListener('scroll', function(){
        const rect = fadeIn[i].getBoundingClientRect().top;
        const scroll = window.scrollY;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight; 
        
        if(scroll > offset - windowHeight + 150){
            fadeIn[i].classList.add('scroll-in');
        }
    });
}

// ヘッダーの表示・非表示
const header = document.getElementsByClassName('js-header');

for (let i = 0; i < header.length; i++) {
    window.addEventListener("scroll", scroll_event);
    function scroll_event() {
        if (window.scrollY > 600) {
            header[i].style.opacity = 1;
        } else if (window.scrollY < 600) {
            header[i].style.opacity = 0;
        }
    }
}


// ハンバーガーメニュー
const ham = document.getElementById('js-hamburger');
const nav = document.getElementById('js-nav');

ham.addEventListener("click", function () {
    ham.classList.toggle('active');
    nav.classList.toggle('active');
});


// サイドボタン
const sidebtn = document.querySelectorAll('.side-btn');


for (let i = 0; i < sidebtn.length; i++) {
    window.addEventListener("scroll", scroll_event);
    function scroll_event() {
        if (window.scrollY > 900 && window.scrollY < access.offsetTop - 800) {
            sidebtn[i].style.right = -155 + 'px';
        } else {
            sidebtn[i].style.right = -205 + 'px';
        }
    }
}