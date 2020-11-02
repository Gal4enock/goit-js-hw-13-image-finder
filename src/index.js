import './styles.css';
import handlebars from 'handlebars';
import { alert, notice, info, success, error } from '@pnotify/core';
import getImages from './apiService.js';
import pars from './tamplates/pars.hbs';

const input = document.querySelector('[name="query"]');
const galleryList = document.querySelector('.gallery');
const btnSearch = document.querySelector('.btn-search');
const btnMore = document.querySelector('.btn-more');

// let word = '';

let page = 0;

// console.dir(input);

const renderGallery = function () {
  galleryList.textContent = ""
  getImages(input)
    .then(arr => {
  arr.forEach(el => galleryList.insertAdjacentHTML('beforeend', pars(el)));
  })
  page = 1
}

const renderBigGallery = function () {

  getImages(input)
    .then(arr => {
  arr.forEach(el => galleryList.insertAdjacentHTML('beforeend', pars(el)));
  })
  page +=1
}

btnSearch.addEventListener('click', renderGallery);
btnMore.addEventListener('click', renderBigGallery);
