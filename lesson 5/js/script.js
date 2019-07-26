let menuItem    = document.querySelectorAll('.menu-item'),
    adv         = document.querySelector('.adv'),
    title       = document.querySelector('.title'),
    body        = document.querySelector('body'),
    review      = document.querySelector('.prompt'),
    menu        = document.querySelector('.menu'),
    column      = document.querySelectorAll('.column')[1];


menu.replaceChild(menuItem[2],menuItem[1]);
menu.insertBefore(menuItem[1],menuItem[3]);
body.style.backgroundImage ='URL(./img/apple_true.jpg)';
column.removeChild(adv);
title.textContent = 'Мы продаем только подленную технику Apple';
review.textContent = prompt('Как вы относитесь к технике Apple');





