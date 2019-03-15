var login = document.getElementById("login");
var pass = document.getElementById("pass");

var loginPage = document.getElementById("loginPage");

loginPage.addEventListener("click", function(){
    if(login.value == "admin" && pass.value == "qwerty"){
        console.log(login.value);
        document.location.href = "index.html";
    }
}, false);