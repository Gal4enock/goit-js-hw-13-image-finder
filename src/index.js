import './styles.css';
import handlebars from 'handlebars';
import { alert, notice, info, success, error } from '@pnotify/core';
import getImages from './apiService.js';
import pars from './tamplates/pars.hbs';
import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';

import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/dist/basicLightbox.min.css'


const input = document.querySelector('[name="query"]');
const galleryList = document.querySelector('.gallery');
const btnSearch = document.querySelector('.btn-search');
const btnMore = document.querySelector('.btn-more');
// let word = '';
// console.log(position);
let page = 0;

// console.dir(input);

const renderGallery = function () {
  galleryList.textContent = ""
  page = 1
  getImages(input)
  .then(arr => {
    arr.forEach(el => galleryList.insertAdjacentHTML('beforeend', pars(el)));
  })
  .catch (err => {
  alert ("Не верный запрос!")
  })
}
console.log(window.innerHeight);

const renderBigGallery = function () {
  
  getImages(input)
  .then(arr => {
    const position = document.documentElement.offsetHeight;
    console.log(position);
    arr.forEach(el => galleryList.insertAdjacentHTML('beforeend', pars(el)));
  
      window.scrollTo({
        top: position - 100,
        behavior: 'smooth'
    });
    })
  page +=1
}
btnSearch.addEventListener('click', renderGallery);

btnMore.addEventListener('click', renderBigGallery);

galleryList.addEventListener('click', ((e) => {

  console.dir(e.target)
  console.dir(e.target.dataset.sourse);
  
  const instance = basicLightbox.create(`
      <img src="${e.target.dataset.sourse}" width="800" height="600" alt="{{tags}}" />
`)
  instance.show()
  
}))
