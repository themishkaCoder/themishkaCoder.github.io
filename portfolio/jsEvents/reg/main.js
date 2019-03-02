var login = document.getElementById("login");
var pass = document.getElementById("pass");
var loginB = document.getElementById("loginButt");
var text = document.getElementById("text");

loginB.addEventListener("click", function(){

    // if(login.value == 0 && pass.value == 0){
    //     login.className = "error";
    //     pass.className = "error";
    // }
    
    if(login.value == "admin" && pass.value == 12345){
        login.className = "success";
        pass.className = "success";
        text.style.color = "green";
        text.innerText = "Вы авторизированы";
    }else{
        login.className = "error";
        pass.className = "error";
        text.style.color = "red";
        text.innerText = "Вы не правильно заполнили логин или пароль";
    }

},false);