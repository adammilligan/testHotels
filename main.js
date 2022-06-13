// Задача на логику №1 примерно (15) минут, плюс время сформулировать ответ
// 90 человек. Часть всегда всрёт, часть всегда говорит правду
// Ответов 45+35+30=110 значит лишних ответов 20
// Говорящие правду давали один ответ "да", неправду по два ответа "да"
// Значит лишние ответы "да" дали люди, говорящие неправду. 110-90=20
// 20 человек всегда врут, 70 всегда говорят правду

// Задание на логику №2 (20 минут) вставить в квадрат числа от 3 до 11, чтобы произведенния 1 строки было равно произвдению первого столбца и тд
// У нас значение "а" общее для первого ряда и первого столбца, значение "д" общее для второго столбца и ряда, значение "з" общее для третьего толбца я ряда. сюда мы можем записать числа, которые нам не понадобятся в произвольном порядке
// Значит нам надо найти пары числе, чтобы их произведение было одинаковым. Это будут числа кратные "2" 5 10, 3 и 6, 4 и 8
// 11 8  5
// 4  9  6
// 10 3  7

// Задание на логику 3 (решил быстро,просчитывал долго)
// на самом деле часто встречал задачу с яйцом и 100 этажами, поэтому знал принцып решения
// получается x(x+1)/2=5000 . Получается, что мы бросаем со 100 метров, потом с 199 .... и так уменьшаем шаг на 1 метр. второй предмет бросаем в полученном промежутке по порядку
// (100+99+98+97+96+95+94+93+92+91+90+89+88+87+86+85+84+83+82+81+80+79+78+77+76+75+74+73+72+71+70+69+68+67+65+64+63+62+61+60+59+58+57+56+55+54+53+52+51+50+49+48+47+46+45+44+43+42+41+40+39+38+37+36+35+34+33+32+31+30+29+28+27+26+25+24+23+22+21+20+19+18+17+16+15+14+13+12+11+10+9+8+7+6+5+4+3+2+1)
// сумма равна 4984. значит лучший результат 100 бросков. худший, это когда мы первым предметом дойдём до 4984 метров и будем второй кидать с 4985 метра. 100+(5000-4684)=116 попыток будет худшим результатом
// но я много видел подобных задач. поэтому решение понимал заранее





//Задание 1

let a = ['Москва','Санкт-Петербург','Воронеж']
let c = a.join(', '); 
c+= '.'
console.log(c);

//Задание 2

function numRound(num){
    return Math.round(num/5) * 5;
}
console.log(numRound(11.675756757))
console.log(numRound(14.675756757))
console.log(numRound(-4.675756757))

//Задание 3

const CASES = [2, 0, 1, 1, 1, 2];
function count(txt) {
    return function bindedCount(amount) {
      return txt[(amount % 100 > 4 && amount % 100 < 20)  ?2: CASES[(amount % 10 < 5) ?amount % 10  : 5]
      ];
    };
  }
const comp = ['Компьютер', 'Компьютера', 'Компьютеров'];
const getComp = count(comp);
console.log(getComp(25));
console.log(getComp(41));
console.log(getComp(1048));
console.log(getComp(32));

//Задание 4

function check(arg){
    if (arg % 2 == 0 || arg % 3 == 0 || arg % 5 ==0)
    return 'Не является простым';
    else return 'Простое число';
}
    console.log(check(25));
    console.log(check(24));
    console.log(check(9));
    console.log(check(17));
    console.log(check(173));

//Задание 5
const numbersFirst = [7,17,1,9,1,17,56,56,23];
const countItemsFirst = numbersFirst.reduce((acc, item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1;
    return acc;
  }, {});
  
  const resultFirst = Object.keys(countItemsFirst).filter((item) => countItemsFirst[item] > 1);
  console.log(resultFirst);

const numbersSecond = [56,17,17,1,23,34,23,1,8,1];
const countItemsSecond = numbersSecond.reduce((acc, item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1;
    return acc;
  }, {});
  
  const resultSecond = Object.keys(countItemsSecond).filter((item) => countItemsSecond[item] > 1);
  console.log(resultSecond);

  const numbersThird= resultFirst.concat(resultSecond);
  const countItemsThird = numbersThird.reduce((acc, item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1;
    return acc;
  }, {});
  
  const resultThird = Object.keys(countItemsThird).filter((item) => countItemsThird[item] > 1);
  console.log(resultThird);
  








 

