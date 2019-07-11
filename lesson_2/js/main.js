/*var ds = 1,
    sum = 0,
    num = prompt('Number ?');

for (let i = 0; i < num.length; i++){
    sum += +num[i];
    ds *= +num[i]
}

console.log(sum);
console.log(ds);
console.log(Math.pow(ds,3));*/

let money = +prompt('Ваш бюджет ?');
let name = prompt('Имя вашего магазина ?');
let time = 22;

mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
}
for (let i = 0; i < 5; i++){

     let a = prompt('Какой тип товара будем продавать ?');

    if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50){
        mainList.shopGoods[i] = a;
        console.log('Good');
    } else {
        i--;
    }
}

if (time < 0){
    console.log('Такого просто не может быть !');
} else if (time > 8 && time < 20){
    console.log('Время работать !');
    }else if (time > 21 && time < 24){
        console.log('Уже слишком поздно !');
        } else {
            console.log('В сутках только 24 часа');
            }

alert ('Ваш бюджет на день ' + mainList.budget / 30);

console.log(mainList);


