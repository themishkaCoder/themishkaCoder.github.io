var text = "48Ф4S Lorem ipsum dolor sit amet, consectetur adipisicing elit. 66 Quaerat sit unde aperiam ullam harum  1144 voluptate provident rem velit  8900 dolorum consectetur, voluptatem, nobis cum culpa ex doloribus, nihil commodi magni eligendi quidem.  5678Unde, cum repudiandae nostrum 66 rerum odio numquam style.css minima enim. index22.html  Provident ducimus  48Ф4S optio debitis temporibus repellendus molestias harum incidunt corrupti 48Ф4S 48Ф4S 48Ф4S.";
console.log(text);
document.write(text);
document.write("<br>");
document.write("<br>");
var resM = text.match(/\d\d\d\d/g);
//var resR = text.replace(/\d"\d\w\d\w/g, "*");
var resR = text.replace(/48Ф4S/g, "*");
var resMN = text.match(/[0-9]+/g);
var resT = text.match(/index22.html/g);
document.write(resM);
document.write("<br>");
document.write("<br>");
document.write(resR);
document.write("<br>");
document.write("<br>");
document.write(resMN);
document.write("<br>");
document.write("<br>");
document.write(resT);
