
let showmenu = document.querySelector('.showmenu ')
let btnclose = document.querySelector('.btn-close')
showmenu.addEventListener('click', function(){
    if(document.querySelector(".offcanvas").classList.contains('show')){
        showmenu.style.visibility = "hidden"
      }
     
})
btnclose.addEventListener('click', function(){
    showmenu.style.visibility = "visible"
})
 






let listblock = document.querySelectorAll('.listblock')



let scrollTop = document.querySelector('.scroll_btn')

const btnVisibility = () => {
    if (window.scrollY > 50) {
        scrollTop.style.visibility = "visible";
    } else {
        scrollTop.style.visibility = "hidden";
    }
};
document.addEventListener("scroll", () => {
    btnVisibility();
});
scrollTop.addEventListener('click' , function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
 
 })
