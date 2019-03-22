$("#menuListJs").hide();

$("#openMenu").click(function(){
    $("#menuListJs").slideDown();
})

$("#exitMenu").click(function(){
    $("#menuListJs").slideUp();
})




var links = {
    main: "Главная",
    mainHref: "/",
    mess: "Поболтать",
    messHref: "chat",
    help: "Помощь",
    helpHref: "help",
    profile: "Профиль",
    profileHref: "profile"
};

var mainLink = document.getElementsByClassName("mainLink");
var messLink = document.getElementsByClassName("messLink");
var helpLink = document.getElementsByClassName("helpLink");
var profileLink = document.getElementsByClassName("profileLink");
var menuList = document.getElementById("menuList");


for(var i = 0; i < messLink.length; i++){
    messLink[i].innerText = links.mess;
    messLink[i].setAttribute("href", links.messHref);
    //console.log(i);
}

for(var i = 0; i < helpLink.length; i++){
    helpLink[i].innerText = links.help;
    helpLink[i].setAttribute("href", links.helpHref);
    //console.log(i);
}

for(var i = 0; i < profileLink.length; i++){
    profileLink[i].innerText = links.profile;
    profileLink[i].setAttribute("href", links.profileHref);
    //console.log(i);
}

for(var i = 0; i < mainLink.length; i++){
    mainLink[i].innerText = links.main;
    mainLink[i].setAttribute("href", links.mainHref);
    //console.log(i);
}

// var $allMess = $("#allMess");

// $allMess.val("test");