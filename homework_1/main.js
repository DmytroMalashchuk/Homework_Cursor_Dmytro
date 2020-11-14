const COST_HOT_DOG = 15.678;
const COST_PIZZA = 123.965;
const COST_KEBAB = 90.2345;
const AMOUNT_MONEY = 500;
const maxCost = Math.max(COST_HOT_DOG, COST_PIZZA, COST_KEBAB);
const minCost = Math.min(COST_HOT_DOG, COST_PIZZA, COST_KEBAB);
const sumProducts = COST_HOT_DOG + COST_PIZZA + COST_KEBAB;
const sumRoundProducts = Math.floor(COST_HOT_DOG) + Math.floor(COST_PIZZA) + Math.floor(COST_KEBAB);
const roundSumRoundProducts = Math.ceil(sumRoundProducts/100)*100;
const pairNumber = sumRoundProducts % 2 === 0;
const restMoney = Number((AMOUNT_MONEY - sumProducts).toFixed(2));
const averageCost = Number((sumProducts / 3).toFixed(2));
const randomDiscount = Number((Math.random() * 100).toFixed());
const discount = sumRoundProducts * randomDiscount / 100;
const cleanProfit = Number((sumRoundProducts / 2 - discount).toFixed(2));
document.writeln(`<b>Ціни:</b></br> Hotdog: ${COST_HOT_DOG}</br> Pizza: ${COST_PIZZA}
</br> Kebab: ${COST_KEBAB}</br></br>`)
document.writeln(`Максимальне число: ${maxCost}</br></br>`);
document.writeln(`Мінімальне число: ${minCost}</br></br>`);
document.writeln(`Сума всіх товарів: ${sumProducts}</br></br>`);
document.writeln(`Сума цілої частини вартості всіх товарів: ${sumRoundProducts}</br></br>`);
document.writeln(`Округлена до сотень сума цілої частини вартості всіх товарів: 
${roundSumRoundProducts}</br></br>`);
document.writeln(`Чи є сума всіх товарів парним числом: ${pairNumber}</br></br>`);
document.writeln(`Сума решти, при оплаті всіх товарів (клієнт платить 500 грн): 
${restMoney}</br></br>`);
document.writeln(`Середнє значення цін: ${averageCost}</br></br>`);
document.writeln(`Чистий прибуток: ${cleanProfit}`);