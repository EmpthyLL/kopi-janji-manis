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
const navshop = document.querySelector('.navshop')
const menui = document.getElementById('galmenu')
menui.addEventListener('click',function(ev){
    navshop.classList.toggle('active')
    ev.preventDefault()
})
document.addEventListener('click',function(ev){
    if(!menui.contains(ev.target) && !navshop.contains(ev.target)){
        navshop.classList.remove('active')
    }
})
const customer = ["Astrid","Erica","Juan dan Kila","Olla","Resti","Sarah","Tanya","Vio dan Yonki"]
const concus = document.querySelector('.customer')
customer.forEach(foto => {
    const div = document.createElement('div')
    div.classList.add('img-card')
    const img = document.createElement('img')
    img.src = `img/gallery/Customer/${foto}.jpg`
    const conta = document.createElement('div')
    conta.classList.add('conta')
    conta.appendChild(img)
    div.appendChild(conta)
    concus.appendChild(div)
});
const employee = ["Andrea","Anita","Babas","Daffa","Eddy","Farah","Hanna","Irana","Jamal","Jelly","Kiara","Kurnia","Nabila","Naya","Ruben","Sheila"]
const conemp = document.querySelector('.employees')
employee.forEach(foto => {
    const div = document.createElement('div')
    div.classList.add('img-card')
    const img = document.createElement('img')
    img.src = `img/gallery/Employees/${foto}.jpg`
    const conta = document.createElement('div')
    conta.classList.add('conta')
    conta.appendChild(img)
    div.appendChild(conta)
    conemp.appendChild(div)
});
const band = ["Atas Nama Senja","Laskar Purnama","Melati","Our Eureka","Suara Hujan","Suara Hujan","The Wanderer","Yang Tak Terdengar"]
const conban = document.querySelector('.bands')
band.forEach(foto => {
    const div = document.createElement('div')
    div.classList.add('img-card')
    const img = document.createElement('img')
    img.src = `img/gallery/Band/${foto}.jpg`
    const conta = document.createElement('div')
    conta.classList.add('conta')
    conta.appendChild(img)
    div.appendChild(conta)
    conban.appendChild(div)
});
document.addEventListener('click',function(ev){
    if(ev.target.parentElement.parentElement.classList.contains('img-card')){
        ev.target.previousElementSibling.classList.toggle('slide')
    }
})