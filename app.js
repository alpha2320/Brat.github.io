const navSlide =()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');
    const navLink =document.querySelectorAll('.nav-link li')
    
    burger.addEventListener('click',()=>{
        //toggle
    nav.classList.toggle('nav-active');    
    
    //animate
    navLink.forEach((link, index)=> {
if(link.style.animation){
    link.style.animation ='';

}   else {
    link.style.animation =`navLinkFade 0.5s ease forwards ${index / 5 + 0.6}s`;

}     
    });

    burger.classList.toggle('toggle');
    
});
}
navSlide();