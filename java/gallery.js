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
    const inner = document.createElement('div')
    inner.classList.add('inner')
    const front = document.createElement('div')
    front.classList.add('frontside')
    const imgfront = document.createElement('img')
    imgfront.src = `img/gallery/Customer/${foto}.png`
    const clickme = document.createElement('div')
    clickme.appendChild(document.createTextNode('*Click Me'))
    clickme.classList.add('clickit')
    front.appendChild(imgfront)
    front.appendChild(clickme)
    inner.appendChild(front)
    const back = document.createElement('div')
    back.classList.add('backside')
    const imgback = document.createElement('img')
    imgback.src = `img/Polaroid back.png`
    back.appendChild(imgback)
    const quote = document.createElement('div')
    quote.classList.add('quote')
    quote.appendChild(document.createTextNode(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi harum ex quisquam corporis repudiandae. ~${foto}`))
    back.appendChild(quote)
    inner.appendChild(back)
    inner.appendChild(back)
    div.appendChild(inner)
    concus.appendChild(div)
});
const employee = ["Andrea","Anita","Babas","Daffa","Eddy","Farah","Hanna","Irana","Jamal","Jelly","Kiara","Kurnia","Nabila","Naya","Ruben","Sheila"]
const conemp = document.querySelector('.employees')
employee.forEach(foto => {
    const div = document.createElement('div')
    div.classList.add('img-card')
    const inner = document.createElement('div')
    inner.classList.add('inner')
    const front = document.createElement('div')
    front.classList.add('frontside')
    const imgfront = document.createElement('img')
    imgfront.src = `img/gallery/Employees/${foto}.png`
    const clickme = document.createElement('div')
    clickme.appendChild(document.createTextNode('*Click Me'))
    clickme.classList.add('clickit')
    front.appendChild(imgfront)
    front.appendChild(clickme)
    inner.appendChild(front)
    const back = document.createElement('div')
    back.classList.add('backside')
    const imgback = document.createElement('img')
    imgback.src = `img/Polaroid back.png`
    back.appendChild(imgback)
    const quote = document.createElement('div')
    quote.classList.add('quote')
    quote.appendChild(document.createTextNode(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi harum ex quisquam corporis repudiandae. ~${foto}`))
    back.appendChild(quote)
    inner.appendChild(back)
    div.appendChild(inner)
    conemp.appendChild(div)
});
const band = ["Atas Nama Senja","Laskar Purnama","Melati","Our Eureka","Suara Hujan","The Wanderer","Yang Tak Terdengar"]
const conban = document.querySelector('.bands')
band.forEach(foto => {
    const div = document.createElement('div')
    div.classList.add('img-card')
    const inner = document.createElement('div')
    inner.classList.add('inner')
    const front = document.createElement('div')
    front.classList.add('frontside')
    const imgfront = document.createElement('img')
    imgfront.src = `img/gallery/Band/${foto}.png`
    const clickme = document.createElement('div')
    clickme.appendChild(document.createTextNode('*Click Me'))
    clickme.classList.add('clickit')
    front.appendChild(imgfront)
    front.appendChild(clickme)
    inner.appendChild(front)
    const back = document.createElement('div')
    back.classList.add('backside')
    const imgback = document.createElement('img')
    imgback.src = `img/Polaroid back.png`
    back.appendChild(imgback)
    const quote = document.createElement('div')
    quote.classList.add('quote')
    quote.appendChild(document.createTextNode(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi harum ex quisquam corporis repudiandae. ~${foto}`))
    back.appendChild(quote)
    inner.appendChild(back)
    div.appendChild(inner)
    conban.appendChild(div)
});
document.addEventListener('click',function(ev){
    if(ev.target.parentElement.parentElement.parentElement.classList.contains('img-card')){
        ev.target.parentElement.parentElement.parentElement.classList.toggle('turn')
    }
})

const imgpola = document.querySelectorAll('.img-card img')
const imgcard = document.querySelectorAll('.img-card')
const medium = document.getElementById('Medium')
const small = document.getElementById('Small')
const large = document.getElementById('Large')
const extralarge = document.getElementById('XLarge')
const quotes = document.querySelectorAll('.quote')
const clickit = document.querySelectorAll('.clickit')
small.addEventListener('click',function(ev){
    ev.preventDefault()
    if(small.classList.contains('filterkan') == false){
        small.classList.add('filterkan')
        large.classList.remove('filterkan')
        extralarge.classList.remove('filterkan')
        medium.classList.remove('filterkan')
        imgpola.forEach(function(polaroid){
            polaroid.style.width = '21rem'
        })
        imgcard.forEach(function(card){
            card.style.margin = '0 2rem 0'
            card.style.margin = '0 0rem 0rem 0'
            card.style.marginBottom = '3rem'
        })
        quotes.forEach(function(quote){
            quote.style.width = '21rem'
            quote.style.fontSize = '1.2rem'
            quote.style.left = '1rem'
            quote.style.bottom = '5.5rem'
        })
        clickit.forEach(function(click){
            click.style.fontSize = '1rem'
            click.style.left = '2rem'
            click.style.top = '2.9rem'
        })
    }
})
medium.addEventListener('click',function(ev){
    ev.preventDefault()
    if(medium.classList.contains('filterkan') == false){
        small.classList.remove('filterkan')
        large.classList.remove('filterkan')
        extralarge.classList.remove('filterkan')
        medium.classList.add('filterkan')
        imgpola.forEach(function(polaroid){
            polaroid.style.width = '23rem'
        })
        imgcard.forEach(function(card){
            card.style.margin = '0 2rem 2rem 0'
            card.style.marginBottom = '6rem'
        })
        quotes.forEach(function(quote){
            quote.style.width = '23rem'
            quote.style.fontSize = '1.3rem'
            quote.style.left = '0rem'
            quote.style.bottom = '3rem'
        })
        clickit.forEach(function(click){
            click.style.fontSize = '1.3rem'
            click.style.left = '1rem'
            click.style.top = '3rem'
        })
    }
})
large.addEventListener('click',function(ev){
    ev.preventDefault()
    if(large.classList.contains('filterkan') == false){
        small.classList.remove('filterkan')
        large.classList.add('filterkan')
        extralarge.classList.remove('filterkan')
        medium.classList.remove('filterkan')
        imgpola.forEach(function(polaroid){
            polaroid.style.width = '25rem'
        })
        imgcard.forEach(function(card){
            card.style.margin = '0 2rem 0'
            card.style.margin = '0 4rem 4rem 0'
            card.style.marginBottom = '9rem'
        })
        quotes.forEach(function(quote){
            quote.style.width = '25rem'
            quote.style.fontSize = '1.4rem'
            quote.style.left = '0rem'
            quote.style.bottom = '0rem'
        })
        clickit.forEach(function(click){
            click.style.fontSize = '1.4rem'
            click.style.left = '1.2rem'
            click.style.top = '3.2rem'
        })
    }
})
extralarge.addEventListener('click',function(ev){
    ev.preventDefault()
    if(extralarge.classList.contains('filterkan') == false){
        small.classList.remove('filterkan')
        large.classList.remove('filterkan')
        extralarge.classList.add('filterkan')
        medium.classList.remove('filterkan')
        imgpola.forEach(function(polaroid){
            polaroid.style.width = '28rem'
        })
        imgcard.forEach(function(card){
            card.style.margin = '0 2rem 0'
            card.style.margin = '0 6rem 6rem 0'
            card.style.marginBottom = '12rem'
        })
        quotes.forEach(function(quote){
            quote.style.width = '28rem'
            quote.style.fontSize = '1.55rem'
            quote.style.left = '0rem'
            quote.style.bottom = '-4rem'
        })
        clickit.forEach(function(click){
            click.style.fontSize = '1.5rem'
            click.style.left = '1.2rem'
            click.style.top = '3.7rem'
        })
    }
})