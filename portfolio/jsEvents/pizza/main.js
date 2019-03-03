
var fCheese = pizza.pizzaList.options[0];
var gavai = pizza.pizzaList.options[1];
var barbeku = pizza.pizzaList.options[2];

var buy = document.getElementById('buy');
var sum = document.getElementById('sum');
var reset = document.getElementById('reset');

var s = document.getElementById('s');
var m = document.getElementById('m');
var x = document.getElementById('x');

var mush = document.getElementById('mush');
var ch = document.getElementById('ch');
var meat = document.getElementById('meat');

var courier = document.getElementById('courier');
var pickup = document.getElementById('pickup')

var count = 0;

console.log(fCheese.value);

buy.addEventListener("click", function (e) {

  if(fCheese.selected == true){
    count+=20;
    console.log(count);
    sum.innerText = "Сумма: " + count + " Грн";
  }else if (gavai.selected == true) {
    count+=30;
    sum.innerText = "Сумма: " + count + " Грн";
  }else if (barbeku.selected == true) {
    count+=40;
    sum.innerText = "Сумма: " + count + " Грн";
  }

  if (s.checked == true) {
    count+=10;
    sum.innerText = "Сумма: " + count + " Грн";
  }else if (m.checked) {
    count+=20;
    sum.innerText = "Сумма: " + count + " Грн";
  }else if (x.checked) {
    count+=30;
    sum.innerText = "Сумма: " + count + " Грн";
  }

  if (mush.checked == true) {
    count+=20;
    sum.innerText = "Сумма: " + count + " Грн";
  }else if (ch.checked) {
    count+=25;
    sum.innerText = "Сумма: " + count + " Грн";
  }else if (meat.checked) {
    count+=35;
    sum.innerText = "Сумма: " + count + " Грн";
  }

  if (courier.checked == true) {
    count+=40;
    sum.innerText = "Сумма: " + count + " Грн";
  }

  if (s.checked == false && m.checked == false && x.checked == false) {
    count = 0;
    sum.innerText = "Выберите размер пиццы";
    sum.className = "error";

  }
  // else if (mush.checked == false || ch.checked == false || meat.checked == false) {
  //   sum.innerText = "Вы что-то пропустили";
  // }

  else if (courier.checked == false && pickup.checked == false) {
    count = 0;
    sum.innerText = "Выберите способ доставки";
    sum.className = "error";
  }



}, false);

reset.addEventListener("click", function () {
  sum.innerText = "Сумма: 0";
  count = 0;
}, false)
