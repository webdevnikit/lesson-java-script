let money,
    name,
    time,
    price = 1000;

mainList = {
    budget      : money,
    shopName    : name,
    shopGoods   : [],
    employers   : {},
    open        : false,
    discount    : true,
    shopItem    : [],
    start : function start (){
        money = +prompt('Ваш бюджет ?');
        while (isNaN(money) || money== "" || money == null){
            money = +prompt('Ваш бюджет ?');
        }
        name = prompt('Имя вашего магазина ?').toUpperCase();
        time = 22;
    },
    chooseGoods : function chooseGoods(){
        for (let i = 0; i < 5; i++){
            let a = prompt('Какой тип товара будем продавать ?');
            if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50){
                mainList.shopGoods[i] = a;
                console.log('Good');
            } else {
                i--;
            }
        }
    },
    workTime : function workTime(time){
        if (time < 0){
            console.log('Такого просто не может быть !');
        } else if (time > 8 && time < 20){
            console.log('Время работать !');
            mainList.open = true;
        }else if (time > 21 && time < 24){
            console.log('Уже слишком поздно !');
        } else {
            console.log('В сутках только 24 часа');
        }
    },
    dayBudget : function dayBudget(money){
        mainList.budget = money/30;
        alert('Ваш бюджет на день ' + mainList.budget);
    },
    checkDiscount : function checkDiscount(price, discount){
        if (mainList.discount == true){
            price = price*80/100;
        }
        console.log(price);
    },
    hireEmployers : function hireEmployers(){
        for (let i = 1; i < 5; i++){
            mainList.employers[i] =prompt('Введитя имя и телефон нового сотрудника в формате Номер - Имя');
        }
    },
    chooseShopItem : function chooseShopItem(){
         let item = prompt("Перечислети товары через запятую которые будем продавать",'');
         while (typeof(item) === null || item == '' || typeof(item) !== 'string' ){
             item = prompt("Перечислети товары через запятую которые будем продавать",'');
         }
         mainList.shopItem = item.split(',');
         mainList.shopItem.push(prompt('Подождите, еще ?',''));
         mainList.shopItem.sort();

    },
    writeShopItem : function writeShopItem() {
        let l
        mainList.shopItem.forEach(function (item,i) {
            l = i +1;
            alert('У нас вы можете купить '+ l +' : '+item);
        })
    },
    writeSystem : function writeSystem(){
        console.log('Наш магазтн включает в себя');
        for (let key in mainList){
            console.log(key);
        }
    },
}

// start();
// chooseGoods();
// workTime(15);
// dayBudget(money);
// checkDiscount(price, mainList.discount);
//hireEmployers();





console.log(mainList);


