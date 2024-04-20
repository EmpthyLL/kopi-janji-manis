const nav = document.querySelector('.navigasi')
const menu = document.getElementById('sidemenu')
menu.addEventListener('click',function(){
    nav.classList.toggle('active')
})
document.addEventListener('click',function(ev){
    if(!menu.contains(ev.target) && !nav.contains(ev.target)){
        nav.classList.remove('active')
    }
})