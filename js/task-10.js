// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.
// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою 
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
//   ];
// function calcTotalPrice(fruits, fruitName) {
//     let sum = 0;
//     for (const item of fruits) {
//         if (item.name === fruitName) {
//             sum += item.price * item.quantity;
  
//         } 
//     }
//         return`${fruitName}: ${sum}`;
// }
// console.log(calcTotalPrice(fruits, "Банан")); // 1250
// console.log(calcTotalPrice(fruits, "Груша")); // 700
// console.log(calcTotalPrice(fruits, "Яблуко")); // 315
// console.log(calcTotalPrice(fruits, "Виноград")); // 1320