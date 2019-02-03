var arr = [21, 76, 8, 9, 0];
document.write(arr + "<br>");
document.write(arr.reverse() + "<br>");
document.write(arr.join("&"));
document.write("<hr>");

var arr_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.write(arr_2.splice(3) + "<br>");
arr_2.push("11", "12", "13")
document.write(arr_2 + "<br>");
document.write(arr_2.slice(2, 5) + "<br>");

var arr_3 = arr.concat(arr_2);
document.write(arr_3.reverse());

document.write("<hr>");

var user = {
    name: "Чувак",
    age: "21",
    email: "example@gmail.com",
    country: "Ukraine",
    discription: "Супер-пупер вебразработчик",
};

document.write(user.name + "<br>" + user.age + "<br>" + user.email + "<br>" + user.country + "<br>" + user.discription);


document.write("<hr>");

function add(){
    var a = Number(prompt("a"));
    var b = Number(prompt("b"));
    var c = alert(a+b);
}

function sub(){
    var a = Number(prompt("a"));
    var b = Number(prompt("b"));
    var c = alert(a-b);
}

function mul(){
    var a = Number(prompt("a"));
    var b = Number(prompt("b"));
    var c = alert(a*b);
}

function div(){
    var a = Number(prompt("a"));
    var b = Number(prompt("b"));
    if(b == 0){
        alert("на ноль делить нельзя!");
    }else{
        var c = alert(a/b);
    }
    
}

document.write("<hr>");


function fun(){
    var a = Number(prompt("a"));
    if(a <= 9 || a == 0){
        alert("Это простое число");
    }else{
        alert("Это не простое число");
    }

    if(a % 2 || a % 5 || a % 3 || a % 6 || a % 9){
        alert("Это число без остатка");
    }else{
        alert("Это число с остатка");
    }
}


function calc(){
    var a = Number(prompt("a"));
    var b = Number(prompt("b"));
    var c = Number(prompt("c"));

    var arr = [a, b ,c];

    var ave = (a + b + c) / arr.length;
    alert(ave);
}

var first;
var second;

function coreny(){
    first = Number(prompt("a"));
    second = Number(prompt("b"));

    a = Math.sqrt(first + second);
    alert(a);
}

var result;

var ternar = a + c > 10 ? result = "Noe Enough" : result = "Enough";

var b = confirm("<p>Принять второе значение за истину?");

var t = b ? document.write("<p>Второе значение ИСТИНА") : document.write("<p>Второе значение ЛОЖЬ");


function time(){
    t = Number(prompt("Кторый час"));
    if(t <= 10){
        alert("Good morning");
    }else if(t < 20){
        alert("Good day!");
    }else if(t > 20){
        alert("Good evening!");
    }
}

function planet(){
    var x = Number(prompt("Введите номер планеты"));
    switch(x){
        case 1:
            alert("Перед землей");
            break;
        case 2:
            alert("Перед землей");
            break;
        case 3:
            alert("Это Земля");
            break;
        case 4:
            alert("За Землей");
            break;
        case 5:
            alert("За Землей");
            break;
         
        case 6:
            alert("За Землей");
            break;

        case 7:
            alert("За Землей");
            break;

        case 8:
            alert("За Землей");
            break;
         
    }
}