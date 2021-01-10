const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

const header = document.querySelector('header');

hamburger.addEventListener('click', e => {

  e.preventDefault();

  if(hamburger.classList.contains('is-active')){
    mobileMenu.style.opacity = "0";
    document.body.scroll = "yes";
    document.body.style.overflow = "auto";
    hamburger.classList.remove('is-active');
    setTimeout(() => {
      mobileMenu.style.visibility = "hidden";
    }, 150);
  }else{
    mobileMenu.style.opacity = "1.0";
    mobileMenu.style.visibility = "visible";
    mobileMenu.style.top = `${header.getBoundingClientRect().bottom}px`;
    mobileMenu.style.height = `${window.innerHeight - header.getBoundingClientRect().height}px`;
    document.body.scroll = "no";
    document.body.style.overflow = "hidden";
    hamburger.classList.add('is-active');
  }

});