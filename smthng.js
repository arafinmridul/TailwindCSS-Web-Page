const Bar = document.querySelector('#bar');
const Menu = document.querySelector('#menu');

Bar.addEventListener('click', ()=>{
    if (Menu.classList.contains('hidden')){
        Menu.classList.remove('hidden')
    }
    else {
        Menu.classList.add('hidden')
    }
})