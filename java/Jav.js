const nav = document.querySelector('.navigasi')
const menu = document.getElementById('sidemenu')
menu.addEventListener('click',function(ev){
    nav.classList.toggle('active')
    ev.preventDefault()
})
document.addEventListener('click',function(ev){
    if(!menu.contains(ev.target) && !nav.contains(ev.target)){
        nav.classList.remove('active')
    }
})
const search = document.querySelector('.search-bar')
const searchicon = document.getElementById('search')
const searchform = document.getElementById('search-form')
searchicon.addEventListener('click',function(ev){
    search.classList.toggle('active')
    searchform.focus()
    ev.preventDefault()
})
document.addEventListener('click',function(ev){
    if(!searchicon.contains(ev.target) && !search.contains(ev.target)){
        search.classList.remove('active')
    }
})
const itemDetail = document.querySelector('#item-detail')
const detailbut = document.querySelectorAll('.view')
const modalimg = document.querySelector('.imginmodal')
const prodname = document.querySelector('.product-content h3')
const ratestar = document.querySelector('.right div .ratting')
const hargatamp = document.querySelector('.right .price')

detailbut.forEach(function(eye){
    eye.addEventListener('click',function(ev){
        ev.preventDefault()
        if(ev.target.tagName == 'A'){
            itemDetail.style.display = 'flex'
            modalimg.src = ev.target.parentElement.nextElementSibling.firstElementChild.src
            prodname.innerHTML = ev.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.innerHTML
            ratestar.innerHTML = ev.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerHTML
            hargatamp.innerHTML = ev.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.innerHTML
        }
        if(ev.target.tagName == 'IMG'){
            itemDetail.style.display = 'flex'
            modalimg.src = ev.target.parentElement.parentElement.nextElementSibling.firstElementChild.src
            prodname.innerHTML = ev.target.parentElement.parentElement.nextElementSibling.nextElementSibling.firstElementChild.innerHTML
            ratestar.innerHTML = ev.target.parentElement.parentElement.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerHTML
            hargatamp.innerHTML = ev.target.parentElement.parentElement.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.innerHTML
        }
    })
})

document.querySelector(".modal .close").addEventListener('click',function(ev){
    itemDetail.style.display = 'none'
    ev.preventDefault()
})
const modal = document.querySelector('.modal')
window.onclick = function(ev){
    if(ev.target === modal)
    modal.style.display = 'none'
}