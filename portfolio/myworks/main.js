$("#menuList").hide();

$("#openButt").click(function(){
    // $("#menuList").removeClass("d-none")
    $("#menuList").slideDown();
})

$("#closeButt").click(function(){
    // $("#menuList").addClass("d-none")
    $("#menuList").slideUp();
})

$("#filterList").hide();

$("#openButtFilter").click(function(){
    // $("#menuList").removeClass("d-none")
    $("#filterList").slideDown();
})

$("#closeButtFilter").click(function(){
    // $("#menuList").addClass("d-none")
    $("#filterList").slideUp();
})