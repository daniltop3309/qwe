// let num = 1;
// while (num < 101) {
//     console.log(num);
//     num ++
// }


// let num = 11;
// while (num < 34) {
//     console.log(num);
//     num ++
// }


// for (a = 0; a <= 100; a ++) {
//     if (a % 2 ==0) {
//     console.log(a)
//     }
// }


// let result = 0
// for (a = 1; a <= 100; a ++){
//     result += a;
// }
// console.log(result)


// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }


// let result = 0;
// let arr = [1, 2, 3, 4, 5];
// for (let a = 0; a < arr.length; a ++){
//     result = result + arr[a];
// }
// console.log(result);


// let obj = {
//     green: "Зеленый",
//     red: "Красный",
//     blue: "Голубой"
// };
// for (let key in obj) {
//     console.log(obj[key])
// }


// let obj = {
//     "Коля": "200",
//     "Вася": "300",
//     "Петя": "400"
// };
// for (let key in obj) {
//     console.log(key + ' - зарплата ' + obj[key] + ' долларов')
// }


// const arr = [2, 5, 9, 15, 0, 4];
// for (let i in arr) {
//     if (arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i]);
//     }
//}


// let result = 0;
// const arr = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5];
// for (let i in arr) {
//     if (arr[i] > 0) {
//         result += arr[i]; 
//     }
// }
// console.log(result)


// const arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i in arr) {
//     if (arr[i] == 4){
//         console.log("Есть!")
//         break;
//     }
// }


// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {
//   let num = String(arr[i]);
//   let char = num[0];
//   if (char == 1 || char == 2 || char == 5) {
//     console.log(num);
//   }
// }


// const arr = [1,2,3,4,5,6,7,8,9];
// for( i = 0; i < arr.length; i++){
//    console.log("-" + arr.join('-') + '-')
// }


// const dayofweek = ["Понедельник", "Вторник", "Среда", "Четверк", "Пятница", "Суббота", "Воскресенье"];
// for (let i in dayofweek) {
//     if (i == "5" || i == "6") {
//         console.log(dayofweek[i].bolt());
//     }
//     else {
//         console.log(dayofweek[i]);
//     }
// }


// let day = new Date().getDate();
// const dayofweek = ["Понедельник", "Вторник", "Среда", "Четверк", "Пятница", "Суббота", "Воскресенье"];
// for (let i in dayofweek) {
//     if (i == day - 1) {
//         console.log(dayofweek[i].italics())
//     }
//     else{
//         console.log(dayofweek[i])
//     }
// }


// let n = 1000;
// let num = 0;
// do {
//     n /= 2;
//     num += 1;
// } while(n > 50);
// console.log(num)