let openBtn             = document.getElementById('open-btn'),
    nameValue           = document.getElementsByClassName('name-value')[0],
    budgetValue         = document.getElementsByClassName('budget-value')[0],
    goodsValue          = document.getElementsByClassName('goods-value')[0],
    itemsValue          = document.getElementsByClassName('items-value')[0],
    employersValue      = document.getElementsByClassName('employers-value')[0],
    discountValue       = document.getElementsByClassName('discount-value')[0],
    isOpenValue         = document.getElementsByClassName('isopen-value')[0],
    goodsItem           = document.getElementsByClassName('goods-item'),
    goodsItemBtn        = document.getElementsByTagName('button')[1],
    countBudgetBtn      = document.getElementsByTagName('button')[2],
    hireEmployersBtn    = document.getElementsByTagName('button')[3],
    chooseItem          = document.querySelector('.choose-item'),
    timeValue           = document.querySelector('.time-value'),
    countBudgetValue    = document.querySelector('.count-budget-value'),
    hireEmployersItem   = document.querySelectorAll('.hire-employers-item');

let time,
    price = 1000,
    money;

openBtn.addEventListener('click', () =>{
    money = +prompt('Ваш бюджет ?');
    while (isNaN(money) || money== "" || money == null){
        money = +prompt('Ваш бюджет ?');
    }
    nameValue.textContent   = prompt('Имя вашего магазина ?').toUpperCase();
    budgetValue.textContent = money;
    mainList.budget         = money

});
goodsItemBtn.addEventListener('click', () =>{
    goodsValue.textContent = '';
    for (let i = 0; i < goodsItem.length; i++){
        let a = goodsItem[i].value;
        if ((typeof(a)) === 'string' && (typeof(a)) !== null && a.length < 50){
            mainList.shopGoods[i] = a;
            goodsValue.textContent += a + ', ';
            console.log('Good');
        } else {
            i--;
        }
    }
});
chooseItem.addEventListener('change', () =>{
    let item = chooseItem.value;
    if (typeof(item) !== null && item != '' && typeof(item) === 'string' && isNaN(item)) {
        mainList.shopItem = item.split(',');
        mainList.shopItem.sort();
        itemsValue.textContent= mainList.shopItem;
    }
});
timeValue.addEventListener('change', () =>{
    let time = timeValue.value;
    if (time <= 0){
        console.log('Такого просто не может быть !');
        mainList.open = false;
    } else if (time > 8 && time < 20){
        console.log('Время работать !');
        mainList.open = true;
    } else if (time > 19 && time <= 24){
        mainList.open = false;
        console.log('Уже слишком поздно !');
    } else if (time > 0 && time <= 8) {
        mainList.open = false;
        console.log('еще рано, магазин открываеться с 9');
    } else {
        mainList.open = false;
        console.log('В сутках только 24 часа');
    }
    if (mainList.open == true){
        isOpenValue.style.backgroundColor = 'green';
    }
    if (mainList.open == false){
        isOpenValue.style.backgroundColor = 'red';
    }
});
countBudgetBtn.addEventListener('click', () => {
    countBudgetValue.value = mainList.budget/30;
});
hireEmployersBtn.addEventListener('click', () =>{
    employersValue.textContent = '';
    for (let i = 0; i < hireEmployersItem.length; i++){
        mainList.employers[i] = hireEmployersItem[i].value;
        employersValue.textContent += hireEmployersItem[i].value+ ', ';
    }
});

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





