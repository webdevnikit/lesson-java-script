let money,
    name,
    time,
    price = 1000;

mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: true,
}

let start = () =>{
    money = +prompt('Ваш бюджет ?');
    while (isNaN(money) || money== "" || money == null){
        money = +prompt('Ваш бюджет ?');
    }
    name = prompt('Имя вашего магазина ?').toUpperCase();
    time = 22;
}

let chooseGoods = () =>{
    for (let i = 0; i < 5; i++){

        let a = prompt('Какой тип товара будем продавать ?');

        if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50){
            mainList.shopGoods[i] = a;
            console.log('Good');
        } else {
            i--;
        }
    }
}

let workTime = (time) =>{
    if (time < 0){
        console.log('Такого просто не может быть !');
    } else if (time > 8 && time < 20){
        console.log('Время работать !');
    }else if (time > 21 && time < 24){
        console.log('Уже слишком поздно !');
    } else {
        console.log('В сутках только 24 часа');
    }
}

let dayBudget = (money) =>{
    mainList.budget = money/30;
    alert('Ваш бюджет на день ' + mainList.budget);
}

let checkDiscount = (price, discount) => {
    if (mainList.discount == true){
        price = price*80/100;
    }
    console.log(price);
}

let hireEmployers = () =>{
    for (let i = 1; i < 5; i++){
        mainList.employers[i] =prompt('Введитя имя и телефон нового сотрудника в формате Номер - Имя');
    }
}

// start();
// chooseGoods();
// workTime(15);
// dayBudget(money);
// checkDiscount(price, mainList.discount);
//hireEmployers();



console.log(mainList);


