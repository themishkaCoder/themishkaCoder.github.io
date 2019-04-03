$(function(){

    var pos = 0;

    $("body").keypress(function (e) { 
        if(e.which == 100){
            pos -= 10;
            $("body").css("background-position-x", pos + "px");
            $("#player").addClass("player-run");
        }else if(e.which == 97){
            pos += 10;
            $("body").css("background-position-x", pos + "px");
            $("#player").addClass("player-run-back");
        }

        if(pos == 50){
            e.preventDefault();
        }
        // pos -= 10;
        // $("body").css("background-position-x", pos + "px");
        
    });
    $("body").keyup(function(){
        $("#player").removeClass("player-run");
        $("#player").removeClass("player-run-back");
    })

    
})