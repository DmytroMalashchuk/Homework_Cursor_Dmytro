const costHotdog = 15.678;
const costPizza = 123.965;
const costKebab = 90.2345;
const amountMoney = 500;
const maxCost = Math.max(costHotdog, costPizza, costKebab);
const minCost = Math.min(costHotdog, costPizza, costKebab);
const sumProducts = costHotdog + costPizza + costKebab;
const sumRoundProducts = Math.floor(costHotdog) + Math.floor(costPizza) + Math.floor(costKebab);
const roundSumRoundProducts = Math.round(sumRoundProducts/100)*100;
const pairNumber = sumRoundProducts % 2 == 0;
const restMoney = Number((amountMoney - sumProducts).toFixed(2));
const averageCost = Number((sumProducts / 3).toFixed(2));
const randomDiscount = Number((Math.random() * 100).toFixed());
const discount = sumRoundProducts * randomDiscount / 100;
const cleanProfit = Number((sumRoundProducts / 2 - discount).toFixed(2));
document.writeln(`<b>Ціни:</b></br> Hotdog: ${costHotdog}</br> Pizza: ${costPizza}
</br> Kebab: ${costKebab}</br></br>`)
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