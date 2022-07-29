let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");        
let searchBtn = document.querySelector(".bx-search-alt");

btn.onclick = function() {
    sidebar.classList.toggle("muncul");
}

searchBtn.onclick = function() {
        sidebar.classList.toggle("muncul");
}


//Sliderr
const cntrl = document.querySelectorAll('.slider-cntrl');
const cntrlMob = document.querySelectorAll('.pagination-mobile > li');
const subTitle = document.querySelectorAll('.sub-title');
const title = document.querySelector('.title');
const img = document.querySelector('.thumbnail');
const count = document.querySelector('.slider-count');
const progress = document.querySelector('.progress div');

let id = 0;

//data
//array image path
const images = [
    './img/p1.jpg',
    './img/p2.jpg',
    './img/p3.jpg',
];

const progressWidht = [
    '33%',
    '66%',
    '100%',
];

const text = [
    'Work  ',
    'Active',
    'Travel',
];

const quotes = [
    'Jika ini salahku, maka kupersilahkan KARMA menjumpaiku, tapi jika ini bukan salahku, lantas mengapa CERMIN tak pernah menunjukan siapa diriku',
    'Bergaulah dengan mereka yang membicarakan for the future, and ide ide hebat, Bukan dengan mereka yang membicarakan orang lain.',
    'Hancurkan, patahkan, injak, hina, caci maki, pandang semua keburukanku dari semua sudut yang kaulihat, itu tak akan mempan bagiku.Aku dibesarkan oleh kebencian, didik tanpa kasih sayang, dipaksa untuk menerima keadaan.',

]



//Paginations control
for(let i = 0; i < cntrl.length; i ++) {
    //add click pada pagenation
    cntrl[i].addEventListener('click', () => {
        //run slider funtion
        slider(i);

        //let id click
        id = i;

        //stop autoslide
        stopAutoSlide();
    });

    //add all click for pagenation
    cntrlMob[i].addEventListener('click', () => {
        //run slider funtion
        slider(i);

        //let id click
        id = i;

        //stop autoslide
        stopAutoSlide();           
    });
}


function slider(i) {
    //change tumbnail
    img.src = images[i];

    //progres 
    progress.style.width = progressWidht[i];

    //Change Title
    title.innerText = text[i] + " Anywhere"

    //change subtitle
    subTitle.forEach(sub => {
        sub.innerText = quotes[i]
    });


    //change slide number
    count.innerText = "0" + (i + 1);


    //remove active class
    for(let i = 0; i < cntrl.length; i ++) {
        cntrl[i].classList.remove('active');
        cntrlMob[i].classList.remove('pag-active');
    }

    //add active class 
    cntrl[i].classList.add('active');
    cntrlMob[i].classList.add('pag-active');
}



//slider auto
function nextSlide () {
    //incerment img id
    id++;

    if ( id > cntrl.length - 1) {
        id = 0;
    }

    slider(id);
}


let autoSlide = setInterval(nextSlide, 10000);

function stopAutoSlide() {
    clearInterval(autoSlide);

    autoSlide = setInterval(nextSlide, 10000);
}
