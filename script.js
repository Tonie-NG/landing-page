const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('nav');

menu.addEventListener('click', ()=> {
    nav.classList.add('open-nav');

    if(nav.classList = 'open-nav') {
        nav.addEventListener('click', ()=> {
            nav.classList.remove('open-nav');
        });
    }
});

close.addEventListener('click', ()=> {
    nav.classList.add('close-nav');
});
