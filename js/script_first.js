/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
получаем контекст, ищем в массиве, удаляем из массива
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
},
    imgAdv = document.querySelectorAll('div.promo__adv img'),
    genre = document.querySelector('.promo__genre'),
    poster = document.querySelector('.promo__bg'),
    movieList = document.querySelector('.promo__interactive-list'),
    seenFilm = document.querySelector('.adding__input'),
    btnSeenFilm = document.querySelector('.add button'),
    
    inputCheckBox = document.querySelector('.add input[type=checkbox]');

// console.log(btnDeleteFilm)

function addFilms() {
    movieDB.movies.sort()
    movieList.innerHTML = ''
    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `<li class="promo__interactive-item"> ${i + 1}. ${film}
    <div class="delete"></div>
    </li>`
    })
}



// function deleteFilm() {
//     let a = btnDeleteFilm.previousSibling.textContent
//         console.log(a)
// }

addFilms();

btnSeenFilm.addEventListener('click', (e) => {
    e.preventDefault();
    (seenFilm.value.length > 21) ? movieDB.movies.push(seenFilm.value.substr(0, 21) + '...') : movieDB.movies.push(seenFilm.value);
    if (inputCheckBox.checked) { console.log('Любимый фильм') }
    addFilms()
})



imgAdv.forEach(item => item.remove())
genre.textContent = 'Драма'
poster.style.backgroundImage = 'url(/img/bg.jpg)'


// console.log(movieList)


//сортировка и вывод списка фильмов
// const movieList = document.querySelectorAll('ul.promo__interactive-list li')
// movieDB.movies.sort()
// movieList.forEach((film, i) => {
//     film.textContent = `${i + 1}. ${movieDB.movies[i]}`
// })
const btnDeleteFilm = document.querySelectorAll('.delete');
btnDeleteFilm.forEach((btn, i) => {
    console.log(btn)
    btn.addEventListener('click', () => {
        console.log('work')
    })
})
// document.querySelectorAll('.delete').forEach((btn, i) => {
//     console.log(btn)
//     btn.addEventListener('click', () => {
//         console.log(btn)
//         // btn.parentElement.remove();
//         // movieDB.movies.splice(i, 1);
//     });
// });