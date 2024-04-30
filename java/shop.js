const navshop = document.querySelector('.navshop')
const menui = document.getElementById('shopmenu')
menui.addEventListener('click',function(ev){
    navshop.classList.toggle('active')
    ev.preventDefault()
})
document.addEventListener('click',function(ev){
    if(!menui.contains(ev.target) && !navshop.contains(ev.target)){
        navshop.classList.remove('active')
    }
})
const cart = document.querySelector('.shoping-cart')
const shopi = document.getElementById('buy')
shopi.addEventListener('click',function(ev){
    cart.classList.toggle('appear')
    ev.preventDefault()
})
document.addEventListener('click',function(ev){
    if(!shopi.contains(ev.target) && !cart.contains(ev.target)){
        cart.classList.remove('appear')
    }
})
document.addEventListener('click',function(ev){
    if(ev.target.classList.contains("remove-item")){
        ev.target.parentElement.classList.add('removeit')
        setTimeout(function(){
            ev.target.parentElement.remove()
        },1000)
    }
})
const linku = document.getElementsByClassName('linku')
Array.from(linku).forEach(function(lin){
    lin.addEventListener('click',function(ev){
        ev.preventDefault()
    })
})
const purchase = document.querySelectorAll('.purchase')
purchase.forEach(function(beli){
    beli.addEventListener('click',function(ev){
        ev.preventDefault()
        const div = document.createElement('div')
        div.classList.add("cart-item")
        const img = document.createElement('img')
        img.src = ev.target.parentElement.parentElement.nextElementSibling.firstElementChild.src
        div.appendChild(img)
        const itemdes = document.createElement('div')
        itemdes.classList.add('itemdes')
        const h3 = document.createElement('h3')
        h3.innerHTML = ev.target.parentElement.parentElement.nextElementSibling.nextElementSibling.firstElementChild.innerHTML
        itemdes.appendChild(h3)
        const price = document.createElement('div')
        price.classList.add('item-price')
        price.innerHTML = ev.target.parentElement.parentElement.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.innerHTML
        itemdes.appendChild(price)
        div.appendChild(itemdes)
        const icon = document.createElement('img')
        icon.classList.add('remove-item')
        icon.src = 'img/trash.png'
        div.appendChild(icon)
        cart.appendChild(div)
    })
})
const addcart = document.querySelector('.right .addtocart')
addcart.addEventListener('click',function(ev){
    ev.preventDefault()
    const div = document.createElement('div')
    div.classList.add("cart-item")
    const img = document.createElement('img')
    img.src = ev.target.parentElement.parentElement.parentElement.previousElementSibling.src
    div.appendChild(img)
    const itemdes = document.createElement('div')
    itemdes.classList.add('itemdes')
    const h3 = document.createElement('h3')
    h3.innerHTML = ev.target.parentElement.parentElement.previousElementSibling.previousElementSibling.innerHTML
    itemdes.appendChild(h3)
    const price = document.createElement('div')
    price.classList.add('item-price')
    price.innerHTML = ev.target.previousElementSibling.innerHTML
    itemdes.appendChild(price)
    div.appendChild(itemdes)
    const icon = document.createElement('img')
    icon.classList.add('remove-item')
    icon.src = 'img/trash.png'
    div.appendChild(icon)
    cart.appendChild(div)
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
const prodcard = document.querySelectorAll('.produk-card')
const all = document.getElementById('All')
const diskon = document.getElementById('Diskon')
const biji = document.getElementById('Coffee-bean')
const snack = document.getElementById('Snacks')
const tool = document.getElementById('Tools')
all.addEventListener('click',function(ev){
    ev.preventDefault()
    if(all.classList.contains('filterkan') == false){
        diskon.classList.remove('filterkan')
        biji.classList.remove('filterkan')
        snack.classList.remove('filterkan')
        tool.classList.remove('filterkan')
        all.classList.add('filterkan')
        prodcard.forEach(function(card){
            card.style.display = 'block'
        })
    }
})
diskon.addEventListener('click',function(ev){
    ev.preventDefault()
    if(diskon.classList.contains('filterkan') == false){
        diskon.classList.add('filterkan')
        biji.classList.remove('filterkan')
        snack.classList.remove('filterkan')
        tool.classList.remove('filterkan')
        all.classList.remove('filterkan')
        prodcard.forEach(function(card){
            if(card.classList.contains('diskon')){
                card.style.display = 'block'
            }
            else{
                card.style.display = 'none'
            }
        })
    }
})
biji.addEventListener('click',function(ev){
    ev.preventDefault()
    if(biji.classList.contains('filterkan') == false){
        diskon.classList.remove('filterkan')
        biji.classList.add('filterkan')
        snack.classList.remove('filterkan')
        tool.classList.remove('filterkan')
        all.classList.remove('filterkan')
        prodcard.forEach(function(card){
            if(card.classList.contains('coffee-bean')){
                card.style.display = 'block'
            }
            else{
                card.style.display = 'none'
            }
        })
    }
})
snack.addEventListener('click',function(ev){
    ev.preventDefault()
    if(snack.classList.contains('filterkan') == false){
        diskon.classList.remove('filterkan')
        biji.classList.remove('filterkan')
        snack.classList.add('filterkan')
        tool.classList.remove('filterkan')
        all.classList.remove('filterkan')
        prodcard.forEach(function(card){
            if(card.classList.contains('snack')){
                card.style.display = 'block'
            }
            else{
                card.style.display = 'none'
            }
        })
    }
})
tool.addEventListener('click',function(ev){
    ev.preventDefault()
    if(tool.classList.contains('filterkan') == false){
        diskon.classList.remove('filterkan')
        biji.classList.remove('filterkan')
        snack.classList.remove('filterkan')
        tool.classList.add('filterkan')
        all.classList.remove('filterkan')
        prodcard.forEach(function(card){
            if(card.classList.contains('tool')){
                card.style.display = 'block'
            }
            else{
                card.style.display = 'none'
            }
        })
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