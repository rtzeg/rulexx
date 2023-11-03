// бургер
let bg_btn = document.querySelector('.burger');
let menu = document.querySelector('.burger_menu');
let all_lines = document.querySelectorAll('.burger_center')


bg_btn.addEventListener('click', function(){
    menu.classList.toggle('active')
    menu.classList.toggle('header_li_right')
    all_lines[0].classList.toggle('top')
    all_lines[2].classList.toggle('bot')
    all_lines[1].classList.toggle('mid')
})

// якоря
let links = document.querySelectorAll('.header_center_item');
let f_links = document.querySelectorAll('.footer_center_item')
let b_links = document.querySelectorAll('.menu_link')
let sec3 = document.querySelector('.sc3')
let sec4 = document.querySelector('.sc4')
let sec3_top = document.querySelector('.sc3_top')
let sec4_top =document.querySelector('.sc4_top')
let pos_sec3 = sec3.offsetTop
let pos_sec4 = sec4.offsetTop
let sec3_top_pos = sec3_top.offsetHeight
let sec4_top_pos =sec4_top.offsetHeight
links[1].addEventListener('click', (event)=>{
        event.preventDefault()
        window.scrollTo({top: pos_sec3, left: 0, behavior: "smooth"})
})
f_links[1].addEventListener('click', (event)=>{
    event.preventDefault()
    window.scrollTo({top: pos_sec3, left: 0, behavior: "smooth"})
})
b_links[1].addEventListener('click', (event)=>{
    event.preventDefault()
    window.scrollTo({top: pos_sec3 - sec3_top_pos, left: 0, behavior: "smooth"})
})
links[0].addEventListener('click', (event)=>{
    event.preventDefault()
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
})
f_links[0].addEventListener('click', (event)=>{
    event.preventDefault()
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
})
b_links[0].addEventListener('click', (event)=>{
    event.preventDefault()
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
})
links[2].addEventListener('click', (event)=>{
    event.preventDefault()
    window.scrollTo({top: pos_sec4, left: 0, behavior: "smooth"})
})
f_links[2].addEventListener('click', (event)=>{
    event.preventDefault()
    window.scrollTo({top: pos_sec4, left: 0, behavior: "smooth"})
})
b_links[2].addEventListener('click', (event)=>{
    event.preventDefault()
    window.scrollTo({top: pos_sec4 - 60, left: 0, behavior: "smooth"})
})
console.log(sec4_top_pos);
// a.addEventListener('click', (event)=>{
//     event.preventDefault()
//     // window.scrollBy({top: 500, left: 0})
//     window.scrollTo({top: pos_sec13 - 80, left: 0, behavior: "smooth"})
// })
