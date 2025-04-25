// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//     read(a, b) {
//         this.a = a;
//         this.b = b;
//     },
//     sum() {
//         const add = this[a] + this[b];
//         if (this.exist()) {
//             return add;
//         } else {
//             return 'No such properties';
//         }
//     },
//     mult() {
//         const result = this[a] * this[b];
//         if (this.exist()) {
//             return result;
//         } else {
//             return 'No such properties';
//         }
//     }
// }
// calculator.read(2, 3);
// console.log(calculator)
// console.log(calculator.sum()); // 5
// console.log(calculator.mult()); // 6
