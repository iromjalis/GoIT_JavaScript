// Hoisting
// В языках программирования, в том числе в JavaScript, код исполняется в две фазы.

// Фаза компиляции, интерпретации или оценки (compile time, evaluation time) - подготовка перед исполнением кода, проверка валидности синтаксиса исходного кода.

// Во время этой фазы компилятор или интерпретатор находит синтаксические ошибки, ошибки типизации и т. д. То есть код еще не выполняется, только оценивается. Если эта фаза прошла успешно, это как минимум значит что в коде нет синтаксических ошибок и его можно запустить на исполнение.

// Фаза исполнения (runtime) - скрипт начинает исполняться, выполняются инструкции вызовов функций и оценки выражений, происходит поиск необходимых идентификаторов в соответствующих областях видимости и тому подобное.

// Если эта фаза завершилась успешно, значит скрипт написан без явных ошибок и закончил свою работу. На этой фазе могут быть ошибки связанные с отсутствующими свойствами и переменными, преобразованием типов и т. д., то есть что-то, что происходит только во время выполнения кода.

// Попробуйте выполнить следующий код. Так как мы сделали опечатку и вместо const пытаемся объявить переменную value ключевым словом cos, на фазе компиляции будет выявлена синтаксическая ошибка и фаза исполнения даже не запустится. В консоли мы сразу увидим сообщение об ошибке.

// console.log('Этого сообщения не будет в консоли.');

// cos value = 5;
// Copy
// Поднятие переменных (hoisting) - это механизм интерпретатора, который, до фазы исполнения кода, поднимает объявления переменных в начало области видимости (блочной или функции) в которой они были объявлены.

// Именно поэтому работает function declaration и так странно ведут себя переменные объявленные используя var - их объявления поднимаются в начало области видимости функции в которой они были объявлены.

// // Вот поэтому мы используем let или const

// console.log(value); // undefined
// value = 5;

// if (true) {
//   console.log(value); // 5
//   var value = 10;
//   console.log(value); // 10
// }

// value = 15;
// console.log(value); // 15
// Copy
// Переменные объявленные используя let или const так же поднимаются, но при этом подчиняются блочной области видимости, ничем не инициализируются по умолчанию и не доступны для обращения до того места в коде где были объявлены в коде.

// // В каждой области видимости будет создана своя, независимая переменная value

// console.log(value); // ReferenceError: value is not defined
// const value = 5;
// console.log(value); // 5

// if (true) {
//   console.log(value); // ReferenceError: value is not defined
//   const value = 10;
//   console.log(value); // 10
// }

// console.log(value); // 5
// Copy
// Более детально про поднятие идентификаторов и ключевые словах var, let и const читайте в этой статье.
//!==================
// (function () {
//   console.log('hello');
// })();

// (() => {
//   console.log('hello-hello');
// })();

// !(function () {
//   console.log('hello5');
// })();
//!===============

// Task 3

// const findBestEmployee=(employee)=>{
//   const arr = Object.entries(employee)
//   let best=0
//   let name
//   for(let item of arr){
//     console.log(item)
//     if (item[1] > best){
//       best = item[1]
//       name=item[0]
      
//     }
//   }return name
// }

// const findBestEmployee = (employers)=>{
//   return Object.entries(employers).sort((a,b)=> b[1] - a[1])[0][0]
// }

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
//  ); // lorence
// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango
// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux
function getObj(){
  return this
}

const city1 = {
  name: 'London',
  getCity(){
    return this
  }
}
console.log(city1.getCity())

const city2 = {
  name: 'Oslo',
}
// Task 4
// У нас есть объект, нужно создать функцию, которая будет его перебирать
// и если значение какого-то поля это массив (сделать проверку на массив),
// в таком случае добавляем к объекту obj1 поля в формате 'I like элемент массива', после вызова функции мы должны
// получить объект вот в таком виде
// {
//     'I like c++': "c++",
//     'I like java': "java",
//     'I like js': "js",
//     'i like my work': true,
//     'my name': "John",
//     'programming languages': ['js', 'java', 'c++']
// }

const obj1 = {
  'my name': 'John',
  'i like my work': true,
  'programming languages': ['js', 'java', 'c++'],
};
obj1['ira'] = '32'
function rend(obj){
  for(let elem in obj){
    if (Array.isArray(obj[elem])) {
      console.log(obj[elem])
for(const item of obj[elem]){
  obj[`I like ${item}`] = item
}
    }
  }

}
rend(obj1)
console.table(obj1)
// вызов функции для проверки работоспособности
// getArr('programming languages')

// Task 5
// Напиши функцию которая будет считать факториал числа, обязательно использовать рекурсию

// Task 6
// Напиши функцию, которая будет принимать 2 параметра, первый это объект user2 который будем перебирать
// и второй это строка - имя ключа, который лежит в последнем по вложенности объекте
// Результат вызова функции - это значение ключа, который мы передаем вторым параметром в функцию
// Перебираем сначала конкретный объект, когда напишите функцию для объекта user2, можно будет ее оптимизировать
// под разные объекты

// const user2 = {
//   name: 'Hacker',
//   userTechnologies: {
//     frameworks: {
//       react: 'this is library',
//       vue: 'i like this frame',
//       angular: 'maybe sometime',
//       libraries: {
//         axios: 5,
//         lodash: 4,
//         pnotify: 3,
//       },
//     },
//   },
// };

// console.log(getNestedName(user2, 'axios'))  // 5
// console.log(getNestedName(user2, 'lodash'))  // 4
// console.log(getNestedName(user2, 'pnotify')) // 3)
