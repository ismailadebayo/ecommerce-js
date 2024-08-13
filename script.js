// Script for navigation bar
const ham = document.getElementById('ham')
const nav = document.getElementById('nav')
const close = document.getElementById('close')



if(ham){
    ham.addEventListener('click', ()=>{
    nav.classList.add('active')
})
}

close.addEventListener('click', ()=>{
    nav.classList.remove('active')
})