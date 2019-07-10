/*
var budget = +prompt('Ваш бюджет ?');
var nameShop = prompt('Имя вашего магазина ?');
mainList = {
    budget: budget,
    nameShop: nameShop,
    shopGoods: [],
    employers: {},
    open: false,
}
for (let i = 0; i<=2; i++){
   mainList.shopGoods[i] = prompt('Какой тип товара будем продавать ?');
}
alert ('Ваш бюджет на день ' + mainList.budget / 30);
*/

var ds = 1,
    sum = 0,
    num = prompt('Number ?');

for (let i = 0; i < num.length; i++){
    sum += +num[i];
    ds *= +num[i]
}

console.log(sum);
console.log(ds);
console.log(Math.pow(ds,3));


