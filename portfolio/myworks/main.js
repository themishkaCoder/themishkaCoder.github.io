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

var fixNav = document.getElementById("fixNav");

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrolled > 70){

    // fixNav.style.position = "fixed";
    // fixNav.style.zIndex = "5";
    // fixNav.style.backgroundColor = "white";
    $("#fixNav").addClass("fixNavBar")

  }else{
    
    $("#fixNav").removeClass("fixNavBar");

  }
}

var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8,
    styles: [
      {
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#000000"
              }
          ]
      },
      {
          "featureType": "landscape",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {}
  ]
  });
}


