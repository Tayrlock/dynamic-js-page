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

5) Фильмы должны быть отсортированы по алфавиту 

6) убрать рекламу
7) поменять фон на bg2
*/


"use strick"

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    }
    const filmList = document.querySelector('.promo__interactive-list'),
        inputFilm = document.querySelector('.add input'),
        btnAddFilm = document.querySelector('.add button'),
        checkboxLikeFilm = document.querySelector('.add [type=checkbox]');

    function filmsSort(arr) {
        arr.forEach((item, i) => {
            arr[i] = item.toLowerCase()
        });
        arr.sort()
    }
    // filmsSort(movieDB.movies)
    

    function addFilmsList(arr) {
        filmsSort(arr)
        // console.log(filmList)
        filmList.innerHTML = ''
        arr.forEach((item, i) => {
            filmList.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${item}
            <div class="delete"></div>
            </li>`
            deleteFilm(arr)
            
        });
        // console.log(movieDB.movies)
    }

    function addFilmToList(arr) {
        if (inputFilm.value) {
            (inputFilm.value.length > 21) ?
                arr.push(inputFilm.value.slice(0, 21) + '...') :
                arr.push(inputFilm.value)
            inputFilm.value = ''
            if (checkboxLikeFilm.checked) console.log('Любимый фильм')
        }
    }

    btnAddFilm.addEventListener('click', (e) => {
        e.preventDefault();
        addFilmToList(movieDB.movies)
        addFilmsList(movieDB.movies)
    })

    function deleteFilm(arr) {
        let btnDeleteFilm = document.querySelectorAll('.delete')
        btnDeleteFilm.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove()
                arr.splice(i, 1)
                addFilmsList(arr)
            })
        })
    }

    addFilmsList(movieDB.movies)
})