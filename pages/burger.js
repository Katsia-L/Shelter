const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-menu');
const logo = document.querySelector('.header-logo');
const burgerBody = document.querySelector('.start-burger');
const headerContent = document.querySelector('.header-content');

burger.addEventListener('click', function(){
	burger.classList.toggle('active');
    nav.classList.toggle('active');
    logo.classList.toggle('active');
    headerContent.classList.toggle('active');
    document.body.classList.toggle('stop-scrolling');
    burgerBody.classList.toggle('burger-body');
})

document.addEventListener("click", (i) => {
    if(i.target === burgerBody) {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        logo.classList.toggle('active');
        headerContent.classList.toggle('active');
        document.body.classList.toggle('stop-scrolling');
        burgerBody.classList.toggle('burger-body');
    }
});