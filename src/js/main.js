import smoothscroll from 'smoothscroll-polyfill';
import "../scss/index.scss";

smoothscroll.polyfill();

document.querySelectorAll("[href^='#']").forEach(el => {
  console.log(el);
  el.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById(el.getAttribute('href').slice(1)).scrollIntoView({behavior: 'smooth'});
  });
});

import './mobile-menu';