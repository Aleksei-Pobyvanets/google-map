document.addEventListener("DOMContentLoaded", function (event) {
console.log("DOM fully loaded and parsed");

    var markers = [];
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let labelIndex = 0;

function save() {
  localStorage.setItem('markers', JSON.stringify(locations));
  locations = JSON.parse(localStorage.getItem('markers'));
}

    console.log(markers)

    function initialize() {
        var mapOptions = {
            zoom: 18,
            center: new google.maps.LatLng(38.983064, -76.9473872) 
        };
    
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
        markers[0] = new google.maps.Marker({
            position: new google.maps.LatLng(38.983064, -76.9473872),
            map: map,
            label: labels[labelIndex++ % labels.length],
            title: "Van Munching Hall"
        });
    
        markers[1] = new google.maps.Marker({
            position: new google.maps.LatLng(38.9827089, -76.9475412),
            map: map,
            label: labels[labelIndex++ % labels.length],
            title: "The Smith Store",
        });
    

        for (var i = 0; i < markers.length; i++) {
          
          var mark = markers[i]
          console.log(mark);
        }
        
        google.maps.event.addListener(mark, 'click', removeMar) 
          
        
        function removeMar() {
          console.log("sd")
          for (var i = 1; i < markers.length; i++)
          markers[i].setMap(null);
          save()
        };

        map.addListener("click", event => {
            alrt()
            addMarker(event.latLng);
        });
        function addMarker(location, value) {
        const marker = new google.maps.Marker({
          position: location,
          title: value,
          label: labels[labelIndex++ % labels.length],
          map: map,
      });
      markers[i].push(marker);
      console.log(marker.label)
      for (var i = 0; i < markers.length; i++) {
        var mark = markers[i]
        console.log(mark);
      }
      save()
    }
    function alrt(value){
          var value = prompt("Please enter your text");
          if (value == null || value == "") {
          alert("Your have added marker with out text"),alrt();
          } 
      console.log(typeof value)
      console.log(markers)
      }

    }
    
    google.maps.event.addDomListener(window, 'load', initialize);

})



  