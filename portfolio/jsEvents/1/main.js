window.onload = function () {



var inputCh = document.getElementById("changeI");



inputCh.addEventListener("change", function(){
        alert("Инпут изменился на: " + inputCh.value);
        
        console.log("Инпут изменился на: ");
    },
false);

}
var blurInt = document.getElementById("blur");
blurInt.addEventListener("onblur", function(){
    
    blurInt.className = "blured";
},false);

var width = window.innerWidth;
var height = window.innerHeight;

window.addEventListener("resize", function(){

    
    document.write("Width: " + width + " Height: " + height);

},false);