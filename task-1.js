'use strict';

// ==============================================================

// let name = 'Генератор защитного поля';
// let price = 1000;
//
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);
//
// price = 2000;
//
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// ==============================================================

// const total = 100;
// const ordered = 80;
//
// if(total <= ordered) {
//     console.log("На складе недостаточно твоаров!");
// } else {
//     console.log("Заказ оформлен, с вами свяжется менеджер");
// }
// ==============================================================

// const ADMIN_PASSWORD = 'asd';
// let message = prompt("Введите пароль");
//
// if (message === null) {
//     alert('Отменено пользователем!');
// } else if (message === ADMIN_PASSWORD) {
//     alert('Добро пожаловать!');
// } else {
//     alert('Доступ запрещен, неверный пароль!');
// }

// ==============================================================

// let credits = 23580;
// let pricePerDroid = 300;
// let value = Number(prompt('Введите количество'));
// let totalPrice = pricePerDroid * value;
// let leftCredits = credits - totalPrice;
//
// if ( isNaN(value) && value === null) {
//     alert('Отменено пользователем!');
// } else if (totalPrice <= credits) {
//     alert(`Вы купили ${value} дроидов, на счету осталось ${leftCredits} кредитов.`);
// } else {
//     alert('Недостаточно средств на счету!');
// }

// ==============================================================

// let inputCountry = prompt('Введите страну');
// let strLower = inputCountry.toLowerCase();
// // console.log(country);
// let country = strLower[0].toUpperCase() + strLower.substring(1);
// console.log(country);
// let credits;
//
// switch (country) {
//     case 'Китай':
//         credits = 100;
//         alert(`Доставка в ${country} будет стоить ${credits} кредитов`);
//         break;
//     case 'Чили':
//         credits = 250;
//         alert(`Доставка в ${country} будет стоить ${credits} кредитов`);
//         break;
//     case 'Австралия':
//         credits = 170;
//         alert(`Доставка в ${country} будет стоить ${credits} кредитов`);
//         break;
//     case 'Индия':
//         credits = 80;
//         alert(`Доставка в ${country} будет стоить ${credits} кредитов`);
//         break;
//     case 'Ямайка':
//         credits = 120;
//         alert(`Доставка в ${country} будет стоить ${credits} кредитов`);
//         break;
//
//     default:
//         alert('В вашей стране доставка не доступна');
// }

// ==============================================================

// let total = 0;
//
// do {
//    let inputNumber = prompt('Введите число');
//
//     if (inputNumber === null) {
//         alert(`Общая сумма чисел равна ${total}`);
//         break;
//     }
//
//     if (isNaN(inputNumber)) {
//         alert('Было введено не число, попробуйте еще раз');
//     } else {
//         total += Number(inputNumber);
//     }
//
// } while (true);

