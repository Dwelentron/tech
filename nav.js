const btn =document.getElementsByClassName('button')[0]
const nav =document.getElementsByClassName('eight')[0]
btn.addEventListener('click', ()=>{
    nav.classList.toggle('active')
})