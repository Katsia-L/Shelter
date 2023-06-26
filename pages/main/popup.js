
const popupBody = document.querySelector(".popup-body");
const openPopup = document.querySelectorAll(".open-popup");
const closePopup = document.querySelector(".close-popup");
const button = document.querySelector(".slider-button-arrow");

const img = document.querySelector(".popup-content-img");
const Name = document.querySelector(".popup-content-name");
const breed = document.querySelector(".popup-content-breed");
const description = document.querySelector(".popup-content-description");
const age = document.querySelector(".popup-content-age");
const inoculations = document.querySelector(".popup-content-inoculations");
const diseases = document.querySelector(".popup-content-diseases");
const parasites = document.querySelector(".popup-content-parasites");


function createPopup() {
    openPopup.forEach((openPopup) => { // Перебираем все кнопки
    openPopup.addEventListener("click", () => { // Для каждой вешаем обработчик событий на клик
        popupBody.classList.add("active"); // Добавляем класс "active" для фона
        document.body.classList.add("stop-scrolling")
    })
    });

    closePopup.addEventListener("click",() => { // Вешаем обработчик на крестик
        popupBody.classList.remove("active"); // Убираем активный класс с фона
        document.body.classList.remove("stop-scrolling")
    });

    document.addEventListener("click", (i) => { // Вешаем обработчик на весь документ
        if(i.target === popupBody) { // Если цель клика - фон, то:
            popupBody.classList.remove("active"); // Убираем активный класс с фона
            document.body.classList.remove("stop-scrolling")
        }
    });

    document.querySelector('.popup-content')
    .addEventListener('mouseout', function () {
    document.querySelector('.close-popup-btn').classList.add('hover')
    })

    document.querySelector('.popup-content')
    .addEventListener('mouseover', function () {
    document.querySelector('.close-popup-btn').classList.remove('hover')
    })

    if (openPopup.length > 0) {
        for (let index = 0; index < openPopup.length; index++) {
            openPopup[index].addEventListener("click", () => {
                popupBody.classList.add("active");
                createPopup()
            });
        }
    }
}
createPopup()



























/* popupBody.innerHTML = `
    <div class = "popup-body">
        <div class="popup">
            <div class="popup-btn"><button class="close-popup close-popup-btn "><img class = "close-img" src="../../Assets/icons/close.svg" alt="Vector"></div>
            <div class = "popup-content">
                <div class="popup-img">
                    <img class="popup-content-img" src="${petsCard[i].name}">
                </div>
                <div class="popup-text">
                    <h3 class="popup-content-text popup-content-name">${petsCard[i].name}</h3>
                    <h4 class="popup-content-text popup-content-breed">${petsCard[i].type} - ${petsCard[i].breed}</h4>
                    <h5 class="popup-content-text popup-content-description">${petsCard[i].description}</h5>
                    <ul class="popup-content-text">
                        <li class="popup-content-text popup-content-age"><strong>Age: </strong>${petsCard[i].age} </li>
                        <li class="popup-content-text popup-content-inoculations"><strong>Inoculations: </strong>${petsCard[i].inoculations} </li>
                        <li class="popup-content-text popup-content-diseases"><strong>Diseases: </strong>${petsCard[i].diseases} </li>
                        <li class="popup-content-text popup-content-parasites"><strong>Parasites: </strong>${petsCard[i].parasites} </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`;*/