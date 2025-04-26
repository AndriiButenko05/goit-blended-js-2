// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.
// Скористайтесь цим прикладом виклику функції для перевірки її роботи:

// function findLongestWord(string){
//     const newArr = string.split(" ");
//     let findLongestWord = newArr[0];
//     for (let i = 0; i < newArr.length; i++){
//         if (newArr[i].length > findLongestWord.length) {
//             findLongestWord = newArr[i];
//         }
//     }
//     return findLongestWord;
// }
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'