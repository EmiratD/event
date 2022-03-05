//24.event
// Создать генератор цветовой палитры
// Изначально в приложении есть пять серых квадратов размером 100х100 и кнопка "Change colors".
// При каждом нажатии на кнопку цвета квадратов должны менять свой цвет на рандомный.
// Задание сдать либо ссылкой на песочницу, либо ссылкой на гитхаб

const box = document.querySelectorAll('.box'),
      btn = document.querySelector('.btn')


function backgroundColor (){
    const   r = Math.floor(Math.random()*255),
            g = Math.floor(Math.random()*255),
            b = Math.floor(Math.random()*255);
            f = Math.floor(Math.random()*255);
    box[0].style.background = `rgb(${f}, ${g}, ${b})`,
    box[1].style.background = `rgb(${g}, ${r}, ${b})`,
    box[2].style.background = `rgb(${b}, ${g}, ${r})`,
    box[3].style.background = `rgb(${r}, ${b}, ${f})`,
    box[4].style.background = `rgb(${g}, ${b}, ${r})`;  
    console.log(`${r}, ${g}, ${b}, ${f}`);
};

btn.addEventListener("click", backgroundColor);

