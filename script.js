  
document.addEventListener("DOMContentLoaded", function (event) {
console.log("DOM fully loaded and parsed");

    let map;
    let markers = [];
    
    function alrt(){
        var value = prompt("Please enter your text");
        if (value == null || value == "") {
        alert("Your have added marker with out text"),alrt();
        } else {
        alert("All right") ;
        }
    console.log(value)
    }


    // function showTitel(value) {
    //     alert(value)
    // }

    function initMap() {
      const haightAshbury = { lat: 48.9862071, lng: 31.3835894 };
      map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: haightAshbury,
    });
    new google.maps.Marker({
        map,
        title: "Hello World!"
    });
      
      map.addListener("click", event => {
        alrt()
        addMarker(event.latLng);
      });
      addMarker(haightAshbury);
    }

    function addMarker(location, value) {
      const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: value,
      });
      markers.push(marker);
      console.log(value, "1")
    }
    initMap()
})



