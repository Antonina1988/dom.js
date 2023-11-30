'use strict'
const nature = [
    {
  
    }
];
const fonEl = document.createElement('header');
fonEl.classList.add('fon')
document.body.append(fonEl);

const like = document.createElement('i');
like.classList.add('fa-regular');
like.classList.add('fa-heart');
like.classList.add('like');
fonEl.prepend(like);



const userMagicEl = document.createElement('h1');
userMagicEl.classList.add('userMagic');
fonEl.append(userMagicEl);
userMagicEl.textContent= 'Magic mountains';

const infoEl = document.createElement('div');
infoEl.classList.add('info');
document.body.append(infoEl);

const userNatureEl = document.createElement('h3');
userNatureEl.classList.add('userNature');
userNatureEl.textContent = 'nature';
infoEl.append(userNatureEl);

const userTextEl = document.createElement('p');
userTextEl.classList.add('userText');
userTextEl.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, molestias nostrum consectetur aliquam illum eos ducimus, saepe totam iure tempore quas nemo reiciendis voluptate? Itaque animi rerum debitis necessitatibus reiciendis?';
infoEl.append(userTextEl);

const dataEl = document.createElement('div');
dataEl.classList.add('date');
document.body.append(dataEl);

const dateElem = document.createElement('p');
dateElem.textContent = '2023.23.11';
dataEl.append(dateElem);


