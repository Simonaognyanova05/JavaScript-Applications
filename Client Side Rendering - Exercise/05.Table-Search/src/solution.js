import {render} from '../node_modules/lit-html/lit-html.js';
import { getData } from './api.js';
import { template } from './template.js';

let result = await getData();

let tBody = document.querySelector('tbody');

render(template(result), tBody);

let td = Array.from(document.querySelectorAll('td'));
let inputText = document.getElementById('searchField');
let btn = document.querySelector('#searchBtn');

btn.addEventListener('click', (e) => {
   e.preventDefault();
   for(let el of td){
      let text = inputText.value.toLowerCase();
      let names = el.textContent.toLowerCase();
      if(names.includes(text)){
         let parent = el.parentElement;
         parent.classList.add('select');
      }
   }
   inputText.value = '';
})