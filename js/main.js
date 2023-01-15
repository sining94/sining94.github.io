let body = document.querySelector('body');

$('.animate').addClass('active');

let mainSwiper = (function () {
    let bullet = ['Intro', 'Project', 'Skills', 'Info'];
    let swiper = new Swiper('.section_1 .swiper-container', {
        speed: 700,
        direction: 'vertical',
        mousewheel: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                translate: [0, 0, -1],
                opacity: 0,
            },
            next: {
                translate: [0, "100%", 0],
                opacity: 0
            },
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
            }
        },
        on: {
            reachEnd: function () {
                swiper.mousewheel.disable();
            },
            slideChange: function () {
                let swiperIndex = this.realIndex;
                const header = document.querySelector('header');

                // console.log($('.section_1 .swiper-slide'))
                $.each($('.section_1 .swiper-slide'), function (idx, el) {
                    if (this.style.zIndex == 4) {
                        $(this).find('.animate').addClass('active');

                    }
                    else {
                        $(this).find('.animate').removeClass('active');
                    }
                });

                if (swiperIndex !== 0) {
                    header.classList.add('hide');
                }
                else {
                    header.classList.remove('hide');
                }
            }
        }

    });

    window.addEventListener('wheel', function (event) {
        if (event.deltaY < 0) {
            swiper.mousewheel.enable();
        } else if (event.deltaY > 0) {
        }
    });
})();


$('.gnb > li').on('click', function () {
    let gnbIndex = $(this).index();

    $('.swiper-pagination > div').eq(gnbIndex).click();
    console.log($(this).index());
});




// main
const target = document.querySelector(".write-txt");
let stringArr = ["Hi Guys! My name is Lee Yong Ju.", "Welcome to my website!"]
let index = 0;
let selectStringArr = stringArr[index].split("");

writing();


function writing() {
    if (selectStringArr.length !== 0) {
        target.textContent += selectStringArr.shift();
        setTimeout(function () {
            writing();
        }, 80);
    }
    else {
        selectStringArr = target.textContent.split('');
        if (index = (index + 1) % stringArr.length == 0) {
            return false;
        }
        else {
            setTimeout(function () {
                deleteTxt();
            }, 50);
        }
    }
};

function deleteTxt() {
    selectStringArr.pop();
    target.textContent = selectStringArr.join("");
    if (selectStringArr.length !== 0) {
        setTimeout(function () {
            deleteTxt()
        }, 50);
    } else {
        index = (index + 1) % stringArr.length
        selectStringArr = stringArr[index].split("");
        writing();
    }
};