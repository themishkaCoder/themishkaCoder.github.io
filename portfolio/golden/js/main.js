var menuContent = document.getElementsByClassName("nav-item");

var menuButton = document.getElementById("menuButton");




function openMenu(){
    menuContent[0].className = "nav-item";
    menuContent[1].className = "nav-item";
    menuContent[2].className = "nav-item";
    menuContent[3].className = "nav-item";
    menuContent[4].className = "nav-item";
    
    menuButton.removeAttribute("onclick");
    menuButton.setAttribute("onclick", "closeMenu()");
    menuButton.innerHTML = "<i class='fas fa-chevron-circle-down'></i>";
}

function closeMenu(){
    menuContent[0].className = "d-none d-lg-block nav-item";
    menuContent[1].className = "d-none d-lg-block nav-item";
    menuContent[2].className = "d-none d-lg-block nav-item";
    menuContent[3].className = "d-none d-lg-block nav-item";
    menuContent[4].className = "d-none d-lg-block nav-item";
    
    menuButton.removeAttribute("onclick");
    menuButton.setAttribute("onclick", "openMenu()");
    menuButton.innerHTML = "<i class='fas fa-bars'></i>";
}