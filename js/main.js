// Header Menu
var OpenMenu = document.querySelector('.header__menu-icon');
var OverlayMenu = document.querySelector('.overlay__category');
var MenuElement = document.querySelector('.header__menu-main');
var CloseMenu = document.querySelector('.header__menu-close-icon');
// Open menu
OpenMenu.onclick = function () {
    OverlayMenu.style.display = 'block';
    Object.assign(MenuElement.style, {
        transform: 'translateX(0%)',
        opacity: '1'
    })
}

// Close menu
CloseMenu.onclick = function () {
    OverlayMenu.style.display = 'none';
    Object.assign(MenuElement.style, {
        transform: 'translateX(-100%)'
    })
}

OverlayMenu.onclick = function () {
    OverlayMenu.style.display = 'none';
    Object.assign(MenuElement.style, {
        transform: 'translateX(-100%)'
    })
}
// Car option   
var selectCar = document.querySelector('.header-select__car ');
var optionCar = document.querySelector('.header-select__car-option');
var closeCarOption = document.querySelector('.select-car__close');
var OverlayOptionCar = document.querySelector('.overlay__select-car');
//Open


selectCar.onclick = function(){
    OverlayOptionCar.style.display = 'block';
    optionCar.style.display = 'block';
}
// Close
closeCarOption.onclick = function(){
    OverlayOptionCar.style.display = 'none';
    optionCar.style.display = 'none';
}


// option navigation
// open
var navS = document.querySelectorAll('.nav__item-link');
var OverlayNav = document.querySelector('.overlay__category-option');
var closeIcon = document.querySelectorAll('.nav__option-close-icon');

function closeOption_1() {
    document.querySelector('.nav__option-main--2').style.display = 'none';
    document.querySelector('.nav__option-main--3').style.display = 'none';
    document.querySelector('.nav__option-main--4').style.display = 'none';
    document.querySelector('.nav__option-main--5').style.display = 'none';
    document.querySelector('.nav__option-main--6').style.display = 'none';
}

function closeOption_2() {
    document.querySelector('.nav__option-main--1').style.display = 'none';
    document.querySelector('.nav__option-main--3').style.display = 'none';
    document.querySelector('.nav__option-main--4').style.display = 'none';
    document.querySelector('.nav__option-main--5').style.display = 'none';
    document.querySelector('.nav__option-main--6').style.display = 'none';

}

function closeOption_3() {
    document.querySelector('.nav__option-main--1').style.display = 'none';
    document.querySelector('.nav__option-main--2').style.display = 'none';
    document.querySelector('.nav__option-main--4').style.display = 'none';
    document.querySelector('.nav__option-main--5').style.display = 'none';
    document.querySelector('.nav__option-main--6').style.display = 'none';

}

function closeOption_4() {
    document.querySelector('.nav__option-main--1').style.display = 'none';
    document.querySelector('.nav__option-main--2').style.display = 'none';
    document.querySelector('.nav__option-main--3').style.display = 'none';
    document.querySelector('.nav__option-main--5').style.display = 'none';
    document.querySelector('.nav__option-main--6').style.display = 'none';

}

function closeOption_5() {
    document.querySelector('.nav__option-main--1').style.display = 'none';
    document.querySelector('.nav__option-main--2').style.display = 'none';
    document.querySelector('.nav__option-main--3').style.display = 'none';
    document.querySelector('.nav__option-main--4').style.display = 'none';
    document.querySelector('.nav__option-main--6').style.display = 'none';

}

function closeOption_6() {
    document.querySelector('.nav__option-main--1').style.display = 'none';
    document.querySelector('.nav__option-main--2').style.display = 'none';
    document.querySelector('.nav__option-main--3').style.display = 'none';
    document.querySelector('.nav__option-main--4').style.display = 'none';
    document.querySelector('.nav__option-main--5').style.display = 'none';

}

function clickNav_1() {
    Object.assign(navS[1].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });

    Object.assign(navS[2].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });

    Object.assign(navS[3].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });

    Object.assign(navS[4].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });

    Object.assign(navS[5].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });
}

function clickNav_2() {
    Object.assign(navS[0].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });

    Object.assign(navS[2].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });

    Object.assign(navS[3].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });

    Object.assign(navS[4].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });

    Object.assign(navS[5].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });
}

function clickNav_3() {
    Object.assign(navS[1].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });

    Object.assign(navS[0].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });

    Object.assign(navS[3].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });

    Object.assign(navS[4].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });

    Object.assign(navS[5].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });
}

function clickNav_4() {
    Object.assign(navS[1].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });

    Object.assign(navS[2].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });

    Object.assign(navS[0].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });

    Object.assign(navS[4].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });

    Object.assign(navS[5].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });
}

function clickNav_5() {
    Object.assign(navS[1].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });

    Object.assign(navS[2].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });

    Object.assign(navS[3].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });

    Object.assign(navS[0].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });

    Object.assign(navS[5].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });
}

function clickNav_6() {
    Object.assign(navS[1].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });

    Object.assign(navS[2].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });

    Object.assign(navS[3].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });

    Object.assign(navS[4].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });

    Object.assign(navS[0].style, {
        backgroundColor: '#fff',
        color: 'var(--text-color)'
    });
}

navS.forEach((nav, index) => {
    var optionNav = document.querySelector(`.nav__option-main--${index + 1}`);
    nav.onclick = function () {
        console.log(optionNav.style.display);
        if (optionNav.style.display === 'none' || optionNav.style.display === '') {
            OverlayNav.style.display = 'block';
            optionNav.style.display = 'block';
            Object.assign(nav.style, {
                backgroundColor: 'var(--primary-color)',
                color: 'var(--white-color)'
            });
            switch (index + 1) {
                case 1:
                    closeOption_1();
                    clickNav_1();
                    break;

                case 2:
                    closeOption_2();
                    clickNav_2();
                    break;
                case 3:
                    closeOption_3();
                    clickNav_3();
                    break;
                case 4:
                    closeOption_4();
                    clickNav_4();
                    break;
                case 5:
                    closeOption_5();
                    clickNav_5();
                    break;
                case 6:
                    closeOption_6();
                    clickNav_6();
                    break;
                default:
                    break;
            }


        } else {
            OverlayNav.style.display = 'none';
            optionNav.style.display = 'none';
            Object.assign(nav.style, {
                backgroundColor: '#fff',
                color: 'var(--text-color)'
            });
        }
    }
});


// close
closeIcon.forEach((close, index) => {
    close.onclick = function () {
        OverlayNav.style.display = 'none';
        var optionNav = document.querySelector(`.nav__option-main--${index + 1}`);
        optionNav.style.display = 'none';
        navS.forEach((nav) => {
            Object.assign(nav.style, {
                backgroundColor: '#fff',
                color: 'var(--text-color)'
            });
        });
    }
})


// Scroll
    var select_main = document.querySelector('.select--Main');
    var select_main_text = document.querySelector('.select--Main__content');
    window.addEventListener('scroll',function() {
        if(window.pageYOffset > 600){
            Object.assign(select_main.style,{
                position : 'fixed',
                marginTop: '0',
                zIndex: '3',
                padding: '15px 15px'
            })
            select_main_text.style.display = 'none';
        }else{
            Object.assign(select_main.style,{
                position : 'relative',
                marginTop: '32px',
                zIndex: '0',
                padding: '90px 20px 50px 20px' 
            })
            select_main_text.style.display = 'block'
        }
    })


