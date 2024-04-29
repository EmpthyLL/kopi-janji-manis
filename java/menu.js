const search = document.querySelector(".search-bar");
const searchicon = document.getElementById("search");
const searchform = document.getElementById("search-form");
searchicon.addEventListener("click", function (ev) {
  search.classList.toggle("active");
  searchform.focus();
  ev.preventDefault();
});
document.addEventListener("click", function (ev) {
  if (!searchicon.contains(ev.target) && !search.contains(ev.target)) {
    search.classList.remove("active");
  }
});

const navshop = document.querySelector('.navshop')
const menui = document.getElementById('menumenu')
menui.addEventListener('click',function(ev){
    navshop.classList.toggle('active')
    ev.preventDefault()
})
document.addEventListener('click',function(ev){
    if(!menui.contains(ev.target) && !navshop.contains(ev.target)){
        navshop.classList.remove('active')
    }
})
const itemDetail = document.querySelector('#item-detail')
const menufood = document.querySelectorAll('.menuaja')
const modalimg = document.querySelector('.imginmodal')
const menuname = document.querySelector('.product-content h3')
const hargatamp = document.querySelector('.right .price')

menufood.forEach(function(eye){
    eye.addEventListener('click',function(ev){
        ev.preventDefault()
        if(ev.target.tagName == 'DIV'){
          itemDetail.style.display = 'flex'
          modalimg.src = ev.target.firstElementChild.nextElementSibling.src
          menuname.innerHTML = ev.target.firstElementChild.firstElementChild.innerHTML
          hargatamp.innerHTML = ev.target.firstElementChild.firstElementChild.nextElementSibling.innerHTML
        }
        else if(ev.target.tagName == 'IMG'){
          itemDetail.style.display = 'flex'
          modalimg.src = ev.target.src
          menuname.innerHTML = ev.target.previousElementSibling.firstElementChild.innerHTML
          hargatamp.innerHTML = ev.target.previousElementSibling.firstElementChild.nextElementSibling.innerHTML
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
const menulist = document.querySelectorAll('.menuaja')
const all = document.getElementById('All')
const minuman = document.getElementById('Minuman')
const makanan = document.getElementById('Makanan')
const cemilan = document.getElementById('Cemilan')
const dessert = document.getElementById('Desert')
all.addEventListener('click',function(ev){
    if(all.classList.contains('filterkan') == false){
        minuman.classList.remove('filterkan')
        makanan.classList.remove('filterkan')
        cemilan.classList.remove('filterkan')
        dessert.classList.remove('filterkan')
        all.classList.add('filterkan')
        ev.preventDefault()
        menulist.forEach(function(card){
          card.style.display = 'flex'
        })
    }
})
minuman.addEventListener('click',function(ev){
    if(minuman.classList.contains('filterkan') == false){
      minuman.classList.add('filterkan')
      makanan.classList.remove('filterkan')
      cemilan.classList.remove('filterkan')
      dessert.classList.remove('filterkan')
      all.classList.remove('filterkan')
      ev.preventDefault()
      menulist.forEach(function(card){
          if(card.classList.contains('minuman')){
            card.style.display = 'flex'
          }
          else{
            card.style.display = 'none'
          }
      })
    }
})
makanan.addEventListener('click',function(ev){
    if(makanan.classList.contains('filterkan') == false){
      minuman.classList.remove('filterkan')
      makanan.classList.add('filterkan')
      cemilan.classList.remove('filterkan')
      dessert.classList.remove('filterkan')
      all.classList.remove('filterkan')
      ev.preventDefault()
      menulist.forEach(function(card){
          if(card.classList.contains('makanan')){
            card.style.display = 'flex'
          }
          else{
            card.style.display = 'none'
          }
      })
    }
})
cemilan.addEventListener('click',function(ev){
    if(cemilan.classList.contains('filterkan') == false){
      minuman.classList.remove('filterkan')
      makanan.classList.remove('filterkan')
      cemilan.classList.add('filterkan')
      dessert.classList.remove('filterkan')
      all.classList.remove('filterkan')
      ev.preventDefault()
      menulist.forEach(function(card){
          if(card.classList.contains('cemilan')){
            card.style.display = 'flex'
          }
          else{
            card.style.display = 'none'
          }
      })
    }
})
dessert.addEventListener('click',function(ev){
    if(dessert.classList.contains('filterkan') == false){
      minuman.classList.remove('filterkan')
      makanan.classList.remove('filterkan')
      cemilan.classList.remove('filterkan')
      dessert.classList.add('filterkan')
      all.classList.remove('filterkan')
      ev.preventDefault()
      menulist.forEach(function(card){
          if(card.classList.contains('dessert')){
            card.style.display = 'flex'
          }
          else{
            card.style.display = 'none'
          }
      })
    }
})