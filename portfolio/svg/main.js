var el = document.getElementById("el");
var moreW = document.getElementById("moreW");

var count = 100;
var count2 = 25;

moreW.addEventListener("click", ()=>{
    
    
    count+=10;
    count2+=10;
    console.log(count);
    el.setAttribute("rx", count);
    el.setAttribute("ry", count2);
    console.log(count);
},false)
