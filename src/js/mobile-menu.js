const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

const header = document.querySelector('header');

const open = () => {
  mobileMenu.style.opacity = "1.0";
  mobileMenu.style.visibility = "visible";
  mobileMenu.style.top = `${header.getBoundingClientRect().bottom}px`;
  mobileMenu.style.height = `${window.innerHeight - header.getBoundingClientRect().height}px`;
  document.body.scroll = "no";
  document.body.style.overflow = "hidden";
  hamburger.classList.add('is-active');
}

const close = () => {
  mobileMenu.style.opacity = "0";
  document.body.scroll = "yes";
  document.body.style.overflow = "auto";
  hamburger.classList.remove('is-active');
  setTimeout(() => {
    mobileMenu.style.visibility = "hidden";
  }, 150);
}

// Hamburger click
hamburger.addEventListener('click', e => {
  e.preventDefault();
  if(hamburger.classList.contains('is-active')){
    close();
  }else{
    open();
  }
});

// Close menu on clicking anchor links
mobileMenu.querySelectorAll("[href^='#'").forEach(link => {
  link.addEventListener('click', () => close());
});
