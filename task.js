/*Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число*/

// for (let i = 0; i < 11; i++) {
//   if (i == 0) {
//     console.log(`${i}-это ноль`);
//   } else if (i % 2 == 0) {
//     console.log(`${i}-четное число`);
//   } else {
//     console.log(`${i}-нечетное число`);
//   }
// }

/*Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]*/

// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(3, 2);
// console.log(arr);

/*Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3*/

// function arr(min, max) {
//   const array = [];
//   for (let i = 0; i < 5; i++) {
//     let j = Math.round(min - 0.5 + Math.random() * (max - min + 1));
//     array[i] = j;
//   }
//   return array;
// }

// /*1. Рассчитать сумму элементов этого массива*/
// let resarr = arr(0, 9);
// console.log(resarr);

// let sum = 0;
// for (let i = 0; i < resarr.length; i++) {
//   console.log((sum += resarr[i]));
// }

// console.log(`Сумма элементов массива равна: ${sum}`);

// /*2. Найти минимальное число*/
// function minnum(myarr) {
//   let arrlen = myarr.length;
//   minimum = myarr[arrlen - 1];
//   while (arrlen--) {
//     if (myarr[arrlen] < minimum) {
//       minimum = myarr[arrlen];
//     }
//   }
//   return minimum;
// }

// let minnumber = minnum(resarr);
// console.log(`Минимальное число в массиве: ${minnumber}`);

// /*3. Найти есть ли в этом массиве число 3*/
// function searchnum(myarr, number) {
//   for (let i = 0; i < myarr.length; i++) {
//     if (myarr[i] === number) {
//       return `В массиве {${myarr}} есть число ${number}`;
//     }
//   }
//   return `В массиве {${myarr}} нет чсила ${number}`;
// }

// let searchnumber = searchnum(resarr, 3);
// console.log(searchnumber);

/*Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx*/

let piramida = "x";
for (let i = 0; i <= 19; i++) {
  console.log(piramida);
  piramida = piramida + "x";
}
