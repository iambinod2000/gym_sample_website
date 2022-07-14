let clickmenu = document.getElementById('click-menu');
function menuClicked(){
    clickmenu.style.display = 'block';
}

function menudClicked(){
    clickmenu.style.display = 'none';
}

// for sticky menu
window.addEventListener('scroll', function(){
    let forsticky = document.querySelector('nav');
    if(window.pageYOffset >= 800){
        forsticky.classList.add('sticky');
    }else{
        forsticky.classList.remove('sticky');
    }
});



// slider for client feedback
let flag = 1;


function changeSlide(x){
    flag = flag + x;
    slideShow(flag);
}

function slideShow(num){
    let slides = document.getElementsByClassName('slide');

    if(num == slides.length){
        flag = 0;
        num = 0;
    }

    if(num < 0){
        flag = slides.length -1;
        num = slides.length -1;
    }

    for(let notshow of slides){
        notshow.style.display = 'none';
    }
    slides[num].style.display = 'block';
}

slideShow(flag);


// select day js

function activeFun(day){
    let sunpick = document.getElementById('sun-pick');
    let monpick = document.getElementById('mon-pick');
    let tuespick = document.getElementById('tues-pick');
    let wedpick = document.getElementById('wed-pick');
    let thurspick = document.getElementById('thur-pick');
    let fripick = document.getElementById('fri-pick');
    let satpick = document.getElementById('sat-pick');

    let oldpick = document.querySelector('.type-active');
    if(day == 'sunday'){
        oldpick.classList.remove('type-active');
        sunpick.classList.add('type-active');
    }else if(day == 'monday'){
        oldpick.classList.remove('type-active');
        monpick.classList.add('type-active');
    }else if(day == 'tuesday'){
        oldpick.classList.remove('type-active');
        tuespick.classList.add('type-active');
    }else if(day == 'wednesday'){
        oldpick.classList.remove('type-active');
        wedpick.classList.add('type-active');
    }else if(day == 'thursday'){
        oldpick.classList.remove('type-active');
        thurspick.classList.add('type-active');
    }else if(day == 'friday'){
        oldpick.classList.remove('type-active');
        fripick.classList.add('type-active');
    }else if(day == 'saturday'){
        oldpick.classList.remove('type-active');
        satpick.classList.add('type-active');
    }

    // for active class
    let sunactive = document.getElementById('active-sun');
    let monactive = document.getElementById('active-mon');
    let tuesactive = document.getElementById('active-tues');
    let wedactive = document.getElementById('active-wed');
    let thursactive = document.getElementById('active-thurs');
    let friactive = document.getElementById('active-fri');
    let satactive = document.getElementById('active-sat');

    let remactive = document.querySelector('.active');

    if(day == 'sunday'){
        remactive.classList.remove('active');
        sunactive.classList.add('active');
    }else if(day =='monday'){
        remactive.classList.remove('active');
        monactive.classList.add('active');
    }else if(day =='tuesday'){
        remactive.classList.remove('active');
        tuesactive.classList.add('active');
    }else if(day =='wednesday'){
        remactive.classList.remove('active');
        wedactive.classList.add('active');
    }else if(day =='thursday'){
        remactive.classList.remove('active');
        thursactive.classList.add('active');
    }else if(day =='friday'){
        remactive.classList.remove('active');
        friactive.classList.add('active');
    }else if(day =='saturday'){
        remactive.classList.remove('active');
        satactive.classList.add('active');
    }
}