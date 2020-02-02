'use strict';


// пишу какие есть константы, и какие значения для них возможны (как с именами / цветом глаз / мантии у магов)
//"author":
//  "avatar": строка, адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} это число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д. Адреса изображений не повторяются

var OFFER_COUNT = 8;
//var TITLE: строка, заголовок предложения
//var ADDRESS = {{location.x}}, {{location.y}}; // например, "600, 350"
//var PRICE: число, стоимость
var TYPE = ['palace', 'flat', 'house', 'bungalo'];
var ROOMS = [1, 2, 3]
//var GUESTS = [1, 2, 3, 4]
//var CHECKIN = ['12:00', '13:00', '14:00'];
//var CHECKOUT: строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00
//var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
//var DESCRIPTION: строка с описанием,
//var PHOTOS: массив строк случайной длины, содержащий адреса фотографий "http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
//},

/* var LOCATION: {
"x": случайное число, координата x метки на карте. Значение ограничено размерами блока, в котором перетаскивается метка.
"y": случайное число, координата y метки на карте от 130 до 630.
}
} */
//X_MIN =
//X_MAX =
Y_MIN = 130;
Y_MAX = 630;

var offer = [];
for (var i = 0; i = OFFER_COUNT; i++) {
var location = {
  x:
  y:
}

var typeOfferIndex = Math.floor (Math.random() * TYPE.length);
var typeOffer = TYPE[typeOfferIndex];
console.log(typeOffer);

var roomsOfferIndex = Math.floor (Math.random() * ROOMS.length);
var roomsOffer = ROOMS[roomsOfferIndex];
console.log(roomsOffer);

offer[i] = {
  typeOffer,
  roomsOffer,
};

}

// ads - объявление
// добавляем 8 объявлений в DOM (в память)
var similarAdsTemplate = document.querySelector('#card') // ищем в html template c id 'card'
    .content // взяли содержимое
    .querySelector('.map__card popup'); // в содержимом нашли div, который будем клонировать

    var renderOffer = function (offer) {
      var offerElement = similarAdsTemplate.cloneNode(true);

      offerElement.querySelector('.popup__type').textContent = offer.typeOffer;
      offerElement.querySelector('.popup__text--capacity').textContent = offer.roomsOffer;


      return offerElement;
    }

// отрисовываем объявления из DOM.
// Отрисуйте сгенерированные DOM-элементы в блок .map__pins. Для вставки элементов используйте DocumentFragment.
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < OFFER_COUNT; i++) {
      fragment.appendChild(renderOffer(offer[i]));
    }
    map__pins.appendChild(fragment);

//У блока .map уберите класс .map--faded.
document.querySelector('.map').classList.remove('map--faded');



